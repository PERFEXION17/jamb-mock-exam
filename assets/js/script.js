// ==================== DARK MODE ====================
const themeBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("darkmode");
}

function themeToggle() {
  document.body.classList.toggle("darkmode");
  const theme = document.body.classList.contains("darkmode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}
themeBtn.addEventListener("click", themeToggle);
