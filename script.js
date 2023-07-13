// JavaScript for slider functionality (optional)
var slider = document.querySelector(".slider");
var slides = document.querySelectorAll(".slider-item");
var dots = document.querySelectorAll(".slider-dot");
var currentIndex = 0;

setInterval(nextSlide, 2000); // Auto slide every 2 seconds (optional)

function nextSlide() {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  updateSlider();
}

function updateSlider() {
  slider.style.transform = "translateX(" + currentIndex * -100 + "%)";

  // Update active dot
  dots.forEach(function (dot, index) {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
