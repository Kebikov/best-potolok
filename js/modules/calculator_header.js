export default function calculatorHeader (cursUsd, workPrace, lightPrace, perimeterPrace) {
    try {
        //= калькулятор 
    (function calc () {
        const body = document.body;
        const calcButton = document.querySelector('.top-heder__call-calc');
        const select = document.querySelector('.popup-calc__type-select');
        const span = select.querySelector('span');
        const lineAll = select.querySelectorAll('.popup-calc__type-line');
        const button = document.querySelector('.popup-calc__button');
        const popupCalc = document.querySelector('.popup-calc');
        const popupX = document.querySelector('.popup-calc__x');
        const topLineCalc = document.querySelector('.top-line__calc');
        //открытие калькулятора
            calcButton.addEventListener('click', () => {
            popupCalc.style.display = 'flex';
            body.style.overflow = 'hidden';
        });
        //открытие калькулятора
        topLineCalc.addEventListener('click', () => {
            popupCalc.style.display = 'flex';
            body.style.overflow = 'hidden';
        });
        //закрытие калькулятора
        popupX.addEventListener('click', () => {
            popupCalc.style.display = 'none';
            body.style.overflow = 'auto';
        });
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
        } catch (error) {
            console.log('',error);
        }
}
