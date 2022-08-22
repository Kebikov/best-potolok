export default function menuNav ({cursUsd, workPrace, lightPrace, perimeterPrace}) {
    //=   меню   
    (function menu () {
        //variables
        const menu = document.querySelector('.menu');
        const burgerSquare = document.querySelector('.burger__square');
        const  menuList = document.querySelector('.menu__list');
        const  menuLineAll = menuList.querySelectorAll('.menu__line');
        const  menuLine = menuList.querySelector('.menu__line');
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

        //body-fix menu
        let positionMenu = menu.getBoundingClientRect().top;
        window.addEventListener('scroll', (e) => {
            if(window.scrollY  >= positionMenu) {
                menu.classList.add('menu__fix');
            }else{
                menu.classList.remove('menu__fix');
            }
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

    //= калькулятор 
    (function calc () {
        const calcButton = document.querySelector('.top-heder__call-calc');
        const select = document.querySelector('.popup-calc__type-select');
        const span = select.querySelector('span');
        const lineAll = select.querySelectorAll('.popup-calc__type-line');
        const button = document.querySelector('.popup-calc__button');
        const popupCalc = document.querySelector('.popup-calc');
        const popupX = document.querySelector('.popup-calc__x');
        const topLineCalc = document.querySelector('.top-line__calc');
        //открытие калькулятора
        calcButton.addEventListener('click', () => {popupCalc.style.display = 'flex'});
        //открытие калькулятора
        topLineCalc.addEventListener('click', () => {popupCalc.style.display = 'flex'});
        //закрытие калькулятора
        popupX.addEventListener('click', () => {popupCalc.style.display = 'none'});
        select.addEventListener('click', (e) => {
            select.classList.toggle('active-select');
            lineAll.forEach(item => {
                item.classList.toggle('active');
            });
            if(e.target.classList.contains('popup-calc__type-line')) {
                span.textContent = e.target.innerHTML;
            }
        });
        button.addEventListener('click', () => {
            let soffit;
            let arrSize = [];
            let promotion = 0;
            let praceM2;
            let sizeInputAll = document.querySelectorAll('.text-input');
            let selectText = document.querySelector('.popup-calc__type-select span');
            let radioAll = document.querySelectorAll('.popup-calc__sale-input');
            function fnPraceM2 () {
                if(arrSize[0] > 3.5 && arrSize[1] > 3.5) {
                    if(soffit === 'Цветной') praceM2 = 4.1;
                    if(soffit === 'Белый') praceM2 = 3.1;
                }else{
                    if(soffit === 'Цветной') praceM2 = 3.1;
                    if(soffit === 'Белый') praceM2 = 1.9;
                }
            }

            // возврат скидки
            radioAll.forEach(item => {
                if(item.checked) promotion = item.value;
            });
            // возврат селектов
            soffit = selectText.textContent;
            // возврат значений
            sizeInputAll.forEach(item => {
                let num = `${item.value}`;
                if(num.includes(',',0)) {
                    num = +num.replace(',','.');
                }else{
                    num = +num;
                }
                if(num) arrSize.push(num);
            });
            
            fnPraceM2();

            let cash = document.querySelector('.popup-calc__cash');

            if(soffit === 'Цветной' || soffit === 'Белый' && arrSize.length === 3) {
                let result = Math.round((arrSize[0] * arrSize[1] * praceM2  + ((arrSize[0] + arrSize[1]) * 2) * perimeterPrace + arrSize[2] * lightPrace) * cursUsd + arrSize[0] * arrSize[1] * workPrace * promotion);
                cash.textContent ='стоимость: ' + result + ' руб.';
                cash.style.display = 'block';
            }else{
                cash.textContent ='введите все данные !';
                cash.style.display = 'block';
            }
            });
    }());

}
    