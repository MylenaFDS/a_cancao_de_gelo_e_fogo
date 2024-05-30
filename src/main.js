document.addEventListener('DOMContentLoaded', () => {
    // Menu hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Carrossel
    function updateCarousel() {
        const totalSlides = window.innerWidth < 992 ? slides.length : Math.ceil(slides.length / 4);
        const percentage = (100 / totalSlides) * counter;
        carousel.style.transform = `translateX(-${percentage}%)`;
        updateIndicators();
    }
    
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === counter);
        });
    }
    
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
    
    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }
    
    function setSliderPosition() {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function touchStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        carousel.classList.add('grabbing');
    }
    
    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }
    
    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
    
        const totalSlides = window.innerWidth < 992 ? slides.length : Math.ceil(slides.length / 4);
        const touchThreshold = carousel.clientWidth / totalSlides;
    
        if (movedBy < -touchThreshold && counter < totalSlides - 1) {
            counter++;
        }
        if (movedBy > touchThreshold && counter > 0) {
            counter--;
        }
    
        setPositionByIndex();
        carousel.classList.remove('grabbing');
    }
    
    function setPositionByIndex() {
        const totalSlides = window.innerWidth < 992 ? slides.length : Math.ceil(slides.length / 4);
        currentTranslate = counter * -carousel.clientWidth * (1 / totalSlides);
        prevTranslate = currentTranslate;
        setSliderPosition();
        updateCarousel();
    }
    
    carousel.addEventListener('mousedown', touchStart);
    carousel.addEventListener('mouseup', touchEnd);
    carousel.addEventListener('mousemove', touchMove);
    carousel.addEventListener('mouseleave', () => {
        if (isDragging) touchEnd();
    });
    
    carousel.addEventListener('touchstart', touchStart);
    carousel.addEventListener('touchend', touchEnd);
    carousel.addEventListener('touchmove', touchMove);
    
    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const totalSlides = window.innerWidth < 992 ? slides.length : Math.ceil(slides.length / 4);
        if (counter < totalSlides - 1) {
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
