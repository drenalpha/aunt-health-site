// main.js

// Fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("main, section, .contact-box, article");

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.6s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100);
  });
});

// Add any future interactions here
console.log("Aunt’s site is alive.");
