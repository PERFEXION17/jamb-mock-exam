import { jambQuestions } from "./questions.js";

// Darkmode
const themeBtn = document.getElementById('theme-toggle')
const currentTheme = localStorage.getItem('theme')

if (currentTheme === "dark") {
  document.body.classList.add("darkmode");
}

function themeToggle() {
  document.body.classList.toggle('darkmode')
  let theme = 'light'
  if (document.body.classList.contains('darkmode')){
    theme = 'dark'
  }
  localStorage.setItem('theme', theme)
}
themeBtn.addEventListener('click', themeToggle)

// State Management
let currentSubject = "english";
let currentIdx = 0;
let timeLeft = 120 * 60;
let countdownTimer; // Made global so it can be cleared easily

let userAnswers = {
  english: Array(60).fill(null),
  biology: Array(40).fill(null),
  physics: Array(40).fill(null),
  chemistry: Array(40).fill(null),
};

// DOM Elements
const timerEl = document.getElementById("timer");
const questionArea = document.querySelector(".question-card__text");
const optionsArea = document.getElementById("options-area");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const navButtons = document.querySelectorAll(".subject-nav__btn");

// --- NEW: Shuffle Logic ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle all subjects on initialisation
for (const subject in jambQuestions) {
  shuffleArray(jambQuestions[subject]);
}
// --------------------------

function startTimer() {
  countdownTimer = setInterval(() => {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    timerEl.textContent = `Time Left: ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      alert("Time is up! Your exam has been submitted.");
      submitExam();
    }
    timeLeft--;
  }, 1000);
}

function renderQuestion() {
  const question = jambQuestions[currentSubject][currentIdx];
  questionArea.innerHTML = `${currentIdx + 1}. ${question.q}`;
  optionsArea.innerHTML = "";

  question.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    if (userAnswers[currentSubject][currentIdx] === i) {
      btn.classList.add("option-btn--selected");
    }
    btn.textContent = opt;
    btn.onclick = () => selectOption(i);
    optionsArea.appendChild(btn);
  });

  // Update Button States
  prevBtn.disabled = currentIdx === 0;
  nextBtn.disabled = currentIdx === jambQuestions[currentSubject].length - 1;
}

function selectOption(index) {
  userAnswers[currentSubject][currentIdx] = index;
  renderQuestion();
}

function switchSubject(subject) {
  currentSubject = subject;
  currentIdx = 0;

  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.subject === subject);
  });

  renderQuestion();
}

// --- UPDATED: Submit and Review Logic ---
function submitExam() {
  clearInterval(countdownTimer);

  let totalWeightedScore = 0;
  let subjectBreakdownHTML = `<ul class="subject-breakdown">`;

  // Define weights
  const weights = {
    english: 100 / 60, // ~1.666
    biology: 2.5,
    physics: 2.5,
    chemistry: 2.5,
  };

  for (const subject in jambQuestions) {
    let correctCount = 0;
    let subTotalQuestions = jambQuestions[subject].length;

    jambQuestions[subject].forEach((q, idx) => {
      if (userAnswers[subject][idx] === q.a) {
        correctCount++;
      }
    });

    // Calculate weighted score for this subject
    let subjectWeightedScore = correctCount * weights[subject];

    // Round to 1 decimal place for the breakdown, but keep full precision for total
    let displayScore = subjectWeightedScore.toFixed(1);

    totalWeightedScore += subjectWeightedScore;

    subjectBreakdownHTML += `
      <li>
        <strong>${subject.toUpperCase()}:</strong> 
        <span class="sub-score">${displayScore} / 100</span> 
        <small>(${correctCount} correct)</small>
      </li>`;
  }

  subjectBreakdownHTML += `</ul>`;

  // Final Total (Rounded to nearest whole number like JAMB does)
  const finalScore = Math.round(totalWeightedScore);

  // Save to "No-Backend" Leaderboard
  saveToLocalLeaderboard(finalScore);

  // WhatsApp Viral Text
  const subjectSummary = extractSummary(); // Call the function here

  const shareText = encodeURIComponent(
    `🎓 *JAMB 2026 MOCK RESULT* 🎓\n\n` +
      `I just scored *${finalScore}/400*! 🎯\n\n` +
      `*Breakdown:*\n${subjectSummary}\n\n` +
      `Think you can beat my score? Try the 2026 CBT Practice tool here: \n` +
      `${window.location.href}`,
  );
  const whatsappUrl = `https://wa.me/?text=${shareText}`;

  document.querySelector(".exam-container").innerHTML = `
    <div class="result-card">
      <h2 class="congrats-text">${getEncouragement(finalScore)}</h2>
      <div class="score-circle">
        <span class="big-score">${finalScore}</span>
        <span class="total-possible">/ 400</span>
      </div>
      
      <div class="breakdown-container">
        <h3>SUBJECT PERFORMANCE</h3>
        ${subjectBreakdownHTML}
      </div>

      <div class="leaderboard-section">
        <h3>Your Personal Hall of Fame</h3>
        <div id="local-leaderboard"></div>
      </div>

      <div class="result-actions">
        <a href="${whatsappUrl}" target="_blank" class="btn btn--whatsapp">Share Result</a>
        <button class="btn btn--secondary" onclick="window.location.reload()">Retake Exam</button>
        <button class="btn btn--primary" onclick="showReview()">Review Answers</button>
      </div>
    </div>
  `;

  displayLocalLeaderboard();
  (adsbygoogle = window.adsbygoogle || []).push({});
}

function extractSummary() {
  const weights = {
    english: 100 / 60,
    biology: 2.5,
    physics: 2.5,
    chemistry: 2.5,
  };

  let summaryParts = [];

  for (const subject in jambQuestions) {
    let correctCount = 0;

    // Count correct answers for this specific subject
    jambQuestions[subject].forEach((q, idx) => {
      if (userAnswers[subject][idx] === q.a) {
        correctCount++;
      }
    });

    // Calculate the weighted score
    let subjectScore = (correctCount * weights[subject]).toFixed(1);

    // Create a clean string for this subject
    // Example: "ENGLISH: 72.5/100"
    summaryParts.push(`✅ ${subject.toUpperCase()}: ${subjectScore}/100`);
  }

  // Join them with a newline character so they stack vertically in WhatsApp
  return summaryParts.join("\n");
}

// Helper for dynamic encouragement
function getEncouragement(score) {
  if (score >= 300) return "Excellent! University Bound! 🎓";
  if (score >= 250) return "Great Job! Keep pushing! 🚀";
  if (score >= 200) return "Good effort, you're getting there! 👍";
  return "Keep practicing, don't give up! 💪";
}

function showReview() {
  let reviewHTML = `<div class="review-wrapper"><h2>Exam Review</h2>`;

  for (const subject in jambQuestions) {
    reviewHTML += `<h3 class="review-subject-title">${subject.toUpperCase()}</h3>`;

    jambQuestions[subject].forEach((q, idx) => {
      let userAns = userAnswers[subject][idx];
      let isCorrect = userAns === q.a;
      let statusClass = isCorrect ? "text-correct" : "text-wrong";

      let userAnsText = userAns !== null ? q.o[userAns] : "Not Attempted";
      let correctAnsText = q.o[q.a];

      reviewHTML += `
        <div class="review-item">
          <p class="review-q"><strong>Q${idx + 1}:</strong> ${q.q}</p>
          <div class="review-answers">
            <p>Correct Answer: <span class="text-correct">${correctAnsText}</span></p>
            <p>Your Answer: <span class="${statusClass}">${userAnsText}</span></p>
          </div>
        </div>
      `;
    });
  }

  reviewHTML += `
    <div class="review-footer">
      <button class="btn btn--primary" onclick="window.location.reload()">Retake Exam</button>
    </div>
  </div>`;

  document.querySelector(".exam-container").innerHTML = reviewHTML;
}
// ----------------------------------------

// Event Listeners
navButtons.forEach((btn) => {
  btn.onclick = () => switchSubject(btn.dataset.subject);
});

nextBtn.onclick = () => {
  if (currentIdx < jambQuestions[currentSubject].length - 1) {
    currentIdx++;
    renderQuestion();
  }
};

prevBtn.onclick = () => {
  if (currentIdx > 0) {
    currentIdx--;
    renderQuestion();
  }
};

submitBtn.onclick = () => {
  if (confirm("Are you sure you want to submit your exam?")) {
    submitExam();
  }
};

const startScreen = document.getElementById("start-screen");
const mainContainer = document.getElementById("main-exam-container");
const beginBtn = document.getElementById("begin-btn");

beginBtn.onclick = () => {
  // 1. Hide Start Screen
  startScreen.style.display = "none";

  // 2. Show Exam
  mainContainer.style.display = "block";

  // 3. Start Logic
  startTimer();
  renderQuestion();
};

function saveToLocalLeaderboard(score) {
  // Get existing scores from LocalStorage or start with an empty array
  let scores = JSON.parse(localStorage.getItem("jamb_history")) || [];

  // Add new score with date
  const newEntry = {
    score: score,
    date: new Date().toLocaleDateString(),
  };

  scores.push(newEntry);

  // Sort by highest score first and keep only top 5
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 5);

  // Save back to LocalStorage
  localStorage.setItem("jamb_history", JSON.stringify(scores));
}

function displayLocalLeaderboard() {
  const scores = JSON.parse(localStorage.getItem("jamb_history")) || [];
  const container = document.getElementById("local-leaderboard");

  if (scores.length === 0) {
    container.innerHTML = "<p>No records yet!</p>";
    return;
  }

  let listHTML = `<ol class="leaderboard-list">`;
  scores.forEach((entry) => {
    listHTML += `<li><strong>${entry.score}</strong> <small>(${entry.date})</small></li>`;
  });
  listHTML += `</ol>`;

  container.innerHTML = listHTML;
}
