document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    let counter = 0;

    function updateCarousel() {
        const totalSlides = 1; //
        const percentage = (100 / totalSlides) * counter;
        carousel.style.transform = `translateX(-${percentage}%)`;
        updateButtonsVisibility();
        updateIndicators();
    }

    function updateButtonsVisibility() {
        prevBtn.style.display = counter === 0 ? 'none' : 'block';
        nextBtn.style.display = counter === 2 ? 'none' : 'block';
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
        if (counter < 2) {
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
});

document.addEventListener('DOMContentLoaded', function() {
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
});

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.shows__tabs__button');
    const watchButton = document.getElementById('watch-full-season-button');

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
