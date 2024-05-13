const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel.style.transform = `translateX(-${counter * 100}%)`;
    prevBtn.classList.remove('hidden');

    // Verifica se o contador atingiu o número máximo de slides
    if (counter === Math.ceil(slides.length / 4) - 1) {
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

    if (counter === Math.ceil(slides.length / 4) - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

function nextSlide() {
    // Verifica se há mais slides para avançar
    if (counter < Math.ceil(slides.length / 4) - 1) {
        counter++;
        carousel.style.transform = `translateX(-${counter * 100}%)`;
        prevBtn.classList.remove('hidden');
    } else {
        // Volta para o primeiro slide
        counter = 0;
        carousel.style.transform = `translateX(0)`;
        prevBtn.classList.add('hidden');
    }
    updateButtonsVisibility();
}


// Seleciona o botão e o container do botão da primeira temporada
const temporada1Button = document.querySelector('.temporada_1-button');
const temporada1ButtonContainer = document.getElementById('temporada_1-button-container');

// Esconde o botão da primeira temporada ao carregar a página
temporada1ButtonContainer.style.display = 'none';

// Adiciona um evento de clique para alternar a visibilidade do botão da primeira temporada
document.querySelector('[data-tab-button="temporada_1"]').addEventListener('click', function() {
    // Se a aba da primeira temporada estiver ativa, exibe o botão, caso contrário, oculta
    if (temporada1ButtonContainer.style.display === 'none') {
        temporada1ButtonContainer.style.display = 'block';
    } else {
        temporada1ButtonContainer.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded',function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',function(botao){
            const abaAlvo= botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i=0;i<buttons.length;i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i=0;i<tabsContainer.length;i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}