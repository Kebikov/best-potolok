window.addEventListener('DOMContentLoaded', () => {
//= калькулятор index   
(function calcIndex () {
    const selectSoffitTypeSelectAll = document.querySelectorAll('.select-soffit-type__select');

    selectSoffitTypeSelectAll.forEach(select => {
        select.addEventListener('click', selectClick);
    });

    let lineAll;
    let selectText;
    function selectClick (e) {
        let selectTarget = e.target.closest('.select-soffit-type__select').nextElementSibling;
        let typeSelect = e.target.closest('.select-soffit-type__select');
        selectText = typeSelect.querySelector('.select-soffit-type__select-text');
        lineAll = selectTarget.querySelectorAll('.select-soffit-type__line');
        lineAll.forEach(line => {
            line.addEventListener('click', lineClick);
            line.classList.remove('line-none');
        });
    }
    function lineClick (e) {
        selectText.textContent = e.target.textContent;
        lineAll.forEach(line => {
            line.classList.add('line-none');
            line.removeEventListener('click', lineClick);
        });
    }
}());

//* расчет при нажатии  
const moneyCalcButtonBody = document.querySelector('.money-calc__button-body');
const selectPromotionBody = document.querySelector('.select-promotion__body');
const selectPromotionRadioAll = selectPromotionBody.querySelectorAll('.select-promotion__radio');
const selectSoffitTypeBody = document.querySelector('.select-soffit-type__body');
const selectParametersBody = document.querySelector('.select-parameters__body');
const moneyCalcCash = document.querySelector('.money-calc__cash');
const moneyCalcBody = document.querySelector('.money-calc__body');
const moneyCalcError = document.querySelector('.money-calc__error');

moneyCalcButtonBody.addEventListener('click', () => {
    let arrSoffit = [];
    let arrSize = [];
    let promotion = 0;
    let praceM2;
    let sizeInputAll = selectParametersBody.querySelectorAll('.select-parameters__size-input');
    let selectTextAll = selectSoffitTypeBody.querySelectorAll('.select-soffit-type__select-text');
    //* данные 
        let cursUsd = 2.6;//курс доллара
        let perimeterPrace = 1;//цена в usd за метр периметра
        let lightPrace = 1;//цена в usd за одну световую точку
        let workPrace = 15;//цена в byn за метр кв. работы
    //*-------
    function fnPraceM2 () {
        if(arrSize[0] > 3.5 && arrSize[1] > 3.5) {
            if(arrSoffit[1] === 'Цветной') praceM2 = 4.1;
            if(arrSoffit[1] === 'Белый') praceM2 = 3.1;
        }else{
            if(arrSoffit[1] === 'Цветной') praceM2 = 3.1;
            if(arrSoffit[1] === 'Белый') praceM2 = 1.9;
        }
    }

    // возврат скидки
    selectPromotionRadioAll.forEach(item => {
        if(item.checked) promotion = item.value;
    });
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
    // возврат селектов
    selectTextAll.forEach(item => {
        arrSoffit.push(item.textContent);
    });

    fnPraceM2();

    if(arrSoffit.length === 2 && arrSize.length === 3) {
        let result = Math.round((arrSize[0] * arrSize[1] * praceM2  + ((arrSize[0] + arrSize[1]) * 2) * perimeterPrace + arrSize[2] * lightPrace) * cursUsd + arrSize[0] * arrSize[1] * workPrace * promotion);
        moneyCalcCash.textContent = result + ' руб.';
        moneyCalcError.style.display = 'none';
        moneyCalcBody.style.display = 'flex';
    }else{
        moneyCalcError.style.display = 'block';
        moneyCalcBody.style.display = 'none';
    }

});



//end
});



