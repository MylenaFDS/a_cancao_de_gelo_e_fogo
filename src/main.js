const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel.style.transform = `translateX(-${counter * 100}%)`;
    prevBtn.classList.remove('hidden');
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) { // Verifica se o contador é maior que zero para evitar valores negativos
        counter--;
        carousel.style.transform = `translateX(-${counter * 100}%)`;
    }
    if (counter === 0) {
        prevBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
});


