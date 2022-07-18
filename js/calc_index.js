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

//= изминения при выборе
const calculationIndex = document.querySelector('.calculation-index');
calculationIndex.addEventListener('change', () => {
    console.log('change',);
});

//= расчет при нажатии  
const moneyCalcButtonBody = document.querySelector('.money-calc__button-body');
const selectPromotionBody = document.querySelector('.select-promotion__body');
const selectPromotionRadioAll = selectPromotionBody.querySelectorAll('.select-promotion__radio');
const selectSoffitTypeBody = document.querySelector('.select-soffit-type__body');
const selectParametersBody = document.querySelector('.select-parameters__body');
const moneyCalcCash = document.querySelector('.money-calc__cash');

moneyCalcButtonBody.addEventListener('click', () => {
    let arrSoffit = [];
    let arrSize = [];
    let promotion = 0;

    selectPromotionRadioAll.forEach(item => {
        if(item.checked) promotion = item.value;
    });

    let selectTextAll = selectSoffitTypeBody.querySelectorAll('.select-soffit-type__select-text');
    selectTextAll.forEach(item => {
        let num;
        if(item.textContent === 'Глянцевый') num = 10;
        if(item.textContent === 'Матовый') num = 11;
        if(item.textContent === 'Ситцевый') num = 12;

        if(item.textContent === 'Белый') num = 1;
        if(item.textContent === 'Цветной') num = 1.1;

        if(num) arrSoffit.push(num);
    });

    let sizeInputAll = selectParametersBody.querySelectorAll('.select-parameters__size-input');
    sizeInputAll.forEach(item => {
        if(item.value) arrSize.push(item.value);
    });

    console.log('',arrSoffit);
    console.log('',arrSize);

    if(arrSoffit.length === 2 && arrSize.length === 3) {
        let result = Math.round((arrSoffit[0] * arrSoffit[1] * arrSize[0] + arrSize[1] * 10 + arrSize[2] * 5) * (100 - promotion) / 100);
        moneyCalcCash.textContent = result + ' руб.';
    }else{
        moneyCalcCash.textContent = 'введите все данные';
    }

});



//end
});