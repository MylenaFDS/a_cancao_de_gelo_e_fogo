document.addEventListener('DOMContentLoaded', () => {
    // Menu hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Carrossel
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    let counter = 0;

    function updateCarousel() {
        const totalSlides = 1; // Supondo que você tenha 1 slide. Ajuste conforme necessário.
        const percentage = (100 / totalSlides) * counter;
        carousel.style.transform = `translateX(-${percentage}%)`;
        updateButtonsVisibility();
        updateIndicators();
    }

    function updateButtonsVisibility() {
        // Verifica se estamos em um dispositivo móvel ou desktop
        const isMobile = window.innerWidth < 992; // 992px é uma largura típica para a quebra entre dispositivos móveis e desktops
    
        if (isMobile) {
            // Para dispositivos móveis (12 slides)
            prevBtn.style.display = counter === 0 ? 'none' : 'block';
            nextBtn.style.display = counter === 11 ? 'none' : 'block';
        } else {
            // Para desktops (3 slides)
            prevBtn.style.display = counter === 0 ? 'none' : 'block';
            nextBtn.style.display = counter === 2 ? 'none' : 'block';
        }
    }
    
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === counter);
        });
    }

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalSlides = window.innerWidth < 992 ? 12 : 3; // Verifica se é dispositivo móvel ou desktop
        if (counter < totalSlides - 1) { // Subtrai 1 para garantir que o último slide seja acessível
            counter++;
            updateCarousel();
        }
    });
    

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            counter = index;
            updateCarousel();
        });
    });

    updateCarousel();

    // Tabs
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const watchButton = document.getElementById('watch-full-season-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const abaAlvo = this.dataset.tabButton;
            tabsContainer.forEach(tab => tab.classList.remove('shows__list--is-active'));
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            this.classList.add('shows__tabs__button--is-active');
            if (abaAlvo === 'temporada_1') {
                watchButton.style.display = 'block';
            } else {
                watchButton.style.display = 'none';
            }
        });
    });

    function removeBotaoAtivo() {
        buttons.forEach(button => button.classList.remove('shows__tabs__button--is-active'));
    }

    // Mostrar botão assistir
    const tabButtons = document.querySelectorAll('.shows__tabs__button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('shows__tabs__button--is-active'));
            this.classList.add('shows__tabs__button--is-active');

            if (this.dataset.tabButton === 'temporada_1') {
                watchButton.style.display = 'block';
            } else {
                watchButton.style.display = 'none';
            }
        });
    });

    if (document.querySelector('.shows__tabs__button--is-active').dataset.tabButton === 'temporada_1') {
        watchButton.style.display = 'block';
    } else {
        watchButton.style.display = 'none';
    }
});
