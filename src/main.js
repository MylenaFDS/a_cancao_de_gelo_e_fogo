function goToSlide(index) {
    counter = index;
    carousel.style.transform = `translateX(-${counter * 100}%)`;
    updateButtonsVisibility();
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
    if (counter < Math.ceil(slides.length / 4) - 1) {
        counter++;
    } else {
        counter = 0;
    }
    carousel.style.transform = `translateX(-${counter * 100}%)`;
    updateButtonsVisibility();
}

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
