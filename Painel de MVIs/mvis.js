const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
  toggleBtn.textContent = sidebar.classList.contains("expanded") ? "←" : "☰";
});
