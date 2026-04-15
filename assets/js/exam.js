import { jambQuestions } from "./questions.js";

// ==================== STATE MANAGEMENT ====================
let selectedSubjects = ["english"];
let currentSubject = "english";
let currentIdx = 0;
let timeLeft = 120 * 60;
let countdownTimer;

let userAnswers = {};

// DOM Elements
const timerEl = document.getElementById("timer");
const questionArea = document.getElementById("question-text");
const optionsArea = document.getElementById("options-area");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const subjectNav = document.getElementById("subject-nav");

const startScreen = document.getElementById("start-screen");
const subjectSelectionScreen = document.getElementById(
  "subject-selection-screen",
);
const mainContainer = document.getElementById("main-exam-container");

const beginBtn = document.getElementById("begin-btn");
const startWithSubjectsBtn = document.getElementById("start-with-subjects");
const backToStartBtn = document.getElementById("back-to-start");

const selectionStatus = document.getElementById("selection-status");
const subjectCheckboxes = document.querySelectorAll(".subject-check");

// ==================== SHUFFLE QUESTIONS ====================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

for (const subject in jambQuestions) {
  shuffleArray(jambQuestions[subject]);
}

// ==================== INITIALIZE USER ANSWERS ====================
function initializeUserAnswers() {
  userAnswers = {};
  selectedSubjects.forEach((subject) => {
    const numQuestions = jambQuestions[subject].length;
    userAnswers[subject] = Array(numQuestions).fill(null);
  });
}

// ==================== RENDER SUBJECT NAV ====================
function renderSubjectNav() {
  subjectNav.innerHTML = "";

  selectedSubjects.forEach((subject) => {
    const btn = document.createElement("button");
    btn.className = `subject-nav__btn ${subject === currentSubject ? "active" : ""}`;
    btn.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    btn.dataset.subject = subject;
    btn.onclick = () => switchSubject(subject);
    subjectNav.appendChild(btn);
  });
}

// ==================== TIMER ====================
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

// ==================== RENDER QUESTION ====================
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
    btn.innerHTML = opt;
    btn.onclick = () => selectOption(i);
    optionsArea.appendChild(btn);
  });

  prevBtn.disabled = currentIdx === 0;
  nextBtn.disabled = currentIdx === jambQuestions[currentSubject].length - 1;

  if (window.MathJax) {
    MathJax.typesetPromise([questionArea, optionsArea]).catch((err) =>
      console.error("MathJax rendering error:", err),
    );
  }
}

// ==================== SELECT OPTION ====================
function selectOption(index) {
  userAnswers[currentSubject][currentIdx] = index;
  renderQuestion();
}

// ==================== SWITCH SUBJECT ====================
function switchSubject(subject) {
  currentSubject = subject;
  currentIdx = 0;
  renderSubjectNav();
  renderQuestion();
}

// ==================== SUBJECT SELECTION LOGIC ====================
function updateSelection() {
  const checked = Array.from(subjectCheckboxes).filter((cb) => cb.checked);

  if (checked.length > 3) {
    this.checked = false;
    return;
  }

  selectedSubjects = ["english", ...checked.map((cb) => cb.value)];
  selectionStatus.textContent = `Selected: English + ${checked.length} more`;

  startWithSubjectsBtn.disabled = checked.length !== 3;
}

// ==================== SUBMIT EXAM ====================
function submitExam() {
  clearInterval(countdownTimer);

  let totalWeightedScore = 0;
  let subjectBreakdownHTML = `<ul class="subject-breakdown">`;

  const weights = {
    english: 100 / 60,
    mathematics: 2.5,
    biology: 2.5,
    physics: 2.5,
    chemistry: 2.5,
  };

  for (const subject of selectedSubjects) {
    let correctCount = 0;
    const questions = jambQuestions[subject];

    questions.forEach((q, idx) => {
      if (userAnswers[subject][idx] === q.a) {
        correctCount++;
      }
    });

    const weight = weights[subject] || 2.5;
    const subjectWeightedScore = correctCount * weight;
    const displayScore = subjectWeightedScore.toFixed(1);

    totalWeightedScore += subjectWeightedScore;

    subjectBreakdownHTML += `
      <li>
        <strong>${subject.toUpperCase()}:</strong> 
        <span class="sub-score">${displayScore} / 100</span> 
        <small>(${correctCount} correct out of ${questions.length})</small>
      </li>`;
  }

  subjectBreakdownHTML += `</ul>`;

  const finalScore = Math.round(totalWeightedScore);

  saveToLocalLeaderboard(finalScore);

  const subjectSummary = extractSummary();

  const shareText = encodeURIComponent(
    `🎓 *JAMB 2026 MOCK RESULT* 🎓\n\n` +
      `I just scored *${finalScore}/400*! 🎯\n\n` +
      `*Breakdown:*\n${subjectSummary}\n\n` +
      `Think you can beat my score? Try the 2026 CBT Practice tool here:\n` +
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
        <a href="${whatsappUrl}" target="_blank" class="btn btn--whatsapp">Share Result on WhatsApp</a>
        <button class="btn btn--secondary" onclick="window.location.reload()">Retake Exam</button>
        <button id='showReview-btn' class="btn btn--primary">Review Answers</button>
      </div>
    </div>
  `;
  const showResultBtn = document.getElementById("showReview-btn");

  function showReview() {
    let reviewHTML = `<div class="review-wrapper"><h2>Exam Review</h2>`;

    for (const subject of selectedSubjects) {
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
  showResultBtn.addEventListener("click", showReview);

  displayLocalLeaderboard();
}

// ==================== EXTRACT SUMMARY FOR WHATSAPP ====================
function extractSummary() {
  const weights = {
    english: 100 / 60,
    mathematics: 2.5,
    biology: 2.5,
    physics: 2.5,
    chemistry: 2.5,
  };

  let summaryParts = [];

  for (const subject of selectedSubjects) {
    let correctCount = 0;
    jambQuestions[subject].forEach((q, idx) => {
      if (userAnswers[subject][idx] === q.a) correctCount++;
    });

    const weight = weights[subject] || 2.5;
    const subjectScore = (correctCount * weight).toFixed(1);

    summaryParts.push(`✅ ${subject.toUpperCase()}: ${subjectScore}/100`);
  }

  return summaryParts.join("\n");
}

// ==================== ENCOURAGEMENT ====================
function getEncouragement(score) {
  if (score >= 300) return "Excellent! University Bound! 🎓";
  if (score >= 250) return "Great Job! Keep pushing! 🚀";
  if (score >= 200) return "Good effort, you're getting there! 👍";
  return "Keep practicing, don't give up! 💪";
}

// ==================== LOCAL LEADERBOARD ====================
function saveToLocalLeaderboard(score) {
  let scores = JSON.parse(localStorage.getItem("jamb_history")) || [];
  const newEntry = {
    score: score,
    date: new Date().toLocaleDateString(),
  };
  scores.push(newEntry);
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 5);
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

// ==================== EVENT LISTENERS ====================

// Subject checkboxes
subjectCheckboxes.forEach((cb) => {
  cb.addEventListener("change", updateSelection);
});

// Begin button (Start Screen)
beginBtn.onclick = () => {
  startScreen.style.display = "none";
  subjectSelectionScreen.style.display = "flex";
};

// Back button
backToStartBtn.onclick = () => {
  subjectSelectionScreen.style.display = "none";
  startScreen.style.display = "flex";
};

// Start Exam button
startWithSubjectsBtn.onclick = () => {
  subjectSelectionScreen.style.display = "none";
  mainContainer.style.display = "block";

  initializeUserAnswers();
  renderSubjectNav();
  startTimer();
  renderQuestion();
  if (window.MathJax) {
    MathJax.typesetPromise([questionArea, optionsArea]).catch((err) =>
      console.error("MathJax rendering error:", err),
    );
  }
};

// Navigation buttons
prevBtn.onclick = () => {
  if (currentIdx > 0) {
    currentIdx--;
    renderQuestion();
  }
};

nextBtn.onclick = () => {
  if (currentIdx < jambQuestions[currentSubject].length - 1) {
    currentIdx++;
    renderQuestion();
  }
};

submitBtn.onclick = () => {
  if (confirm("Are you sure you want to submit your exam?")) {
    submitExam();
  }
};

// Initialize
