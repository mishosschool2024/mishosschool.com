let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const carouselContent = document.querySelector('.carousel-content');
    carouselContent.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function previousSlide() {
    showSlide(currentIndex - 1);
}

// Initialize carousel
showSlide(currentIndex);
