

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.main__nav--item');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementPos = element.getBoundingClientRect().top;
        if (elementPos < windowHeight - 10) { // スクロール位置が要素に達したら
            element.style.opacity = '1';
            element.style.animation = 'slideUp 1.5s ease-out forwards';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger-menu');
    var nav = document.querySelector('.header__nav');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});