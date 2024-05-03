const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel.style.transform = `translateX(-${counter * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    counter--;
    carousel.style.transform = `translateX(-${counter * 100}%)`;
});
