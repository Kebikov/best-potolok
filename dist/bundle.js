/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animation_praise.js":
/*!****************************************!*\
  !*** ./js/modules/animation_praise.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animationPraise)
/* harmony export */ });
//= анимацыя элементов на странице цены  
function animationPraise () {
    try {
        (function animationIconPic () {
            const buildPracePicAll = document.querySelectorAll('.build-prace__pic');
            let time = 0;
            const animPicObserver = new IntersectionObserver((entryAll, observer) => {
                entryAll.forEach(e => {
                    if(e.isIntersecting) {
                        let eTarget = e.target;
                        time += 100; 
                        setTimeout(function () {
                            eTarget.classList.add('anime-pic');
                        }, time);
                        observer.unobserve(eTarget);
                    }
                });
            },{
                rootMargin: '-40px 0px -10% 0px',
                threshold:[1],
            });

            buildPracePicAll.forEach(item => {
                animPicObserver.observe(item);
            });
        }());

        (function animationImg () {
            const capTypeImgAll = document.querySelectorAll('.cap-type__img');
            const imgObserver = new IntersectionObserver((itemAll, itemObserver) => {
                itemAll.forEach(item => {
                    if(item.isIntersecting) {
                        item.target.classList.add('scale-in-ver-center');
                        itemObserver.unobserve(item.target);
                    }
                });
            },{
                rootMargin: '0px 0px -15% 0px',
                threshold: [1],
            });

            capTypeImgAll.forEach(item => {
                imgObserver.observe(item);
            });
        }());
        } catch (error) {
            console.log('',error);
        }
}

    

/***/ }),

/***/ "./js/modules/calc_index.js":
/*!**********************************!*\
  !*** ./js/modules/calc_index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calcIndex)
/* harmony export */ });
//= калькулятор index(калькулятор только на главной странице)
function calcIndex ({cursUsd, workPrace, lightPrace, perimeterPrace}) {
    try {
        (function calcIndex () {
            const calculationIndex = document.querySelector('.calculation-index');
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
        } catch (error) {
            console.log('',error);
        }
}








/***/ }),

/***/ "./js/modules/calc_m2.js":
/*!*******************************!*\
  !*** ./js/modules/calc_m2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calcM2Fn)
/* harmony export */ });
//=   счёт м2(расчет цены в квадратном блоке на главной странице, в зависимости только от м2)   
function calcM2Fn ({cursUsd, works, pracePerimetr}) {
    try {
        const praceMondeyInput = document.querySelector('.prace-mondey__input');
        (function calcM2 () {
            const  praceMondeyByn = document.querySelector('.prace-mondey__byn');
            let praceM2;
            let square;
            inputSum();
            praceMondeyInput.addEventListener('input', () => {
                inputSum();
            });
            function inputSum () {
                square = praceMondeyInput.value;
                if(square.length > 3) praceMondeyInput.value = square.slice(0,3);
                if(square < 18) {
                    praceM2 = 1.9;
                }else{
                    praceM2 = 3.1;
                }
                praceMondeyByn.innerHTML = `${Math.floor(square * praceM2 * cursUsd + pracePerimetr * cursUsd * square * 0.8 + square * works)}<span> РУБ.</span>`;
            }
        }());
        } catch (error) {
            console.log('',error);
        }
}







/***/ }),

/***/ "./js/modules/calculator_header.js":
/*!*****************************************!*\
  !*** ./js/modules/calculator_header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calculatorHeader)
/* harmony export */ });
function calculatorHeader (cursUsd, workPrace, lightPrace, perimeterPrace) {
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


/***/ }),

/***/ "./js/modules/check_number_phone.js":
/*!******************************************!*\
  !*** ./js/modules/check_number_phone.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkNumberPhone)
/* harmony export */ });
function checkNumberPhone (inputTel, boxInput, styleBox, {classOne, classTwo}) {
    try {
        function symbolPlus (number, symbol) {
            if(inputTel.value.length === number) {
                inputTel.value = inputTel.value.slice(0,number - 1) + symbol + inputTel.value[number - 1];
            }
        }
    
        inputTel.value = '+375';
        inputTel.addEventListener('input', () => {
            if(inputTel.value[inputTel.value.length - 1] === '(' || inputTel.value[inputTel.value.length - 1] === ')' || inputTel.value[inputTel.value.length - 1] === '-') {
                inputTel.value = inputTel.value.slice(0, inputTel.value.length - 1);
            }else {
                if(inputTel.value.length < 4) {
                    inputTel.value = '+375';
                }
                symbolPlus(5, '(');
                symbolPlus(8, ')');
                symbolPlus(12, '-');
                symbolPlus(15, '-');
                if(inputTel.value.length > 16) {
                    inputTel.value = inputTel.value.slice(0,17);
                }
                if(/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value)){
                    if(styleBox === 0) boxInput.style.boxShadow = '0px 0px 2px 2px rgba(22, 255, 138, 0.663) inset';
                    if(styleBox === 1) inputTel.style.border = '#28b352 2px solid';
                    
                }else {
                    if(styleBox === 0) boxInput.style.boxShadow = '0px 0px 3px 3px rgba(255, 22, 22, 0.9) inset';
                    if(styleBox === 1) inputTel.style.border = '#ec3c3c 2px solid';
                    
                }
            }
            // проверка телефона в конце
            if(inputTel.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value)) {
                if(boxInput.classList.contains(classOne)) {
                    boxInput.classList.remove(classOne);
                    boxInput.classList.add(classTwo);
                }
            }else {
                if(boxInput.classList.contains(classTwo)) {
                    boxInput.classList.remove(classTwo);
                    boxInput.classList.add(classOne);
                }
            }
        });
        } catch (error) {
            console.log('',error);
        }
}

/***/ }),

/***/ "./js/modules/email_index.js":
/*!***********************************!*\
  !*** ./js/modules/email_index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ emailIndexMain)
/* harmony export */ });
//= отправка на почту на главной странице 
function emailIndexMain () {
    try {
        const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
        (function emailIndex () {
            const  form = document.forms.actionCall;
            const  praceMondeyButton = document.querySelector('.prace-mondey__button');
            const animeMeil = document.querySelector('.anime-meil');
            const bodyDis = document.body;
            praceMondeyButton.addEventListener('click', (e) => {
                e.preventDefault;
                if(praceMondeyTelInput.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)) {
                    let formData = new FormData(form);
                    bodyDis.style.overflow = 'hidden';
                    animeMeil.style.display = 'block';
                    fetch('mail.php', {
                        method: 'POST',
                        body: formData
                    })
                    .then(data => {
                        if(data.status === 200) {
                            bodyDis.style.overflow = 'auto';
                            animeMeil.style.display = 'none';
                            praceMondeyButton.textContent = 'заявка отправлена';
                            praceMondeyTelInput.value = 'Cпасибо за заказ !';
                        }
                    });
                }else {
                    praceMondeyButton.textContent = 'проверьте номер';
                    setTimeout(()=>{
                        praceMondeyButton.textContent = 'заказать по акции';
                    },2000);
                }
            });
        }());
        } catch (error) {
            console.log('',error);
        }
}

    


/***/ }),

/***/ "./js/modules/gallery.js":
/*!*******************************!*\
  !*** ./js/modules/gallery.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ galleryFn)
/* harmony export */ });
function galleryFn () {
    try {
        const gallery = document.querySelector('.gallery');
        (function galleryAdd () {
            const body = document.body;
            const galleryPop = document.querySelector('.gallery-pop');
            const galleryBody = document.querySelector('.gallery__body');
            const popUpBody = document.querySelector('.gallery-pop__body');
            const imgBox = document.querySelector('.gallery-pop__img-box');
            const buttonRight = document.querySelector('.gallery-pop__right');
            const buttonLeft = document.querySelector('.gallery-pop__left');
            const buttonClose = document.querySelector('.gallery-pop__x');
            const dotsBox = document.querySelector('.gallery-pop__dots');
            const picItemBody = document.querySelectorAll('.pic-item__body');
            const styleDiv = document.querySelector('style');
            const arrSrc = [];
            const arrImg = galleryBody.querySelectorAll('img');
            const classAddImg = ['gallery-pop__img', '_gap-img'];
            let centerNumber;
            const  gap = galleryPop.getAttribute('data-gap');
            const transitionImg = galleryPop.getAttribute('data-transition');
    
            //* fn сбор src в массив 
            function allImgSrc () {
                arrImg.forEach(item => {
                    arrSrc.push(item.getAttribute('src'));
                });
            }
            allImgSrc();
            //* fn открытие popUp
            function openPopUp () {
                galleryBody.addEventListener('click', (e) => {
                    gapOpenPopUp();
                    let target = e.target;
                    let src = target.getAttribute('src');
                    centerNumber = searchInArrSrc(src);
                    // создаем
                    let imgLeft = document.createElement('img');
                    let img = document.createElement('img');
                    let imgRight = document.createElement('img');
                    // добавляем класс
                    imgLeft.classList.add(...classAddImg);
                    img.classList.add(...classAddImg);
                    imgRight.classList.add(...classAddImg);
                    // добавляем src
                    imgLeft.setAttribute('src', arrSrc[checkNumber(centerNumber, -1)]);
                    img.setAttribute('src', arrSrc[centerNumber]);
                    imgRight.setAttribute('src', arrSrc[checkNumber(centerNumber, 1)]);
    
                    imgLeft.style.left = '-100%';
                    img.style.left = '0%';
                    imgRight.style.left = '100%';
    
                    galleryPop.style.display = 'flex';
                    // добавляем в PopUp
                    imgBox.append(imgLeft);
                    imgBox.append(img);
                    imgBox.append(imgRight);
                    dotsOpen();
                    body.style.overflow = 'hidden';
                });
            }
            openPopUp();
            //* fn закрытие popUp
            function closePopUp () {
                buttonClose.addEventListener('click', () => {
                    galleryPop.style.display = 'none';
                    let imgAllClean = popUpBody.querySelectorAll('.gallery-pop__img');
                    imgAllClean.forEach(item => {
                        item.remove();
                    });
                    dotsClose();
                    body.style.overflow = 'auto';
                });
            }
            closePopUp();
            //* fn поиск src в массиве
            function searchInArrSrc (find) {
                return arrSrc.indexOf(find, 0);
            }
            //* fn проверка числа на случай выхода за пределы массива
            function checkNumber (num, number) {
                num = num + number;
                if(num < 0) num = arrSrc.length - 1;
                if(num > arrSrc.length - 1) num = 0;
                return num;
            }
            //* fn определение в зависимости от центрального кадра крайних кадров
            function checkCenterNumber (num) {
                if(num < 0) centerNumber = arrSrc.length - 1;
                if(num > arrSrc.length - 1) centerNumber = 0;
            }
            //* fn нажатие вправо >
            function rightButton () {
                buttonRight.addEventListener('click', clickRight);
                function clickRight () {
                    centerNumber++;
                    checkCenterNumber(centerNumber);
                    let img = document.createElement('img');
                    img.classList.add(...classAddImg);
                    img.setAttribute('src', arrSrc[checkNumber(centerNumber, 1)]);
                    img.style.left = '200%';
                    imgBox.append(img);
                    setTimeout(function () {
                        let imgAllInPopUp = imgBox.querySelectorAll('.gallery-pop__img');
                        let i = -200;
                        imgAllInPopUp.forEach(item => {
                            item.style.left = i + '%';
                            i = i + 100;
                        });
                        dotWhite();
                        buttonRight.removeEventListener('click', clickRight);
                        setTimeout(function () {
                            let divDel = imgBox.querySelector('.gallery-pop__img');
                            divDel.remove();
                            buttonRight.addEventListener('click', clickRight);
                        }, transitionImg);
                    },10);
                    
                }
            }
            rightButton();
            //* fn нажатие влево <
            function leftButton () {
                buttonLeft.addEventListener('click', clickLeft);
                function clickLeft () {
                    centerNumber--;
                    checkCenterNumber(centerNumber);
                    let img = document.createElement('img');
                    img.classList.add(...classAddImg);
                    img.setAttribute('src', arrSrc[checkNumber(centerNumber, -1)]);
                    img.style.left = '-200%';
                    imgBox.prepend(img);
                    setTimeout(function () {
                        let imgAllInPopUp = imgBox.querySelectorAll('.gallery-pop__img');
                        let i = -100;
                        imgAllInPopUp.forEach(item => {
                            console.log('',item);
                            item.style.left = i + '%';
                            i = i + 100;
                        });
                        dotWhite();
                        let divDel = imgBox.lastElementChild;
                        buttonLeft.removeEventListener('click', clickLeft);
                        setTimeout(function () {
                            divDel.remove();
                            buttonLeft.addEventListener('click', clickLeft);
                        }, transitionImg);
                    },10);
                }
            }
            leftButton();
            //* пробел между слайдами
            function gapOpenPopUp () {
                let time = transitionImg / 1000;
                if(window.matchMedia('(min-width: 1021px)').matches){
                    styleDiv.innerHTML = `._gap-img {padding-left: ${gap}px; padding-right: ${gap}px; transition:all ${time}s ease;}`;
                }
                if(window.matchMedia('(max-width: 1020px)').matches && window.matchMedia('(min-width: 768px)').matches){
                    let gap2 = gap * 0.8;
                    styleDiv.innerHTML = `._gap-img {padding-left: ${gap2}px; padding-right: ${gap2}px; transition:all ${time}s ease;}`;
                }
                if(window.matchMedia('(max-width: 767px)').matches){
                    let gap3 = gap * 0.7;
                    styleDiv.innerHTML = `._gap-img {padding-left: ${gap3}px; padding-right: ${gap3}px; transition:all ${time}s ease;}`;
                }
            }
            //* точки навигации внизу
            function dotsOpen () {
                arrImg.forEach(item => {
                    let dotDiv = document.createElement('div');
                    dotDiv.classList.add('gallery-pop__dot');
                    dotsBox.append(dotDiv);
                });
                let allDots = dotsBox.querySelectorAll('.gallery-pop__dot');
                allDots[centerNumber].classList.add('dot-white');
            }
            function dotsClose () {
                dotsBox.innerHTML='';
            }
            function dotWhite () {
                let allDots = dotsBox.querySelectorAll('.gallery-pop__dot');
                allDots.forEach(item => {
                    if(item.matches('[class="gallery-pop__dot dot-white"]')) item.classList.remove('dot-white');
                });
                allDots[centerNumber].classList.add('dot-white');
            }
            //* установка высоты img начальной галереи
            function galleryHeight () {
                let hi = gallery.getAttribute('data-height');
                picItemBody.forEach(item => {
                    item.style.paddingBottom = hi;
                });
            }
            galleryHeight();
        }());
        } catch (error) {
            console.log('',error);
        }
}
    

/***/ }),

/***/ "./js/modules/icon_observer.js":
/*!*************************************!*\
  !*** ./js/modules/icon_observer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ iconGo)
/* harmony export */ });
//= движение иконок соц.сетей при появлении 
function iconGo () {
    try {
        const iconsBox = document.querySelector('.all-contacts__icons');
        let time = 0;
        const iconObserver = new IntersectionObserver((elAll, observMy) => {
            elAll.forEach(item => {
                if(item.isIntersecting) {
                    let target = item.target;
                    time = time + 350;
                    setTimeout(function (){
                        target.classList.add('roll-in-right');
                        observMy.unobserve(target);
                    }, time);
                }
            });
        },{
            threshold:[1],
            rootMargin: '-40px 0px -10% 0px',
        });

        const allIcons = iconsBox.querySelectorAll('img');
        allIcons.forEach(item => iconObserver.observe(item));
        } catch (error) {
            console.log('',error);
        }
}



/***/ }),

/***/ "./js/modules/menu_nav.js":
/*!********************************!*\
  !*** ./js/modules/menu_nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuNav)
/* harmony export */ });
/* harmony import */ var _calculator_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator_header */ "./js/modules/calculator_header.js");


function menuNav ({cursUsd, workPrace, lightPrace, perimeterPrace}) {
    try {
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

    //= калькулятор fn 
    (0,_calculator_header__WEBPACK_IMPORTED_MODULE_0__["default"])(cursUsd, workPrace, lightPrace, perimeterPrace);
        } catch (error) {
            console.log('',error);
        }
}
    

/***/ }),

/***/ "./js/modules/phone_input_index.js":
/*!*****************************************!*\
  !*** ./js/modules/phone_input_index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ phoneInputIndex)
/* harmony export */ });
/* harmony import */ var _check_number_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_number_phone */ "./js/modules/check_number_phone.js");
//= ввод телефона и его проверка на главной 


function phoneInputIndex () {
    try {
        const praceMondeyTel = document.querySelector('.prace-mondey__tel');
        (function phoneInput () {
            const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
            //* проверка введенного телефона 
            praceMondeyTelInput.addEventListener('click',  () => (0,_check_number_phone__WEBPACK_IMPORTED_MODULE_0__["default"])(praceMondeyTelInput, praceMondeyTel, 0, {classOne: 'grey', classTwo: 'green'}));
        }());
        } catch (error) {
            console.log('',error);
        }
}





/***/ }),

/***/ "./js/modules/popup.js":
/*!*****************************!*\
  !*** ./js/modules/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ popUpFn)
/* harmony export */ });
/* harmony import */ var _check_number_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_number_phone */ "./js/modules/check_number_phone.js");


function popUpFn () {
    try {
        //= popup блок  
    const orderCall = document.querySelector('.order-call');
    //* всплытие popup   
    (function popup () {
        const orderCall = document.querySelector('.order-call');
        const openAll = document.querySelectorAll('[data-popup="open"]');
        const title = orderCall.querySelector('.order-call__title');
        const body = document.body;
        //open
        openAll.forEach(item => {
            item.addEventListener('click', () => {
                orderCall.style.display = 'flex';
                body.style.overflow = 'hidden';
                if(item.hasAttribute('data-name-button')) {
                    title.textContent = item.getAttribute('data-name-button');
                }
            });
        });
        //close
        orderCall.addEventListener('click', (e) => {
            body.style.overflow = 'auto';
            if(e.target.closest('.order-call__x')) {
                orderCall.style.display = 'none';
            }
        });
        
    }());
    //* проверка телефона и трубка зеленая/серая   
    (function phoneInput () {
        const inputTel = document.querySelector('.order-call__tel');
        const divInputTel = document.querySelector('.order-call__tel-div');
        inputTel.addEventListener('click', () => (0,_check_number_phone__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTel, divInputTel, 1, {classOne: '_grey', classTwo: '_green'}));
    }());
    //* проверка имени   
    const orderCallName = document.querySelector('.order-call__name');
    function nameTest () {
        let name = orderCallName.value;
        if(name.length < 3) {
            orderCallName.value = '';
            orderCallName.setAttribute('placeholder', 'Минимум 3 символа.');
        }
    }
    //* отправка на почту с анимацией  
    (function emaiPopUp () {
        const button = document.querySelector('.order-call__button');
        const inputTel = document.querySelector('.order-call__tel');
        const bodyDis = document.body;
        const animeMeil = document.querySelector('.anime-meil');
        const orderTitle = document.querySelector('.order-call__title');
        let title = orderTitle.textContent;

        button.addEventListener('click', clickPopUp);

        function clickPopUp (e) {
            e.preventDefault;
            nameTest();
            const  form = document.forms.popup;
            if(inputTel.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value) && orderCallName.value) {
                let formData = new FormData(form);
                formData.set('title', title);
                bodyDis.style.overflow = 'hidden';
                animeMeil.style.display = 'block';
                fetch('popup.php', {
                    method: 'POST',
                    body: formData
                })
                .then(data => {
                    if(data.status === 200) {
                        bodyDis.style.overflow = 'auto';
                        animeMeil.style.display = 'none';
                        button.textContent = 'заявка отправлена';
                        orderCallName.value = '';
                        inputTel.value = 'Cпасибо за заказ !';
                    }
                });
            }else {
                button.textContent = 'проверьте данные';
                setTimeout(()=>{
                    button.textContent = 'заказать по акции';
                },2000);
            }
        }
    }());
        } catch (error) {
            console.log('',error);
        }
}


/***/ }),

/***/ "./js/modules/questions.js":
/*!*********************************!*\
  !*** ./js/modules/questions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ questions)
/* harmony export */ });
function questions () {
    try {
        (function questionsBox () {
            const arrQuestions = [
                {question:'Как заказать натяжной потолок?',answer:'Оставить заявку на сайте или позвонить по номеру +375 (29) 522-22-82.'},
                {question:'Что необходимо для расчета стоимости монтажа натяжного потолка?',answer:'Необходимо знать площадь помещения,  его длину и ширину (хотя бы примерно), а так же количество светильников.'},
                {question:'Как осуществляется расчет за выполненную работу по монтажу натяжного потолка?',answer:'Расчет осуществляется после монтажа натяжного потолка и полной приемки заказчиком.'},
                {question:'На какую высоту опустится натяжной потолок?',answer:'Минимальный отпуск натяжного потолка относительно чернового составляет 5 см. Также следует учитывать высоту конструкций для монтажа люстры и светильников, а также тип и состояние стен. Окончательный вердикт сможет дать мастер, выполняющий замер.'},
                {question:'Как ухаживать за натяжным потолком?',answer:'Для ухода за натяжным потолком подходят жидкие моющие средства без красителей на спиртовой основе, например средства для мытья окон. Протирать рекомендуется мягкой салфеткой из микрофибры.'},
                {question:'Что устанавливать раньше: шкаф-купе или натяжной потолок?',answer:'Технологически желательно сразу установить шкаф-купе, предусмотрев в нем сверху фальш-панель, к которой впоследствии будет прикреплен профиль натяжного потолка.<br>Однако возможна установка шкафа-купе и после монтажа натяжного потолка. В данном случае необходимо сообщить мастеру о планируемом месте будущего шкафа-купе и тогда над натяжным потолком будет установлена закладная к которой и будет произведен монтаж шкафа.'},
                {question:'На каком этапе ремонта установить натяжной потолок?',answer:'В идеале натяжной потолок следует устанавливать, когда закончены все работы, связанные с пылью, и стены подготовлены под покраску или оклейку обоями.'},
                {question:'Имеет ли потолок запах и как долго он выветривается?',answer:'Как любой новый предмет, находящийся в помещении, натяжной потолок непосредственно после монтажа может иметь запах, который, как правило, выветривается в течение нескольких дней.'},
                {question:'Будут ли на натяжном потолке швы?',answer:'На сегодняшний день без швов возможно установить натяжной потолок шириной до шести метров. Отличным выходом в случае ширины помещения более 6 метров станет двухуровневый потолок.'},
                {question:'Что делать, если затопили сверху?',answer:'В критических случаях основной объем воды можно удалить самостоятельно. Но лучше сразу обратиться к специалистам, в любом случае после удаления воды потолок рекомендуется просушить тепловой пушкой.'},
                {question:'Какие светильники подойдут для натяжного потолка?',answer:'Для установки с натяжным потолком не существует каких-либо ограничений для встраиваемых светильников - подойдет большинство.'},
                {question:'В какие сроки может быть установлен натяжной потолок и сколько времени займет его монтаж?',answer:'По желанию заказчика потолок может быть установлен на следующий после замера день. Время монтажа зависит от специфических особенностей заказа: количества светильников, труб, углов, материала стен, наличия в помещении мебели. Как правило, монтаж натяжного потолка в комнате 10 м.кв. с одной люстрой (светильником) занимает порядка четырех часов.'},
                {question:'Чего боятся натяжные потолки?',answer:'Не следует касаться полотна натяжного потолка острыми предметами, существует опасность его проколоть. В случае воздействия высоких температур(от +70 <sup>о</sup>С) потолок может расплавиться (даже от неправильно подобранной лампочки накаливания). В случае отрицательных температур(ниже -10 <sup>о</sup>С) полотно натяжного потолка становится хрупким и подверженным растрескиванию при механическом воздействии.'},
                {question:'Какой срок эксплуатации натяжного потолка?',answer:'Гарантия на монтажные работы составляет один год, на применяемые полотна производитель дает гарантию 25 лет. На практике большую роль играет именно профессионализм монтажа и качество комплектующих, что соответственно влияет и на цену работ.'},
                {question:'Может ли осесть пыль на потолке?',answer:'Натяжной потолок обладает антистатичным покрытием, поэтому пыль на нем не оседает.'},
                {question:'Можно ли установить на потолок какие-либо навесные спортивные снаряды?',answer:'В натяжной потолок можно монтировать любые тяжёлые конструкции, путем предварительного монтажа соответствующих закладных.'},
                {question:'Может ли появляться конденсат между натяжным и обычным потолком?',answer:'Все это исключено, так как температура полотна точно такая же, как и в комнате. Нет резких перепадов, поэтому конденсат отсутствует.'},
                {question:'Как необходимо подготовить помещение перед приездом монтажников?',answer:'Комнату, где будет производиться монтаж натяжного потолка, рекомендуется максимально освободить от мебели, полы желательно закрыть картоном. Если такой возможности нет, то как минимум изолировать (накрыть) предметы, у которых существует вероятность повреждения высокой температурой, и создать доступ к стенам помещения.'}
            ];

            //* fn вставки кода с вопросами
            function insertQuestionHtml () {
                console.log('3',);
                arrQuestions.forEach(item => {
                    boxQuestions.insertAdjacentHTML('beforeend',`
                    <div class="questions">
                        <div class="questions__body">
                            <div class="questions__title"><span>${item.question}</span></div>
                            <div class="questions__info">
                                <div class="questions__text">${item.answer}</div>
                            </div>
                        </div>
                    </div>
                    `);
                });
                const last = boxQuestions.lastElementChild;
                const lostTitle = last.querySelector('.questions__title');
                lostTitle.classList.add('_after-not');
            }

            const boxQuestions = document.querySelector('.box-questions');
            insertQuestionHtml();
            const questionsTitleAll = boxQuestions.querySelectorAll('.questions__title');

            function allClose () {
                const bodyAll = document.querySelectorAll('.questions__body');
                bodyAll.forEach(item => {
                    const info = item.querySelector('.questions__info');
                    const text = item.querySelector('.questions__text');
                    const title = item.querySelector('.questions__title');

                    info.style.height = '0px';
                    text.style.opacity = 0;
                    item.classList.remove('_questions-white');
                    title.classList.remove('_questions-text');
                });
            }
    
            questionsTitleAll.forEach(item => {
                item.addEventListener('click', (e) => {
                    allClose();
                    const parent = e.target.closest('.questions__body');
                    const title = parent.querySelector('.questions__title');
                    const info = parent.querySelector('.questions__info');
                    const text = parent.querySelector('.questions__text');
                    function close () {
                        info.style.height = '0px';
                        text.style.opacity = 0; 
                    }

                    if(getComputedStyle(info).height === '0px') {
                        let hi = text.offsetHeight;
                        info.style.height = hi + 'px';
                        setTimeout(() => {
                            text.style.opacity = 1;
                        }, 100);
                        parent.classList.add('_questions-white');
                        title.classList.add('_questions-text');
                        
                    }else {
                        close();
                        parent.classList.remove('_questions-white');
                        title.classList.remove('_questions-text');
                    }
                });
            });
            
        }());
        } catch (error) {
            console.log('',error);
        }
}

/***/ }),

/***/ "./js/modules/ruler_movement.js":
/*!**************************************!*\
  !*** ./js/modules/ruler_movement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rulerMovement)
/* harmony export */ });
//= бегаюшая рулетка на главной странице
function rulerMovement () {
    try {
        const rulesBody = document.querySelector('.rules-body');
        const wrapper = document.querySelector('.wrapper');
        const oneStep = document.querySelector('.one-step');
        let timeS;
        function time () {
            if(oneStepWidth > 1100) timeS = 20;
            if(oneStepWidth < 1100 && oneStepWidth > 900) timeS = 17;
            if(oneStepWidth < 900 && oneStepWidth > 600) timeS = 14;
            if(oneStepWidth < 600) timeS = 10;
        }
        let oneStepWidth = oneStep.getBoundingClientRect().width - 80;
        time();
        rulesBody.style.animation = `draive infinite ${timeS}s`;

        const elementStyle = document.createElement('style');
        elementStyle.innerHTML = `
        @keyframes draive {
            0% {
                transform: translate(0, 0);
            }
            15% {
                transform: translate( ${oneStepWidth}px, 0);
            }
            30% {
                transform: translate( ${oneStepWidth}px, 0);
            }
            40% {
                transform: translate(0, 0);
            }
        }`;
        wrapper.append(elementStyle);
        } catch (error) {
            console.log('',error);
        }
}






/***/ }),

/***/ "./js/modules/youtube.js":
/*!*******************************!*\
  !*** ./js/modules/youtube.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ youtubeVideo)
/* harmony export */ });
function youtubeVideo () {
    try {
        let videos = document.querySelectorAll('.video');
        function findVideos() {
            for (let i = 0; i < videos.length; i++) {
                setupVideo(videos[i]);
            }
        }
        
        function setupVideo(video) {
            let link = video.querySelector('.video__link');
            let media = video.querySelector('.video__media');
            let button = video.querySelector('.video__button');
            let id = parseMediaURL(media);
        
            video.addEventListener('click', () => {
                let iframe = createIframe(id);
        
                link.remove();
                button.remove();
                video.appendChild(iframe);
            });
        
            link.removeAttribute('href');
            video.classList.add('video--enabled');
        }
        
        function parseMediaURL(media) {
            let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
            let url = media.src;
            let match = url.match(regexp);
        
            return match[1];
        }
        
        function createIframe(id) {
            let iframe = document.createElement('iframe');
        
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('allow', 'autoplay');
            iframe.setAttribute('src', generateURL(id));
            iframe.classList.add('video__media');
        
            return iframe;
        }
        
        function generateURL(id) {
            let query = '?rel=0&showinfo=0&autoplay=1';
        
            return 'https://www.youtube.com/embed/' + id + query;
        }
        
        findVideos();
        } catch (error) {
            console.log('',error);
        }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu_nav */ "./js/modules/menu_nav.js");
/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gallery */ "./js/modules/gallery.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ "./js/modules/popup.js");
/* harmony import */ var _modules_calc_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc_index */ "./js/modules/calc_index.js");
/* harmony import */ var _modules_calc_m2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc_m2 */ "./js/modules/calc_m2.js");
/* harmony import */ var _modules_ruler_movement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ruler_movement */ "./js/modules/ruler_movement.js");
/* harmony import */ var _modules_phone_input_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/phone_input_index */ "./js/modules/phone_input_index.js");
/* harmony import */ var _modules_email_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/email_index */ "./js/modules/email_index.js");
/* harmony import */ var _modules_youtube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/youtube */ "./js/modules/youtube.js");
/* harmony import */ var _modules_icon_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/icon_observer */ "./js/modules/icon_observer.js");
/* harmony import */ var _modules_animation_praise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/animation_praise */ "./js/modules/animation_praise.js");
/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/questions */ "./js/modules/questions.js");













window.addEventListener('DOMContentLoaded', () => {
    let cursUsd = 3.2; //курс доллара
    let perimeterPrace = 1; //цена в usd за метр периметра
    let lightPrace = 1; //цена в usd за одну световую точку
    let workPrace = 15; //цена в byn за метр кв. работы

    (0,_modules_menu_nav__WEBPACK_IMPORTED_MODULE_0__["default"])({
        cursUsd: cursUsd, 
        workPrace: workPrace,
        lightPrace: lightPrace,
        perimeterPrace: perimeterPrace,
    });
    (0,_modules_gallery__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_calc_index__WEBPACK_IMPORTED_MODULE_3__["default"])({
        cursUsd: cursUsd,
        workPrace: workPrace,
        lightPrace: lightPrace,
        perimeterPrace: perimeterPrace,
    });
    (0,_modules_calc_m2__WEBPACK_IMPORTED_MODULE_4__["default"])({
        cursUsd: cursUsd, 
        works: workPrace, 
        pracePerimetr: perimeterPrace,
    });
    (0,_modules_ruler_movement__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_phone_input_index__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_email_index__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_modules_youtube__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_modules_icon_observer__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_modules_animation_praise__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_modules_questions__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map