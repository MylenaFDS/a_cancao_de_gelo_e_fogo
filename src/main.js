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

var slideIndex = 0;
var slides = document.querySelectorAll('.carousel-item');
var totalSlides = slides.length;
var indicatorsContainer = document.querySelector('.carousel-indicators');

// Função para mostrar os indicadores
function showIndicators() {
    // Limpar indicadores anteriores
    indicatorsContainer.innerHTML = '';

    // Calcular o número de grupos de slides (cada grupo contendo 4 slides)
    var totalGroups = Math.ceil(totalSlides / 4);

    // Criar botões indicadores para cada grupo
    for (var i = 0; i < totalGroups; i++) {
        var indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.onclick = function() {
            goToSlide(this.dataset.slideIndex);
        };
        indicator.textContent = i + 1;
        indicator.dataset.slideIndex = i * 4;
        if (i === 0) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    }
}

// Mostrar primeiro slide ao carregar a página
showIndicators();

// Função para mostrar um slide específico
function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    }

    for (var i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }

    slides[slideIndex].classList.add('active');
}

// Funções de navegação de slide (prev, next e goTo)
function prevSlide() {
    slideIndex -= 4;
    if (slideIndex < 0) {
        slideIndex = totalSlides - (totalSlides % 4);
    }
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex += 4;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function goToSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}



