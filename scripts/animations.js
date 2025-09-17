// scroll-animations.js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // play once
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
