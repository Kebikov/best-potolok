import calculatorHeader from "./calculator_header";

export default function menuNav ({workPrace, lightPrace, perimeterPrace}) {
    try {
        //=   меню   
    (function menu () {
        //variables
        const burgerSquare = document.querySelector('.burger__square');
        const  menuList = document.querySelector('.menu__list');
        const  menuLineAll = menuList.querySelectorAll('.menu__line');
        const  burgerSpan = document.querySelector('.burger__span');
        
        //body-open menu
        burgerSquare.addEventListener('click', () => {
            let time = 0.3;
            menuLineAll.forEach(item => {
                item.style.transition = `all ${time}s ease`;
                item.classList.toggle('active');
                time += 0.1;
            });
            burgerSpan.classList.toggle('active-burger');
        });
    }());

    //= анимация иконок подвала
    (function footerIcon () {
        const iconObserver = new IntersectionObserver ((eAll, myObserver) => {
            eAll.forEach(item => {
                if(item.isIntersecting) {
                    let target = item.target;
                    target.classList.add('rotate-scale-up');
                    myObserver.unobserve(target);
                }
            });
        },{
            threshold:[1],
            rootMargin: '10px 0px 0px 0px'
        });

        const iconBox = document.querySelector('.footer__icons');
        const iconAll = iconBox.querySelectorAll('img');
        iconAll.forEach(item => {
            iconObserver.observe(item);
        });
    }());

    //= калькулятор fn 
    calculatorHeader(workPrace, lightPrace, perimeterPrace);
        } catch (error) {
            console.log('',error);
        }
}
    