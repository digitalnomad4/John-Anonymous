const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter < images.length - 1) {
        counter++;
        carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
    }
});