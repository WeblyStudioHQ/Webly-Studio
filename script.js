// Custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnLoadAndScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const winHeight = window.innerHeight;
    if (top < winHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Run on page load
window.addEventListener("load", revealOnLoadAndScroll);

// Run on scroll
window.addEventListener("scroll", revealOnLoadAndScroll);
