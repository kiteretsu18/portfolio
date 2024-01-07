


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


let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle__btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};


