const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel.style.transform = `translateX(-${counter * 100}%)`;
    prevBtn.classList.remove('hidden');

    // Verifica se o contador atingiu o número máximo de slides
    if (counter === Math.ceil(totalSlides / 4) - 1) {
        nextBtn.classList.add('hidden');
    }
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        carousel.style.transform = `translateX(-${counter * 100}%)`;
        nextBtn.classList.remove('hidden');
    }

    // Verifica se o contador atingiu o primeiro slide
    if (counter === 0) {
        prevBtn.classList.add('hidden');
    }
});

function goToSlide(index) {
    counter = index; // Atualiza o contador com o índice do slide
    carousel.style.transform = `translateX(-${counter * 100}%)`; // Move o carrossel para o slide desejado
    updateButtonsVisibility(); // Atualiza a visibilidade dos botões de navegação
}

function updateButtonsVisibility() {
    if (counter === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (counter === Math.ceil(totalSlides / 4) - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

function nextSlide() {
    // Verifica se há mais slides para avançar
    if (counter < Math.ceil(totalSlides / 4) - 1) {
        counter++;
        carousel.style.transform = `translateX(-${counter * 100}%)`;
        prevBtn.classList.remove('hidden');
    } else {
        // Volta para o primeiro slide
        counter = 0;
        carousel.style.transform = `translateX(0)`;
        prevBtn.classList.add('hidden');
    }

    // Verifica se é o último slide
    if (counter === Math.ceil(totalSlides / 4) - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}




