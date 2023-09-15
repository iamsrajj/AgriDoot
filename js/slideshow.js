const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide = slideIndex;
}

function prevSlide() {
  showSlide(currentSlide + 1);
}

function nextSlide() {
  showSlide(currentSlide - 1);
}

// Show the first slide immediately
showSlide(currentSlide);

// Navigation arrow click handlers
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

// Handle arrow key presses
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    nextSlide();
  } else if (event.key === "ArrowRight") {
    prevSlide();
  }
});

// Auto-advance to the next slide every 10 seconds (10000 milliseconds)
setInterval(prevSlide, 10000);
