// Redirigir página al cargarla
window.onload = function() {
  if (document.location.pathname.includes("conoceme.html")) {
    setTimeout(function() {
      window.location.replace("redirect.html");
    }, 500);
  }
};

// card on/off
const svgElement = document.getElementById("rr-svg");
const card = document.getElementById("card");
const closeCard = document.getElementById("closeCard");

if (svgElement) {
  svgElement.addEventListener("click", () => {
    card.style.display = "block";
  });
}

if (closeCard) {
  closeCard.addEventListener("click", () => {
    card.style.display = "none";
  });
}

//scroll de sección a sección

const sections = document.querySelectorAll('.container');
let currentIndex = 0;
let isScrolling = false; 

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;

  sections[index].scrollIntoView({ behavior: 'smooth' });
  currentIndex = index;
}

window.addEventListener('wheel', (event) => {
  if (isScrolling) return; 

  isScrolling = true; 

  const direction = event.deltaY > 0 ? 1 : -1; 
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);

  if (nextIndex !== currentIndex) {
    scrollToSection(nextIndex);
  }
});
