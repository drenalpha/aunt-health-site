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
document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector("h2"); // or use '.typewriter' if you add the class
  const text = element.textContent;
  element.textContent = "";
  
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100); // Adjust typing speed here (ms)
    }
  }
  type();
});
