/*
  main.js - UI helpers used across all pages
  Handles: theme toggle, navbar active state, toast notifications
*/

// ---- Theme toggle (dark / light) ----
const themeToggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("lumina_theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
updateToggleLabel(savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("lumina_theme", next);
    updateToggleLabel(next);
  });
}

function updateToggleLabel(theme) {
  if (!themeToggleBtn) return;
  themeToggleBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  themeToggleBtn.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
}

// ---- Mark active nav link ----
(function markActive() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();

// ---- Toast notification ----
function showToast(message, type) {
  type = type || "success";
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast " + (type !== "success" ? type : "");
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s";
    setTimeout(function () { toast.remove(); }, 400);
  }, 3800);
}

// ---- Format date to readable string ----
function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// ---- Format currency ----
function formatINR(amount) {
  return "\u20B9" + amount.toLocaleString("en-IN");
}

// ---- Expose helpers globally ----
window.showToast  = showToast;
window.formatDate = formatDate;
window.formatINR  = formatINR;
