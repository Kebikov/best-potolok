/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        const calculationIndex = document.querySelector('.calculation-index');
        if(calculationIndex){
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
        }
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
        if(praceMondeyInput) {
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
        }
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
        if(praceMondeyTelInput) {
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
        }
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
        if(gallery) {
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
        }
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
        if(iconsBox) {
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
        }
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
        if(praceMondeyTel) {
            (function phoneInput () {
                const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
                //* проверка введенного телефона 
                praceMondeyTelInput.addEventListener('click',  () => (0,_check_number_phone__WEBPACK_IMPORTED_MODULE_0__["default"])(praceMondeyTelInput, praceMondeyTel, 0, {classOne: 'grey', classTwo: 'green'}));
            }());
        }
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
        if(rulesBody) {
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
        }
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

/***/ }),

/***/ "./ajax/lustre-dot.ts":
/*!****************************!*\
  !*** ./ajax/lustre-dot.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lustreDot = void 0;
exports.lustreDot = [
    {
        title: 'SAPRA SL1000М',
        color: 'белый',
        article: '2200055',
        diameter: 'Ø90 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200055.jpg',
        price: '2.55'
    },
    {
        title: 'SAPRA SL1010М',
        color: 'белый',
        article: '2200056',
        diameter: '90×90 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200056.jpg',
        price: '2.55'
    },
    {
        title: 'SAPRA SL2000',
        color: 'прозрачный',
        article: '2200063',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200063.jpg',
        price: '1.69'
    },
    {
        title: 'SAPRA SL2010',
        color: 'прозрачный',
        article: '2200064',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200064.jpg',
        price: '1.69'
    },
    {
        title: 'SAPRA SL2020',
        color: 'прозрачный',
        article: '2200065',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200065.jpg',
        price: '1.69'
    },
    {
        title: 'SAPRA SL2030',
        color: 'прозрачный',
        article: '2200066',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200066.jpg',
        price: '1.45'
    },
    {
        title: 'SAPRA SL2040',
        color: 'прозрачный',
        article: '2200067',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200067.jpg',
        price: '1.69'
    },
    {
        title: 'SAPRA SL2050',
        color: 'прозрачный',
        article: '2200068',
        diameter: 'Ø120 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200068.jpg',
        price: '1.99'
    },
    {
        title: 'SAPRA SL2060',
        color: 'прозрачный',
        article: '2200069',
        diameter: 'Ø120 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200069.jpg',
        price: '1.99'
    },
    {
        title: 'SAPRA SL2070',
        color: 'прозрачный',
        article: '2200070',
        diameter: 'Ø120 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200070.jpg',
        price: '1.99'
    },
    {
        title: 'SAPRA SL5300М',
        color: 'белый',
        article: '2200058',
        diameter: 'Ø120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200058.jpg',
        price: '3.30'
    },
    {
        title: 'SAPRA SL5310М',
        color: 'белый',
        article: '2200059',
        diameter: '125×125 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200059.jpg',
        price: '3.30'
    },
    {
        title: 'SAPRA SL5320М',
        color: 'белый',
        article: '2200060',
        diameter: 'Ø125 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200060.jpg',
        price: '3.30'
    },
    {
        title: 'SAPRA SL5330М',
        color: 'белый',
        article: '2200061',
        diameter: 'Ø125 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200061.jpg',
        price: '4.99'
    },
    {
        title: 'SAPRA SL5332М',
        color: 'белый',
        article: '2200062',
        diameter: '125×125 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200062.jpg',
        price: '4.99'
    },
    {
        title: 'SAPRA SL5301',
        color: 'прозрачный',
        article: '2200071',
        diameter: 'Ø120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200071.jpg',
        price: '3.20'
    },
    {
        title: 'SAPRA SL5302',
        color: 'прозрачный',
        article: '2200072',
        diameter: 'Ø120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200072.jpg',
        price: '3.20'
    },
    {
        title: 'SAPRA SL5303',
        color: 'прозрачный',
        article: '2200073',
        diameter: 'Ø120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200073.jpg',
        price: '2.11'
    },
    {
        title: 'SAPRA SL5304',
        color: 'прозрачный',
        article: '2200074',
        diameter: 'Ø130 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200074.jpg',
        price: '3.20'
    },
    {
        title: 'SAPRA SL5305',
        color: 'прозрачный',
        article: '2200075',
        diameter: 'Ø130 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200075.jpg',
        price: '2.55'
    },
    {
        title: 'SAPRA SL5306',
        color: 'прозрачный',
        article: '2200076',
        diameter: 'Ø130 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: '4000K',
        img: '/img/lamps/dot/2200076.jpg',
        price: '3.01'
    },
    {
        title: 'SAPRA BL1000',
        color: 'зеркальный прозрачный',
        article: '2200031',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200031.jpg',
        price: '1.88'
    },
    {
        title: 'SAPRA BL1100',
        color: 'чёрный',
        article: '2200032',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200032.jpg',
        price: '1.88'
    },
    {
        title: 'SAPRA BL1010',
        color: 'зеркальный прозрачный',
        article: '2200033',
        diameter: '90×90 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200033.jpg',
        price: '1.88'
    },
    {
        title: 'SAPRA BL1020',
        color: 'зеркальный прозрачный',
        article: '2200034',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200034.jpg',
        price: '1.88'
    },
    {
        title: 'SAPRA BL1120',
        color: 'чёрный',
        article: '2200035',
        diameter: 'Ø95 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø65 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200035.jpg',
        price: '1.88'
    },
    {
        title: 'SAPRA BMG001',
        color: 'белый',
        article: '2200042',
        diameter: 'Ø80 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø60 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200042.jpg',
        price: '0.43'
    },
    {
        title: 'SAPRA BMG001',
        color: 'хром',
        article: '2200043',
        diameter: 'Ø80 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø60 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200043.jpg',
        price: '0.43'
    },
    {
        title: 'SAPRA BMG001',
        color: 'никель',
        article: '2200044',
        diameter: 'Ø80 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø60 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200044.jpg',
        price: '0.70'
    },
    {
        title: 'SAPRA BMG001',
        color: 'золото',
        article: '2200045',
        diameter: 'Ø80 мм',
        patron: 'GU5.3',
        diameterCut: 'Ø60 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200045.jpg',
        price: '0.70'
    },
    {
        title: 'SAPRA BL5300',
        color: 'зеркальный прозрачный',
        article: '2200036',
        diameter: 'Ø120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200036.jpg',
        price: '3.20'
    },
    {
        title: 'SAPRA BL5301',
        color: 'чёрный',
        article: '2200037',
        diameter: 'Ø120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200037.jpg',
        price: '3.91'
    },
    {
        title: 'SAPRA BL5310',
        color: 'зеркальный прозрачный',
        article: '2200038',
        diameter: '120×120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200038.jpg',
        price: '3.91'
    },
    {
        title: 'SAPRA BL5311',
        color: 'чёрный',
        article: '2200039',
        diameter: '120×120 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200039.jpg',
        price: '3.20'
    },
    {
        title: 'SAPRA BL5320',
        color: 'зеркальный прозрачный',
        article: '2200040',
        diameter: 'Ø125 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200040.jpg',
        price: '3.75'
    },
    {
        title: 'SAPRA BL5321',
        color: 'чёрный',
        article: '2200041',
        diameter: 'Ø125 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200041.jpg',
        price: '3.20'
    },
    {
        title: 'SAPRA BMG53',
        color: 'белый',
        article: '2200046',
        diameter: 'Ø100 мм',
        patron: 'GX53',
        diameterCut: 'Ø85 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200046.jpg',
        price: '0.88'
    },
    {
        title: 'SAPRA BMG53',
        color: 'хром',
        article: '2200047',
        diameter: 'Ø100 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200047.jpg',
        price: '1.00'
    },
    {
        title: 'SAPRA BMG53',
        color: 'золото',
        article: '2200048',
        diameter: 'Ø106 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200048.jpg',
        price: '1.00'
    },
    {
        title: 'SAPRA BMG53',
        color: 'хром',
        article: '2200049',
        diameter: 'Ø106 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200049.jpg',
        price: '1.00'
    },
    {
        title: 'SAPRA BMG53',
        color: 'чёрный',
        article: '2200050',
        diameter: 'Ø106 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200050.jpg',
        price: '1.23'
    },
    {
        title: 'SAPRA BMG53',
        color: 'белый',
        article: '2200051',
        diameter: 'Ø100 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200051.jpg',
        price: '1.23'
    },
    {
        title: 'SAPRA BMG53',
        color: 'чёрный',
        article: '2200052',
        diameter: 'Ø100 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200052.jpg',
        price: '1.23'
    },
    {
        title: 'SAPRA BMG53',
        color: 'бронза',
        article: '2200053',
        diameter: 'Ø106 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200053.jpg',
        price: '1.23'
    },
    {
        title: 'SAPRA BMG53',
        color: 'медь',
        article: '2200054',
        diameter: 'Ø106 мм',
        patron: 'GX53',
        diameterCut: 'Ø90 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200054.jpg',
        price: '1.23'
    },
    {
        title: 'SAPRA BL3000-1',
        color: 'белый',
        article: '2200461',
        diameter: '135×135 мм',
        patron: 'GU5.3',
        diameterCut: '110×110 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200461.jpg',
        price: '4.07'
    },
    {
        title: 'SAPRA BL3000-1',
        color: 'чёрный',
        article: '2200462',
        diameter: '135×135 мм',
        patron: 'GU5.3',
        diameterCut: '110×110 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200462.jpg',
        price: '4.07'
    },
    {
        title: 'SAPRA BL3000-2',
        color: 'белый',
        article: '2200463',
        diameter: '235×135 мм',
        patron: 'GU5.3',
        diameterCut: '210×110 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200463.jpg',
        price: '6.87'
    },
    {
        title: 'SAPRA BL3000-2',
        color: 'чёрный',
        article: '2200464',
        diameter: '235×135 мм',
        patron: 'GU5.3',
        diameterCut: '210×110 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200464.jpg',
        price: '6.87'
    },
    {
        title: 'SAPRA BL3000-3',
        color: 'белый',
        article: '2200465',
        diameter: '335×135 мм',
        patron: 'GU5.3',
        diameterCut: '310×110 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200465.jpg',
        price: '8.56'
    },
    {
        title: 'SAPRA BL3000-3',
        color: 'чёрный',
        article: '2200466',
        diameter: '335×135 мм',
        patron: 'GU5.3',
        diameterCut: '310×110 мм',
        colorLightK: 'без LED',
        img: '/img/lamps/dot/2200466.jpg',
        price: '8.56'
    }
];


/***/ }),

/***/ "./ajax/lustre-light.ts":
/*!******************************!*\
  !*** ./ajax/lustre-light.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.light = void 0;
exports.light = [
    {
        material: 'ART',
        title: 'SAPRA LD202/1 ',
        article: '2200348',
        wats: '64W',
        color: 'белый',
        diameter: '60×30×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '3520Lm',
        img: '/img/lamps/lights/2200348.jpg',
        price: '53.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD202/1 ',
        article: '2200349',
        wats: '64W',
        color: 'чёрный',
        diameter: '60×30×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '3520Lm',
        img: '/img/lamps/lights/2200349.jpg',
        price: '53.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD202/2 ',
        article: '2200350',
        wats: '108W',
        color: 'белый',
        diameter: '',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '5940Lm',
        img: '/img/lamps/lights/2200350.jpg',
        price: '68.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD202/2 ',
        article: '2200351',
        wats: '108W',
        color: 'чёрный',
        diameter: '',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '5940Lm',
        img: '/img/lamps/lights/2200351.jpg',
        price: '68.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD202/3 ',
        article: '2200352',
        wats: '196W',
        color: 'белый',
        diameter: '80×40×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '10780Lm',
        img: '/img/lamps/lights/2200352.jpg',
        price: '115.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD202/3 ',
        article: '2200353',
        wats: '196W',
        color: 'чёрный',
        diameter: '80×40×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '10780Lm',
        img: '/img/lamps/lights/2200353.jpg',
        price: '115.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/1 ',
        article: '2200354',
        wats: '46W',
        color: 'белый',
        diameter: 'Ø40×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '2530Lm',
        img: '/img/lamps/lights/2200354.jpg',
        price: '44.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/1 ',
        article: '2200355',
        wats: '46W',
        color: 'чёрный',
        diameter: 'Ø40×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '2530Lm',
        img: '/img/lamps/lights/2200355.jpg',
        price: '44.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/1 ',
        article: '2200356',
        wats: '70W',
        color: 'белый',
        diameter: 'Ø60×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '3850Lm',
        img: '/img/lamps/lights/2200356.jpg',
        price: '63.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/1',
        article: '2200357',
        wats: '70W',
        color: 'чёрный',
        diameter: 'Ø60×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '3850Lm',
        img: '/img/lamps/lights/2200357.jpg',
        price: '63.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/2 ',
        article: '2200358',
        wats: '116W',
        color: 'белый',
        diameter: 'Ø60×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '6380Lm',
        img: '/img/lamps/lights/2200358.jpg',
        price: '79.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/2',
        article: '2200359',
        wats: '116W',
        color: 'чёрный',
        diameter: 'Ø60×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '6380Lm',
        img: '/img/lamps/lights/2200359.jpg',
        price: '79.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/3',
        article: '2200360',
        wats: '162W',
        color: 'белый',
        diameter: 'Ø80×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '8910Lm',
        img: '/img/lamps/lights/2200360.jpg',
        price: '119.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD204/3',
        article: '2200361',
        wats: '162W',
        color: 'чёрный',
        diameter: 'Ø80×max.107 см',
        colorLightK: '3000-6000K',
        patron: 'есть',
        lightStream: '8910Lm',
        img: '/img/lamps/lights/2200361.jpg',
        price: '119.00'
    },
    {
        material: 'ART',
        title: 'SAPRA LD304/2',
        article: ' 2300599',
        wats: '120W',
        color: 'хром',
        diameter: 'Ø60×max.80 см',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 6600 Lm',
        img: '/img/lamps/lights/2300599.jpg',
        price: '170.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL361',
        article: '2200128',
        wats: '36W',
        color: 'белая',
        diameter: 'Ø455×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: '2900Lm',
        img: '/img/lamps/lights/2200128.jpg',
        price: '29.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL361',
        article: '2200129',
        wats: '36W',
        color: 'белая',
        diameter: 'Ø455×70 мм',
        colorLightK: '4000K',
        patron: 'нет',
        lightStream: '2900Lm',
        img: '/img/lamps/lights/2200129.jpg',
        price: '24.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL721',
        article: '2200130',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø570×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: '5000Lm',
        img: '/img/lamps/lights/2200130.jpg',
        price: '33.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL182',
        article: '2200131',
        wats: '18W',
        color: 'белый',
        diameter: 'Ø340×70 мм',
        colorLightK: '4000K',
        patron: 'есть',
        lightStream: '1400Lm',
        img: '/img/lamps/lights/2200131.jpg',
        price: '6.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL242',
        article: '2200132',
        wats: '24W',
        color: 'белый',
        diameter: 'Ø400×70 мм',
        colorLightK: '4000K',
        patron: 'нет',
        lightStream: '1900Lm',
        img: '/img/lamps/lights/2200132.jpg',
        price: '14.99'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL362',
        article: '2200133',
        wats: '36W',
        color: 'белый',
        diameter: 'Ø400×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 2900Lm',
        img: '/img/lamps/lights/2200133.jpg',
        price: '25.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL362',
        article: '2200134',
        wats: '36W',
        color: 'белый',
        diameter: 'Ø400×70 мм',
        colorLightK: '4000K',
        patron: 'нет',
        lightStream: '2900Lm',
        img: '/img/lamps/lights/2200134.jpg',
        price: '22.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL722',
        article: '2200135',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø500×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200135.jpg',
        price: '33.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL363',
        article: '2200136',
        wats: '36W',
        color: 'белый',
        diameter: 'Ø390×60 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 2900Lm',
        img: '/img/lamps/lights/2200136.jpg',
        price: '26.50'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL363',
        article: '2200137',
        wats: '36W',
        color: 'белый',
        diameter: 'Ø390×60 мм',
        colorLightK: '4000K',
        patron: 'нет',
        lightStream: '2900Lm',
        img: '/img/lamps/lights/2200137.jpg',
        price: '24.30'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL723',
        article: '2200138',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø500×60 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200138.jpg',
        price: '33.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL724',
        article: '2200139',
        wats: '72W',
        color: 'белый',
        diameter: '440×440×60 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200139.jpg',
        price: '48.20'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL725',
        article: '2200140',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø500×80 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200140.jpg',
        price: '38.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL726',
        article: '2200141',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø480×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200141.jpg',
        price: '38.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL727',
        article: '2200142',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø480×60 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200142.jpg',
        price: '51.02'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL728',
        article: '2200143',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø490×90 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200143.jpg',
        price: '54.66'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL489',
        article: '2200144',
        wats: '48W',
        color: 'белый',
        diameter: 'Ø380×60 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 3800Lm',
        img: '/img/lamps/lights/2200144.jpg',
        price: '37.41'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL729',
        article: '2200145',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø500×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200145.jpg',
        price: '47.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL7212',
        article: '2200158',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø500×80 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200158.jpg',
        price: '39.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL7214',
        article: '2200159',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø480×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200159.jpg',
        price: '39.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL7215',
        article: '2200160',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø480×70 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200160.jpg',
        price: '39.90'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL12016',
        article: '2300467',
        wats: '120W',
        color: 'белый',
        diameter: 'Ø550×110 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 9600Lm',
        img: '/img/lamps/lights/2300467.jpg',
        price: '108.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL7217',
        article: '2300468',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø480×85 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2300468.jpg',
        price: '55.00'
    },
    {
        material: 'STARLIGHT',
        title: 'SAPRA DL7230',
        article: '2200161',
        wats: '72W',
        color: 'белый',
        diameter: 'Ø500×80 мм',
        colorLightK: '3000-6500K',
        patron: 'есть',
        lightStream: 'max. 5000Lm',
        img: '/img/lamps/lights/2200161.jpg',
        price: '79.00'
    },
    //   {
    //     title: 'SAPRA DL7210',
    //     article: '2200146',
    //     wats: '72W',
    //     color: 'белый',
    //     diameter: 'Ø450×50 мм',
    //     colorLightK: '3000-6500K',
    //     patron: 'есть',
    //     lightStream: 'max. 5000Lm',
    //     img: '/img/lamps/lights/2200146.jpg',
    //     price: '64.00'
    //   },
];


/***/ }),

/***/ "./ajax/panels.ts":
/*!************************!*\
  !*** ./ajax/panels.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lustre = exports.trek = exports.panels = void 0;
exports.panels = [
    {
        title: 'SAPRA LP110',
        wats: '6',
        color: 'white',
        article: '2200001',
        diameter: '120',
        diameterCut: '95',
        lightStream: '480',
        colorLightK: '4000',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '1.9'
    },
    {
        title: 'SAPRA LP110',
        wats: '9',
        color: 'white',
        article: '2200002',
        diameter: '143',
        diameterCut: '120',
        lightStream: '720',
        colorLightK: '4000',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '2.52'
    },
    {
        title: 'SAPRA LP110',
        wats: '12',
        color: 'white',
        article: '2200003',
        diameter: '170',
        diameterCut: '120',
        lightStream: '720',
        colorLightK: '4000',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '2.52'
    },
    {
        wats: '15',
        title: 'SAPRA LP110',
        color: 'белая',
        article: '2200004',
        diameter: '192',
        diameterCut: '160',
        colorLightK: '4000',
        lightStream: '1200',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '3.84'
    },
    {
        wats: '18',
        title: 'SAPRA LP110',
        color: 'белая',
        article: '2200005',
        diameter: '223',
        diameterCut: '190',
        colorLightK: '4000',
        lightStream: '1440',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '4.99'
    },
    {
        wats: '6',
        title: 'SAPRA LP200 со стеклом',
        color: 'белая',
        article: '2200006',
        diameter: '100',
        diameterCut: '70',
        colorLightK: '4000',
        lightStream: '480',
        img: '/img/lamps/all-lamp/2200006.jpg',
        price: '1.9'
    },
    {
        wats: '9',
        title: 'SAPRA LP200 со стеклом',
        color: 'белая',
        article: '2200007',
        diameter: '120',
        diameterCut: '95',
        colorLightK: '4000',
        lightStream: '720',
        img: '/img/lamps/all-lamp/2200006.jpg',
        price: '3.39'
    },
    {
        wats: '12',
        title: 'SAPRA LP200 со стеклом',
        color: 'белая',
        article: '2200008',
        diameter: '160',
        diameterCut: '125',
        colorLightK: '4000',
        lightStream: '960',
        img: '/img/lamps/all-lamp/2200006.jpg',
        price: '3.99'
    },
    {
        wats: '7',
        title: 'SAPRA LP300',
        color: 'белая',
        article: '2200009',
        diameter: '103',
        diameterCut: '75',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200009.jpg',
        price: '2.49'
    },
    {
        wats: '9',
        title: 'SAPRA LP300',
        color: 'белая',
        article: '2200010',
        diameter: '112',
        diameterCut: '85',
        colorLightK: '4000',
        lightStream: '720',
        img: '/img/lamps/all-lamp/2200009.jpg',
        price: '1.99'
    },
    {
        wats: '12',
        title: 'SAPRA LP300',
        color: 'белая',
        article: '2200011',
        diameter: '136',
        diameterCut: '110',
        colorLightK: '4000',
        lightStream: '960',
        img: '/img/lamps/all-lamp/2200009.jpg',
        price: '3.99'
    },
    {
        wats: '3+2',
        title: 'SAPRA LP400',
        color: 'белая',
        article: '2200012',
        diameter: '100',
        diameterCut: '70',
        colorLightK: '4000+6500',
        lightStream: '400',
        img: '/img/lamps/all-lamp/2200012.jpg',
        price: '2.7'
    },
    {
        wats: '6+3',
        title: 'SAPRA LP400',
        color: 'белая',
        article: '2200013',
        diameter: '145',
        diameterCut: '107',
        colorLightK: '4000+6500',
        lightStream: '720',
        img: '/img/lamps/all-lamp/2200012.jpg',
        price: '4.1'
    },
    {
        wats: '12+4',
        title: 'SAPRA LP400',
        color: 'белая',
        article: '2200014',
        diameter: '195',
        diameterCut: '155',
        colorLightK: '4000+6500',
        lightStream: '1280',
        img: '/img/lamps/all-lamp/2200012.jpg',
        price: '4.3'
    },
    {
        wats: '6',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200015',
        diameter: '100',
        diameterCut: '50-85',
        colorLightK: '4000',
        lightStream: '480',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '2.12'
    },
    {
        wats: '8',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200016',
        diameter: '118',
        diameterCut: '50-95',
        colorLightK: '4000',
        lightStream: '640',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '2.6'
    },
    {
        wats: '15',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200017',
        diameter: '173',
        diameterCut: '50-150',
        colorLightK: '4000',
        lightStream: '1200',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '4.13'
    },
    {
        wats: '20',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200018',
        diameter: '230',
        diameterCut: '50210',
        colorLightK: '4000',
        lightStream: '1600',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '5.16'
    },
    {
        wats: '7',
        title: 'SAPRA LP600',
        color: 'белая',
        article: '2200019',
        diameter: '80',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200019.jpg',
        price: '3.95'
    },
    {
        wats: '7',
        title: 'SAPRA LP610',
        color: 'чёрная',
        article: '2200020',
        diameter: '80',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200020.jpg',
        price: '3.42'
    },
    {
        wats: '7',
        title: 'SAPRA LP601',
        color: 'белая',
        article: '2200021',
        diameter: '82 * 82',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200021.jpg',
        price: '3.95'
    },
    {
        wats: '7',
        title: 'SAPRA LP611',
        color: 'чёрная',
        article: '2200022',
        diameter: '8282',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200022.jpg',
        price: '3.42'
    },
    {
        wats: '10',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2200023',
        diameter: '85',
        diameterCut: '50-70',
        colorLightK: '4000',
        lightStream: '1000',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '2.18'
    },
    {
        wats: '10',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2300403',
        diameter: '85',
        diameterCut: '50-70',
        colorLightK: '6400',
        lightStream: '1000',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '2.18'
    },
    {
        wats: '16',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2200024',
        diameter: '120',
        diameterCut: '50-105',
        colorLightK: '4000',
        lightStream: '1600',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '3.28'
    },
    {
        wats: '16',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2300404',
        diameter: '120',
        diameterCut: '50-105',
        colorLightK: '6400',
        lightStream: '1600',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '3.28'
    },
    {
        wats: '24',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2200025',
        diameter: '170',
        diameterCut: '50-155',
        colorLightK: '4000',
        lightStream: '2400',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '4.55'
    },
    {
        wats: '24',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2300405',
        diameter: '170',
        diameterCut: '50-155',
        colorLightK: '6400',
        lightStream: '2400',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '4.55'
    },
    {
        wats: '36',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2200026',
        diameter: '220',
        diameterCut: '50-200',
        colorLightK: '4000',
        lightStream: '3600',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '6.37'
    },
    {
        wats: '36',
        title: 'SAPRA LP701 круг',
        color: 'белая',
        article: '2300406',
        diameter: '220',
        diameterCut: '50-200',
        colorLightK: '6400',
        lightStream: '3600',
        img: '/img/lamps/all-lamp/2200023.jpg',
        price: '6.37'
    },
    {
        wats: '10',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2200027',
        diameter: '85×85',
        diameterCut: '50×50 - 80×80',
        colorLightK: '4000',
        lightStream: '1000',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '2.18'
    },
    {
        wats: '10',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2300407',
        diameter: '85×85',
        diameterCut: '50×50 - 80×80',
        colorLightK: '6400',
        lightStream: '1000',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '2.18'
    },
    {
        wats: '16',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2200028',
        diameter: '125×125',
        diameterCut: '50×50 - 115×115',
        colorLightK: '4000',
        lightStream: '1600',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '3.28'
    },
    {
        wats: '16',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2300408',
        diameter: '125×125',
        diameterCut: '50×50 - 115×115',
        colorLightK: '6400',
        lightStream: '1600',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '3.28'
    },
    {
        wats: '24',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2200029',
        diameter: '170×170',
        diameterCut: '50×50 - 165×165',
        colorLightK: '4000',
        lightStream: '2400',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '4.55'
    },
    {
        wats: '24',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2300409',
        diameter: '170×170',
        diameterCut: '50×50 - 165×165',
        colorLightK: '6400',
        lightStream: '2400',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '4.55'
    },
    {
        wats: '36',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2200030',
        diameter: '220×220',
        diameterCut: '50×50 - 210×210',
        colorLightK: '4000',
        lightStream: '3600',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '6.37'
    },
    {
        wats: '36',
        title: 'SAPRA LP711 квадрат',
        color: 'белая',
        article: '2300410',
        diameter: '220×220',
        diameterCut: '50×50 - 210×210',
        colorLightK: '6400',
        lightStream: '3600',
        img: '/img/lamps/all-lamp/2200027.jpg',
        price: '6.37'
    },
    {
        wats: '10',
        title: 'SAPRA LP1000',
        color: 'белая',
        article: '2200375',
        diameter: '115×42',
        diameterCut: 'нет ',
        colorLightK: '4000',
        lightStream: '700',
        img: '/img/lamps/all-lamp/2200375.jpg',
        price: '13.66'
    },
    {
        wats: '10',
        title: 'SAPRA LP1000',
        color: 'чёрная',
        article: '2200376',
        diameter: '115×42',
        diameterCut: 'нет ',
        colorLightK: '4000',
        lightStream: '700',
        img: '/img/lamps/all-lamp/2200376.jpg',
        price: '13.66'
    },
    {
        wats: '20',
        title: 'SAPRA LP1000',
        color: 'белая',
        article: '2200377',
        diameter: '160×42',
        diameterCut: 'нет ',
        colorLightK: '4000',
        lightStream: '1400',
        img: '/img/lamps/all-lamp/2200375.jpg',
        price: '15.98'
    },
    {
        wats: '20',
        title: 'SAPRA LP1000',
        color: 'чёрная',
        article: '2200378',
        diameter: '160×42',
        diameterCut: 'нет ',
        colorLightK: '4000',
        lightStream: '1400',
        img: '/img/lamps/all-lamp/2200376.jpg',
        price: '15.98'
    },
    {
        wats: '28',
        title: 'SAPRA LP1000',
        color: 'белая',
        article: '2200379',
        diameter: '215×42',
        diameterCut: 'нет ',
        colorLightK: '4000',
        lightStream: '1960',
        img: '/img/lamps/all-lamp/2200375.jpg',
        price: '18.7'
    },
    {
        wats: '28',
        title: 'SAPRA LP1000',
        color: 'чёрная',
        article: '2200380',
        diameter: '215×42',
        diameterCut: 'нет ',
        colorLightK: '4000',
        lightStream: '1960',
        img: '/img/lamps/all-lamp/2200376.jpg',
        price: '18.7'
    }
];
exports.trek = [
    {
        title: 'SAPRA SP010 TR',
        wats: 'max. 13 W',
        color: 'белый',
        article: '2200093',
        diameter: 'Ø85×130 мм',
        rotation: '→ 315⁰ / ↑ 90⁰',
        patron: 'GX53',
        material: 'металл + пластик',
        img: '/img/lamps/trek/1.jpg',
        price: '9.88'
    },
    {
        title: 'SAPRA SP010 TR',
        wats: 'max. 13 W',
        color: 'чёрный',
        article: '2200094',
        diameter: 'Ø85×130 мм',
        rotation: '→ 315⁰ / ↑ 90⁰',
        patron: 'GX53',
        material: 'металл + пластик',
        img: '/img/lamps/trek/2.jpg',
        price: '7.55'
    },
    {
        title: 'SAPRA SP011 TR',
        wats: 'max. 13 W',
        color: 'белый',
        article: '2200095',
        diameter: 'Ø55×170 мм',
        rotation: '→ 315⁰ / ↑ 180⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/3.jpg',
        price: '9.4'
    },
    {
        title: 'SAPRA SP011 TR',
        wats: 'max. 13 W',
        color: 'чёрный',
        article: '2200096',
        diameter: 'Ø55×170 мм',
        rotation: '→ 315⁰ / ↑ 180⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/4.jpg',
        price: '9.4'
    },
    {
        title: 'SAPRA SP012 TR',
        wats: 'max. 13 W',
        color: 'белый',
        article: '2200097',
        diameter: 'Ø60×125 мм',
        rotation: '→ 360⁰ / ↑ 270⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/5.jpg',
        price: '3.75'
    },
    {
        title: 'SAPRA SP012 TR',
        wats: 'max. 13 W',
        color: 'чёрный',
        article: '2200098',
        diameter: 'Ø60×125 мм',
        rotation: '→ 360⁰ / ↑ 270⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/6.jpg',
        price: '3.75'
    },
    {
        title: 'SAPRA SP013 TR',
        wats: 'max. 13 W',
        color: 'белый',
        article: '2200099',
        diameter: '60×60×120 мм',
        rotation: '→ 360⁰ / ↑ 270⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/7.jpg',
        price: '3.75'
    },
    {
        title: 'SAPRA SP013 TR',
        wats: 'max. 13 W',
        color: 'чёрный',
        article: '2200100',
        diameter: '60×60×120 мм',
        rotation: '→ 360⁰ / ↑ 270⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/8.jpg',
        price: '3.75'
    },
    {
        title: 'SAPRA SP014 TR',
        wats: 'max. 13 W',
        color: 'белый',
        article: '2200101',
        diameter: 'Ø54×160 мм',
        rotation: '→ 315⁰ / ↑ 180⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/9.jpg',
        price: '7.89'
    },
    {
        title: 'SAPRA SP015 TR',
        wats: 'max. 13 W',
        color: 'белый',
        article: '2200102',
        diameter: 'Ø54×160 мм',
        rotation: '→ 315⁰ / ↑ 180⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/10.jpg',
        price: '7.07'
    },
    {
        title: 'SAPRA SP015 TR',
        wats: 'max. 13 W',
        color: 'чёрный',
        article: '2200103',
        diameter: 'Ø54×160 мм',
        rotation: '→ 315⁰ / ↑ 180⁰',
        patron: 'GU10',
        material: 'металл + пластик',
        img: '/img/lamps/trek/11.jpg',
        price: '7.07'
    }
];
exports.lustre = [
    {
        title: 'SAPRA SP001 SV',
        color: 'белый',
        article: '2200091',
        diameter: 'Ø54×300',
        diameterCut: 'Ø60×20',
        wats: 'max. 13 Вт',
        patron: 'GU10',
        material: 'металл',
        img: '/img/lamps/lustre/13.jpg',
        price: '10.9'
    },
    {
        title: 'SAPRA SP001 SV',
        color: 'чёрный',
        article: '2200092',
        diameter: 'Ø54×300',
        diameterCut: 'Ø60×20',
        wats: 'max. 13 Вт',
        patron: 'GU10',
        material: 'металл',
        img: '/img/lamps/lustre/14.jpg',
        price: '10.9'
    },
    {
        title: 'SAPRA SP002 SV',
        color: 'белый',
        article: '2200319',
        diameter: 'Ø54×300',
        diameterCut: 'Ø60×20',
        wats: 'max. 13 Вт',
        patron: 'GU10',
        material: 'металл',
        img: '/img/lamps/lustre/15.jpg',
        price: '18.5'
    },
    {
        title: 'SAPRA SP002 SV',
        color: 'чёрный',
        article: '2200320',
        diameter: 'Ø54×300',
        diameterCut: 'Ø60×20',
        wats: 'max. 13 Вт',
        patron: 'GU10',
        material: 'металл',
        img: '/img/lamps/lustre/16.jpg',
        price: '18.5'
    },
    {
        title: 'SAPRA LPL 101/1',
        color: 'чёрный',
        article: '2200321',
        diameter: 'Ø250×230',
        diameterCut: 'Ø120×20',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/17.jpg',
        price: '36.0'
    },
    {
        title: 'SAPRA LPL 101/3K',
        color: 'чёрный',
        article: '2200322',
        diameter: 'Ø250×230',
        diameterCut: 'Ø250×25',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/18.jpg',
        price: '96.0'
    },
    {
        title: 'SAPRA LPL 101/3Р',
        color: 'чёрный',
        article: '2200323',
        diameter: 'Ø250×230',
        diameterCut: '750×60×20',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/19.jpg',
        price: '99.0'
    },
    {
        title: 'SAPRA LPL 102/1',
        color: 'чёрный',
        article: '2200324',
        diameter: 'Ø250×290',
        diameterCut: 'Ø120×20',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/20.jpg',
        price: '38.5'
    },
    {
        title: 'SAPRA LPL 102/3K',
        color: 'чёрный',
        article: '2200325',
        diameter: 'Ø250×290',
        diameterCut: 'Ø250×25',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/21.jpg',
        price: '100.7'
    },
    {
        title: 'SAPRA LPL 102/3Р',
        color: 'чёрный',
        article: '2200326',
        diameter: 'Ø250×290',
        diameterCut: '750×60×20',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/22.jpg',
        price: '107'
    },
    {
        title: 'SAPRA LPL 103/1',
        color: 'чёрный',
        article: '2200327',
        diameter: 'Ø135×220',
        diameterCut: 'Ø120×20',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/23.jpg',
        price: '19'
    },
    {
        title: 'SAPRA LPL 103/3K',
        color: 'чёрный',
        article: '2200328',
        diameter: 'Ø135×220',
        diameterCut: 'Ø250×25',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/24.jpg',
        price: '57'
    },
    {
        title: 'SAPRA LPL 103/3Р',
        color: 'чёрный',
        article: '2200329',
        diameter: 'Ø135×220',
        diameterCut: '550×40×20',
        wats: '',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/25.jpg',
        price: '60'
    },
    {
        title: 'SAPRA LPL 104/1',
        color: 'чёрный/янтарь',
        article: '2200330',
        diameter: 'Ø150×135',
        diameterCut: 'Ø120×20',
        wats: '',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/26.jpg',
        price: '17'
    },
    {
        title: 'SAPRA LPL 104/3Р',
        color: 'чёрный/янтарь',
        article: '2200331',
        diameter: 'Ø150×135',
        diameterCut: '550×40×20',
        wats: '',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/27.jpg',
        price: '51'
    },
    {
        title: 'SAPRA LPL 105/1',
        color: 'чёрный/белый',
        article: '2200332',
        diameter: 'Ø150×135',
        diameterCut: 'Ø120×20',
        wats: '',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/28.jpg',
        price: '17'
    },
    {
        title: 'SAPRA LPL 105/3Р',
        color: 'чёрный/белый',
        article: '2200333',
        diameter: 'Ø150×135',
        diameterCut: '550×40×20',
        wats: '',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/29.jpg',
        price: '51'
    },
    {
        title: 'SAPRA LPL 106/1',
        color: 'чёрный/белый',
        article: '2200334',
        diameter: 'Ø155×170',
        diameterCut: 'Ø120×20',
        wats: '',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/30.jpg',
        price: '21'
    },
    {
        title: 'SAPRA LPL 106/3Р',
        color: 'чёрный/белый',
        article: '2200335',
        diameter: 'Ø155×170',
        diameterCut: '550×40×20',
        wats: '',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/31.jpg',
        price: '57'
    },
    {
        title: 'SAPRA LPL 107/1',
        color: 'чёрный/серый',
        article: '2200336',
        diameter: 'Ø160×190',
        diameterCut: 'Ø120×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/1.jpg',
        price: '24.5'
    },
    {
        title: 'SAPRA LPL 107/3Р',
        color: 'чёрный/серый',
        article: '2200337',
        diameter: 'Ø160×190',
        diameterCut: '550×40×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/2.jpg',
        price: '67.0'
    },
    {
        title: 'SAPRA LPL 107/1',
        color: 'чёрный/янтарь',
        article: '2200338',
        diameter: 'Ø160×190',
        diameterCut: 'Ø120×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/3.jpg',
        price: '24.5'
    },
    {
        title: 'SAPRA LPL 107/3Р',
        color: 'чёрный/янтарь',
        article: '2200339',
        diameter: 'Ø160×190',
        diameterCut: '550×40×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'стекло',
        img: '/img/lamps/lustre/4.jpg',
        price: '67.0'
    },
    {
        title: 'SAPRA LPL 108/1',
        color: 'чёрный',
        article: '2200340',
        diameter: '230×75',
        diameterCut: 'Ø120×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/5.jpg',
        price: '22.2'
    },
    {
        title: 'SAPRA LPL 108/3Р',
        color: 'чёрный',
        article: '2200341',
        diameter: '230×200×75',
        diameterCut: '600×60×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/6.jpg',
        price: '67.0'
    },
    {
        title: 'SAPRA LPL 109/1',
        color: 'чёрный',
        article: '2200342',
        diameter: '250×250×75',
        diameterCut: 'Ø120×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/7.jpg',
        price: '29.0'
    },
    {
        title: 'SAPRA LPL 109/3Р',
        color: 'чёрный',
        article: '2200343',
        diameter: '250×250×75',
        diameterCut: '600×60×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/8.jpg',
        price: '65.0'
    },
    {
        title: 'SAPRA LPL 110/1',
        color: 'чёрный',
        article: '2200344',
        diameter: '180×290×70',
        diameterCut: 'Ø120×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/9.jpg',
        price: '35.6'
    },
    {
        title: 'SAPRA LPL 110/3Р',
        color: 'чёрный',
        article: '2200345',
        diameter: '180×290×70',
        diameterCut: '600×60×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/10.jpg',
        price: '70.0'
    },
    {
        title: 'SAPRA LPL 111/1',
        color: 'чёрный',
        article: '2200346',
        diameter: '200×295×75',
        diameterCut: 'Ø120×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/11.jpg',
        price: '31.0'
    },
    {
        title: 'SAPRA LPL 111/3Р',
        color: 'чёрный',
        article: '2200347',
        diameter: '200×295×75',
        diameterCut: '600×60×20',
        wats: 'max. 20 Вт',
        patron: 'E27',
        material: 'металл',
        img: '/img/lamps/lustre/12.jpg',
        price: '67.0'
    }
];


/***/ }),

/***/ "./js/data-start.ts":
/*!**************************!*\
  !*** ./js/data-start.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.priceUP = exports.elementsOnPage = exports.workPrace = exports.lightPrace = exports.perimeterPrace = exports.cursUsd = void 0;
exports.cursUsd = 3.25; //курс доллара
//= расчет стоимости потолка 
exports.perimeterPrace = 1; //цена в usd за метр периметра
exports.lightPrace = 1; //цена в usd за одну световую точку
exports.workPrace = 15; //цена в byn за метр кв. работы
//= для светильников 
exports.elementsOnPage = 12; // количество ламп на странице при первом показе
exports.priceUP = 1.1 * exports.cursUsd; // коэфициент на сколько поднять цену относительно базовой(указанной в базе)


/***/ }),

/***/ "./js/lamps/helps/addBlockFilter.ts":
/*!******************************************!*\
  !*** ./js/lamps/helps/addBlockFilter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


//: add filters
Object.defineProperty(exports, "__esModule", ({ value: true }));
const addBlockFilter = (body, arrValues, title, unit, key) => {
    console.log('', arrValues);
    const filterBlockElement = document.createElement('div');
    filterBlockElement.classList.add('filter-block');
    const filterTitleElement = document.createElement('div');
    filterTitleElement.classList.add('filter-title');
    filterTitleElement.innerHTML = title;
    filterBlockElement.append(filterTitleElement);
    for (let item of arrValues) {
        filterBlockElement.insertAdjacentHTML('beforeend', `
        <div class="filter-checkbox">
            <input class="filter-checkbox__input" type="checkbox" name="${key}" value="${item}" id="${item}">
            <label class="filter-checkbox__lable" for="${item}" >${item} ${unit}</label>
        </div>
        `);
    }
    body.prepend(filterBlockElement);
};
exports["default"] = addBlockFilter;


/***/ }),

/***/ "./js/lamps/helps/addLamps.ts":
/*!************************************!*\
  !*** ./js/lamps/helps/addLamps.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const createLampElement_1 = __importDefault(__webpack_require__(/*! ./createLampElement */ "./js/lamps/helps/createLampElement.ts"));
const caunter_1 = __importDefault(__webpack_require__(/*! ./caunter */ "./js/lamps/helps/caunter.ts"));
//= addLamps 
const addLamps = (currentArrLamps, elementsOnPage) => {
    let start = (0, caunter_1.default)('plus-one') * elementsOnPage;
    let finish = start + elementsOnPage;
    (0, createLampElement_1.default)(currentArrLamps, start, finish);
};
exports["default"] = addLamps;


/***/ }),

/***/ "./js/lamps/helps/addTotalFindLampOnPage.ts":
/*!**************************************************!*\
  !*** ./js/lamps/helps/addTotalFindLampOnPage.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
//* добавление количества найденых товаров в результате фильтрации в блок визу фильтра 
const changeTextProduct_1 = __importDefault(__webpack_require__(/*! ./changeTextProduct */ "./js/lamps/helps/changeTextProduct.ts"));
//= addTotalFindLampOnPage 
const addTotalFindLampOnPage = (total) => {
    try {
        console.log('%c addTotalFindLampOnPage >>>', 'color: white; background: green', total);
        const productsElement = document.querySelector('#products');
        if (productsElement && total) {
            const word = (0, changeTextProduct_1.default)(total);
            productsElement.textContent = `Найдено ${total} ${word}`;
        }
        else if (total === 0 && productsElement) {
            productsElement.textContent = `Найдено 0 товаров`;
        }
    }
    catch (error) {
        console.log('Error in fnc addTotalFindLampOnPage >>> ', error);
    }
};
exports["default"] = addTotalFindLampOnPage;


/***/ }),

/***/ "./js/lamps/helps/caunter.ts":
/*!***********************************!*\
  !*** ./js/lamps/helps/caunter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
let total = 0;
const caunter = (comand) => {
    if (comand === 'zero') {
        total = 0;
        return total;
    }
    total++;
    return total;
};
exports["default"] = caunter;


/***/ }),

/***/ "./js/lamps/helps/changeTextProduct.ts":
/*!*********************************************!*\
  !*** ./js/lamps/helps/changeTextProduct.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


//* в зависимосити от числа вернет товар/товара/товаров
Object.defineProperty(exports, "__esModule", ({ value: true }));
//= changeTextProduct 
const changeTextProduct = (num) => {
    try {
        const letter = lastLetter(num, -1);
        if (num !== 11 && letter === '1') {
            return 'товар';
        }
        else if (letter && ['2', '3', '4'].includes(letter) && checkNumber(num)) { //hhh
            return 'товара';
        }
        else {
            return 'товаров';
        }
    }
    catch (error) {
        console.log('Error in Function changeTextProduct >>> ', error);
    }
};
exports["default"] = changeTextProduct;
function checkNumber(num) {
    if (typeof num === 'number' && num > 11) {
        const preNumber = lastLetter(num, -2);
        const lastNumber = lastLetter(num, -1);
        const whole = preNumber && lastNumber ? preNumber + lastNumber : '';
        if (!['12', '13', '14'].includes(whole)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}
//= lastLetter 
// возврат последний цыфры в виде строки
function lastLetter(num, pref) {
    if (typeof num === 'number') {
        const numToString = '' + num;
        const lastLetter = numToString.at(pref);
        return lastLetter;
    }
    else {
        return undefined;
    }
}


/***/ }),

/***/ "./js/lamps/helps/createLampElement.ts":
/*!*********************************************!*\
  !*** ./js/lamps/helps/createLampElement.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const caunter_1 = __importDefault(__webpack_require__(/*! ./caunter */ "./js/lamps/helps/caunter.ts"));
const createButtonStillLamps_1 = __importDefault(__webpack_require__(/*! ../lampModules/createButtonStillLamps */ "./js/lamps/lampModules/createButtonStillLamps.ts"));
const data_start_1 = __webpack_require__(/*! ../../data-start */ "./js/data-start.ts");
const showElementNotProduct_1 = __importDefault(__webpack_require__(/*! ../lampModules/showElementNotProduct */ "./js/lamps/lampModules/showElementNotProduct.ts"));
const showImg_1 = __webpack_require__(/*! ../lampModules/showImg */ "./js/lamps/lampModules/showImg.ts");
//= createLampElement 
const createLampElement = (currentArrLamps, startNumberElement, finishNumberElement) => {
    console.log('Добавить >>> ', currentArrLamps);
    const lampsBlock = document.querySelector('#box-for-lamp');
    const path = window.location.pathname;
    if (currentArrLamps.length < 13) {
        (0, createButtonStillLamps_1.default)('delete');
    }
    if (currentArrLamps.length === 0) {
        (0, showElementNotProduct_1.default)('show');
    }
    else {
        (0, showElementNotProduct_1.default)('hidden');
    }
    for (let i = startNumberElement; i < finishNumberElement; i++) {
        let obj = currentArrLamps[i];
        console.log('', obj);
        if (obj) {
            pathLamps(path, lampsBlock, data_start_1.priceUP, obj);
        }
        else {
            (0, createButtonStillLamps_1.default)('delete');
            (0, caunter_1.default)('zero');
            break;
        }
    }
};
exports["default"] = createLampElement;
//: добавление карточки товара в зависимости от страницы на которой находится клиент 
function pathLamps(path, body, priceUP, obj) {
    const componentsLamp = {
        '/lamps-panel.html': (element) => {
            element.insertAdjacentHTML('beforeend', `
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>
                        <div class="text-lamp"><span>Мощность</span>: ${obj.wats}W</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}mm</div>
                        <div class="text-lamp"><span>Врезное отверстие</span>: ${obj.diameterCut}mm</div>
                        <div class="text-lamp"><span>Цвет свечения</span>: ${obj.colorLightK}K</div>
                        <div class="text-lamp"><span>Световой поток</span>: ${obj.lightStream}Lm</div>
                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-trek.html': (element) => {
            element.insertAdjacentHTML('beforeend', `
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>

                        <div class="text-lamp"><span>Мощность</span>: ${obj.wats}</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}</div>
                        <div class="text-lamp"><span>Вращение</span>: ${obj.rotation}</div>
                        <div class="text-lamp"><span>Патрон</span>: ${obj.patron}</div>
                        <div class="text-lamp"><span>Материал</span>: ${obj.material}</div>

                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-lustre.html': (element) => {
            element.insertAdjacentHTML('beforeend', `
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>
                        <div class="text-lamp"><span>Цвет</span>: ${obj.color}</div>
                        <div class="text-lamp"><span>Размер плафона</span>: ${obj.diameter}mm</div>
                        <div class="text-lamp"><span>Размер основания</span>: ${obj.diameterCut}mm</div>
                        <div class="text-lamp"><span>Патрон</span>: ${obj.patron}</div>
                        <div class="text-lamp"><span>Материал</span>: ${obj.material}</div>
                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-dot.html': (element) => {
            element.insertAdjacentHTML('beforeend', `
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>

                        <div class="text-lamp"><span>Цвет</span>: ${obj.color}</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}</div>
                        <div class="text-lamp"><span>Врезное отверстие</span>: ${obj.diameterCut}</div>
                        <div class="text-lamp"><span>Цоколь</span>: ${obj.patron}</div>
                        <div class="text-lamp"><span>Цвет подсветки</span>: ${obj.colorLightK}</div>

                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-light.html': (element) => {
            element.insertAdjacentHTML('beforeend', `
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>
                        <div class="text-lamp"><span>Серия</span>: ${obj.material}</div>
                        <div class="text-lamp"><span>Мощность</span>: ${obj.wats}</div>
                        <div class="text-lamp"><span>Световой поток</span>: ${obj.lightStream}</div>
                        <div class="text-lamp"><span>Цвет свечения</span>: ${obj.colorLightK}</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}</div>
                        <div class="text-lamp"><span>Пульт</span>: ${obj.patron}</div>
                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        }
    };
    const element = document.createElement('div');
    element.classList.add('cart-lamp');
    const functionComponentsLamp = componentsLamp[path];
    if (functionComponentsLamp) {
        functionComponentsLamp(element);
        (0, showImg_1.addEventListenerForElement)(element);
        body.append(element);
    }
}


/***/ }),

/***/ "./js/lamps/helps/proxy.ts":
/*!*********************************!*\
  !*** ./js/lamps/helps/proxy.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.proxy = void 0;
const deleteLamps_1 = __importDefault(__webpack_require__(/*! ../lampModules/deleteLamps */ "./js/lamps/lampModules/deleteLamps.ts"));
const createButtonStillLamps_1 = __importDefault(__webpack_require__(/*! ../lampModules/createButtonStillLamps */ "./js/lamps/lampModules/createButtonStillLamps.ts"));
const create_1 = __importDefault(__webpack_require__(/*! ../lampModules/create */ "./js/lamps/lampModules/create.ts"));
const mainObjectLamps = {
    lamps: []
};
exports.proxy = new Proxy(mainObjectLamps, {
    set: (target, prop, value) => {
        if (prop === 'lamps' && Array.isArray(value)) {
            (0, deleteLamps_1.default)();
            console.log('%c proxy >>>', 'color: white; background: green', value.length);
            if (value.length < 13) {
                (0, createButtonStillLamps_1.default)('delete');
            }
            (0, create_1.default)(value);
            target[prop] = value;
            return true;
        }
        return false;
    }
});


/***/ }),

/***/ "./js/lamps/lampModules/addFilterLamps.ts":
/*!************************************************!*\
  !*** ./js/lamps/lampModules/addFilterLamps.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const addBlockFilter_1 = __importDefault(__webpack_require__(/*! ../helps/addBlockFilter */ "./js/lamps/helps/addBlockFilter.ts"));
//= const addFilterLamps
const addFilterLamps = (currentArrLamps, typeLamps) => {
    try {
        // блок в который будут добавлены фильтры 
        const blockForFilters = document.querySelector('#block-for-filters');
        switch (typeLamps) {
            case 'panels':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'colorLightK', 'Цвет свечения', 'K');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'wats', 'Мощность', 'W');
                break;
            case 'trek':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'color', 'Цвет', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'patron', 'Патрон', '');
                break;
            case 'lustre':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'material', 'Материал', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'patron', 'Патрон', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'color', 'Цвет', '');
                break;
            case 'dot':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'patron', 'Цоколь', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'color', 'Цвет', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'colorLightK', 'Подсветка Led', '');
                break;
            case 'light':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'colorLightK', 'Цвет свечения', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'patron', 'Пульт', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'wats', 'Мощность', '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'material', 'Серия', '');
                break;
            default:
                break;
        }
    }
    catch (error) {
        console.log('Error in functions addFilterLamps >>> ', error);
    }
};
// добавление новой сортировки по выбранному полю
// body - куда вставим фильтры
// arrayObjectLamps - массив с обьектами светильников для сортировки
// keySort - ключ по которому будет сортировка
// title - заголовок для блока с фильтрами
// unit - единицы измирения, например 80 W
function addNewSortForLamps(body, arrayObjectLamps, keySort, title, unit) {
    const arrValues = searchFilters(arrayObjectLamps, keySort);
    (0, addBlockFilter_1.default)(body, arrValues, title, unit, keySort);
}
//= function searchFilters
// поиск в массиве обьектов со светильниками по значению и формирование и сортировка массива строк
function searchFilters(arrForFilters, key) {
    const arrValue = [];
    arrForFilters.forEach(lamp => {
        if (key && typeof lamp[key] !== 'undefined') {
            const isMatch = arrValue.includes(lamp[key]);
            if (!isMatch) {
                arrValue.push(lamp[key]);
            }
        }
    });
    const sortArr = arrValue.sort((x, y) => {
        return parseInt(x) - parseInt(y);
    });
    return sortArr;
}
exports["default"] = addFilterLamps;


/***/ }),

/***/ "./js/lamps/lampModules/create.ts":
/*!****************************************!*\
  !*** ./js/lamps/lampModules/create.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const createLampElement_1 = __importDefault(__webpack_require__(/*! ../helps/createLampElement */ "./js/lamps/helps/createLampElement.ts"));
const data_start_1 = __webpack_require__(/*! ../../data-start */ "./js/data-start.ts");
const addLamps_1 = __importDefault(__webpack_require__(/*! ../helps/addLamps */ "./js/lamps/helps/addLamps.ts"));
const deleteLamps_1 = __importDefault(__webpack_require__(/*! ./deleteLamps */ "./js/lamps/lampModules/deleteLamps.ts"));
const createButtonStillLamps_1 = __importDefault(__webpack_require__(/*! ./createButtonStillLamps */ "./js/lamps/lampModules/createButtonStillLamps.ts"));
const addTotalFindLampOnPage_1 = __importDefault(__webpack_require__(/*! ../helps/addTotalFindLampOnPage */ "./js/lamps/helps/addTotalFindLampOnPage.ts"));
const showImg_1 = __importDefault(__webpack_require__(/*! ./showImg */ "./js/lamps/lampModules/showImg.ts"));
//= create
const create = (arrLamps) => {
    try {
        console.log('%c create >>>', 'color: white; background: green', arrLamps.length);
        console.log('', arrLamps);
        (0, deleteLamps_1.default)();
        (0, addTotalFindLampOnPage_1.default)(arrLamps.length);
        (0, createLampElement_1.default)(arrLamps, 0, data_start_1.elementsOnPage);
        if (arrLamps.length > 12) {
            (0, createButtonStillLamps_1.default)('create');
            const addButton = document.querySelector('#button-add-lamps');
            addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', listener);
        }
        else {
            (0, createButtonStillLamps_1.default)('delete');
        }
        function listener() {
            (0, addLamps_1.default)(arrLamps, data_start_1.elementsOnPage);
        }
        //* показ изображения лампы во весь экран
        (0, showImg_1.default)();
    }
    catch (error) {
        console.log('Error in function create >>> ', error);
    }
};
exports["default"] = create;


/***/ }),

/***/ "./js/lamps/lampModules/createButtonStillLamps.ts":
/*!********************************************************!*\
  !*** ./js/lamps/lampModules/createButtonStillLamps.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


//* создание кнопки показать еще 
Object.defineProperty(exports, "__esModule", ({ value: true }));
const createButtonStillLamps = (command) => {
    const numberLampsBody = document.querySelector('#body-for-button-still-lamps');
    if (command === 'create') {
        const button = document.querySelector('#button-add-lamps');
        if (!button) {
            numberLampsBody === null || numberLampsBody === void 0 ? void 0 : numberLampsBody.insertAdjacentHTML('beforeend', `
                <div id="button-add-lamps" class="number-lamps__add">показать еще</div>
            `);
        }
    }
    if (command === 'delete') {
        numberLampsBody.innerHTML = '';
    }
};
exports["default"] = createButtonStillLamps;


/***/ }),

/***/ "./js/lamps/lampModules/deleteLamps.ts":
/*!*********************************************!*\
  !*** ./js/lamps/lampModules/deleteLamps.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


//: удаление ламп со страницы 
Object.defineProperty(exports, "__esModule", ({ value: true }));
const deleteLamps = () => {
    try {
        const lampsBlock = document.querySelector('#box-for-lamp');
        lampsBlock.innerHTML = '';
        console.log('delete lamps');
    }
    catch (error) {
        console.log(error);
    }
};
exports["default"] = deleteLamps;


/***/ }),

/***/ "./js/lamps/lampModules/filterLamps.ts":
/*!*********************************************!*\
  !*** ./js/lamps/lampModules/filterLamps.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
//: фильтрация светильников на сайте
const proxy_1 = __webpack_require__(/*! ../helps/proxy */ "./js/lamps/helps/proxy.ts");
const create_1 = __importDefault(__webpack_require__(/*! ./create */ "./js/lamps/lampModules/create.ts"));
const data_start_1 = __webpack_require__(/*! ../../data-start */ "./js/data-start.ts");
//= filterLamps
const filterLamps = (currentArrLamps) => {
    try {
        const formFilter = document.querySelector('#form-filter');
        const buttonResetFilter = document.querySelector('#button-reset-filter');
        buttonResetFilter.addEventListener('click', () => {
            formFilter.reset();
            (0, create_1.default)(currentArrLamps);
        });
        formFilter.addEventListener('input', () => {
            const checkboxAll = document.querySelectorAll('.filter-checkbox__input');
            //* массив уникальных ключей по которым фильтруем светильники
            let arrKey = [];
            //* получение всех уникальных ключей
            checkboxAll.forEach(item => {
                const name = item.name;
                const isMatchKey = arrKey.includes(name);
                if (item.checked && !isMatchKey) {
                    arrKey.push(name);
                }
            });
            //* обьект для дальнейшей фильтрации типа {key: [value], key: [value]}
            let objectFilter = {};
            //* создание обьекта с ключами в которыз значения пустые массивы для дальнейшего заполнения значениями
            arrKey.forEach(key => {
                objectFilter[key] = [];
            });
            //* заполнение ключей значениями
            checkboxAll.forEach(item => {
                if (item.checked) {
                    const name = item.name;
                    objectFilter[name].push(item.value);
                }
            });
            //* фильтрация по всем checkbox
            const resalt = currentArrLamps.filter(lamp => {
                const length = Object.keys(objectFilter).length;
                let totalMatch = 0;
                for (let key in objectFilter) {
                    const isMatch = objectFilter[key].includes(lamp[key]);
                    if (isMatch) {
                        totalMatch++;
                    }
                }
                if (totalMatch === length) {
                    return lamp;
                }
            });
            //* фильтрация по цене
            const form = document.querySelector('#form-filter');
            const from = +form.from.value;
            const until = +form.until.value === 0 ? Infinity : +form.until.value;
            // from / until числа от и до 
            //* resaltPrice - массив с отфильтрованными обьектами по цене и по checkbox
            const resaltPrice = resalt.filter(lamp => {
                if (from <= +lamp.price * data_start_1.priceUP && +lamp.price * data_start_1.priceUP <= until) {
                    return lamp;
                }
            });
            proxy_1.proxy.lamps = resaltPrice;
            return resaltPrice;
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports["default"] = filterLamps;


/***/ }),

/***/ "./js/lamps/lampModules/showElementNotProduct.ts":
/*!*******************************************************!*\
  !*** ./js/lamps/lampModules/showElementNotProduct.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const showElementNotProduct = (comand) => {
    try {
        const notProductBlock = document.querySelector('#not-product-block');
        if (comand === 'show') {
            notProductBlock.classList.add('show');
        }
        if (comand === 'hidden') {
            notProductBlock.classList.remove('show');
        }
    }
    catch (error) {
        console.log('Error in Function showElementNotProduct >>> ', error);
    }
};
exports["default"] = showElementNotProduct;


/***/ }),

/***/ "./js/lamps/lampModules/showImg.ts":
/*!*****************************************!*\
  !*** ./js/lamps/lampModules/showImg.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


//: показ изображения лампы во весь экран 
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addEventListenerForElement = void 0;
//= showImg 
const showImg = () => {
    try {
        const showLampsLightbox = document.querySelector('.show-lamps-lightbox');
        const body = document.body;
        // если лайтбокс сушествует вешаем слушатель на крестик, для его закрытия
        if (showLampsLightbox) {
            const cross = showLampsLightbox.querySelector('.show-lamps-lightbox__close');
            cross.addEventListener('click', () => {
                showLampsLightbox.classList.remove('active-show-lamps-lightbox');
                body.style.overflow = 'auto';
            });
        }
    }
    catch (error) {
        console.log('Error in Function showImg >>> ', error);
    }
};
//* fnc добавляет слушатель для каждого переданного element
function addEventListenerForElement(element) {
    const showLampsLightbox = document.querySelector('.show-lamps-lightbox');
    const lightboxImg = showLampsLightbox.querySelector('#lightbox__img');
    const body = document.body;
    element.addEventListener('click', () => {
        const img = element.querySelector('img');
        const src = img ? img === null || img === void 0 ? void 0 : img.getAttribute('src') : '';
        lightboxImg.setAttribute('src', src);
        showLampsLightbox.classList.add('active-show-lamps-lightbox');
        body.style.overflow = 'hidden';
    });
}
exports.addEventListenerForElement = addEventListenerForElement;
exports["default"] = showImg;


/***/ }),

/***/ "./js/lamps/lampModules/startLamps.ts":
/*!********************************************!*\
  !*** ./js/lamps/lampModules/startLamps.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
//: начало - добавление светильников на сайт
const panels_1 = __webpack_require__(/*! ../../../ajax/panels */ "./ajax/panels.ts");
const lustre_light_1 = __webpack_require__(/*! ../../../ajax/lustre-light */ "./ajax/lustre-light.ts");
const lustre_dot_1 = __webpack_require__(/*! ../../../ajax/lustre-dot */ "./ajax/lustre-dot.ts");
const addFilterLamps_1 = __importDefault(__webpack_require__(/*! ./addFilterLamps */ "./js/lamps/lampModules/addFilterLamps.ts"));
const filterLamps_1 = __importDefault(__webpack_require__(/*! ./filterLamps */ "./js/lamps/lampModules/filterLamps.ts"));
const create_1 = __importDefault(__webpack_require__(/*! ./create */ "./js/lamps/lampModules/create.ts"));
const toggleActivityFitter_1 = __importDefault(__webpack_require__(/*! ./toggleActivityFitter */ "./js/lamps/lampModules/toggleActivityFitter.ts"));
//= lamps 
const lamps = () => {
    try {
        const lampsBlock = document.querySelector('#box-for-lamp');
        if (lampsBlock) {
            const typeLamps = lampsBlock.dataset.lamp;
            // значение приходящее из [ data-lamp=" тут получаемое значение " ]
            let currentArrLamps = [];
            // установка текушего массива для страницы
            switch (typeLamps) {
                case 'panels':
                    currentArrLamps = panels_1.panels;
                    break;
                case 'trek':
                    currentArrLamps = panels_1.trek;
                    break;
                case 'lustre':
                    currentArrLamps = panels_1.lustre;
                    break;
                case 'dot':
                    currentArrLamps = lustre_dot_1.lustreDot;
                    break;
                case 'light':
                    currentArrLamps = lustre_light_1.light;
                    break;
                default:
                    currentArrLamps = [];
                    break;
            }
            (0, create_1.default)(currentArrLamps);
            //* обработчик кнопкок активности фильтра
            (0, toggleActivityFitter_1.default)();
            //* добавляем элементы фильтрации
            (0, addFilterLamps_1.default)(currentArrLamps, typeLamps);
            //* метод фильтрации
            (0, filterLamps_1.default)(currentArrLamps);
        }
    }
    catch (error) {
        console.log('Error in function lamps >>> ', error);
    }
};
exports["default"] = lamps;


/***/ }),

/***/ "./js/lamps/lampModules/toggleActivityFitter.ts":
/*!******************************************************!*\
  !*** ./js/lamps/lampModules/toggleActivityFitter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const toggleActivityFitter = () => {
    try {
        const filterToggle = document.querySelector('#filter-toggle');
        const filterLampsElement = document.querySelector('#filter-lamps-element');
        const filterCloseElement = document.querySelector('.filter-lamps__close-boby');
        const body = document.body;
        filterToggle === null || filterToggle === void 0 ? void 0 : filterToggle.addEventListener('click', () => {
            filterLampsElement === null || filterLampsElement === void 0 ? void 0 : filterLampsElement.classList.add('active-filter');
        });
        filterCloseElement === null || filterCloseElement === void 0 ? void 0 : filterCloseElement.addEventListener('click', () => {
            filterLampsElement === null || filterLampsElement === void 0 ? void 0 : filterLampsElement.classList.remove('active-filter');
        });
    }
    catch (error) {
        console.log('Error in function toggleActivityFitter >>> ', error);
    }
};
exports["default"] = toggleActivityFitter;


/***/ }),

/***/ "./js/modules/animation_praise.ts":
/*!****************************************!*\
  !*** ./js/modules/animation_praise.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//= анимацыя элементов на странице цены  
function animationPraise() {
    try {
        animationIconPic();
        animationImg();
    }
    catch (error) {
        console.log('', error);
    }
}
exports["default"] = animationPraise;
function animationIconPic() {
    const buildPracePicAll = document.querySelectorAll('.build-prace__pic');
    let time = 0;
    const animPicObserver = new IntersectionObserver((entryAll, observer) => {
        entryAll.forEach(e => {
            if (e.isIntersecting) {
                let eTarget = e.target;
                time += 100;
                setTimeout(function () {
                    eTarget.classList.add('anime-pic');
                }, time);
                observer.unobserve(eTarget);
            }
        });
    }, {
        rootMargin: '-40px 0px -10% 0px',
        threshold: [1],
    });
    buildPracePicAll.forEach(item => {
        animPicObserver.observe(item);
    });
}
;
function animationImg() {
    const capTypeImgAll = document.querySelectorAll('.cap-type__img');
    const imgObserver = new IntersectionObserver((itemAll, itemObserver) => {
        itemAll.forEach(item => {
            if (item.isIntersecting) {
                item.target.classList.add('scale-in-ver-center');
                itemObserver.unobserve(item.target);
            }
        });
    }, {
        rootMargin: '0px 0px -15% 0px',
        threshold: [1],
    });
    capTypeImgAll.forEach(item => {
        imgObserver.observe(item);
    });
}
;


/***/ }),

/***/ "./js/modules/questions.ts":
/*!*********************************!*\
  !*** ./js/modules/questions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function questions() {
    try {
        const boxQuestions = document.querySelector('.box-questions');
        if (boxQuestions) {
            const arrQuestions = [
                { question: 'Как заказать натяжной потолок?', answer: 'Оставить заявку на сайте или позвонить по номеру +375 (29) 522-22-82.' },
                { question: 'Что необходимо для расчета стоимости монтажа натяжного потолка?', answer: 'Необходимо знать площадь помещения,  его длину и ширину (хотя бы примерно), а так же количество светильников.' },
                { question: 'Как осуществляется расчет за выполненную работу по монтажу натяжного потолка?', answer: 'Расчет осуществляется после монтажа натяжного потолка и полной приемки заказчиком.' },
                { question: 'На какую высоту опустится натяжной потолок?', answer: 'Минимальный отпуск натяжного потолка относительно чернового составляет 5 см. Также следует учитывать высоту конструкций для монтажа люстры и светильников, а также тип и состояние стен. Окончательный вердикт сможет дать мастер, выполняющий замер.' },
                { question: 'Как ухаживать за натяжным потолком?', answer: 'Для ухода за натяжным потолком подходят жидкие моющие средства без красителей на спиртовой основе, например средства для мытья окон. Протирать рекомендуется мягкой салфеткой из микрофибры.' },
                { question: 'Что устанавливать раньше: шкаф-купе или натяжной потолок?', answer: 'Технологически желательно сразу установить шкаф-купе, предусмотрев в нем сверху фальш-панель, к которой впоследствии будет прикреплен профиль натяжного потолка.<br>Однако возможна установка шкафа-купе и после монтажа натяжного потолка. В данном случае необходимо сообщить мастеру о планируемом месте будущего шкафа-купе и тогда над натяжным потолком будет установлена закладная к которой и будет произведен монтаж шкафа.' },
                { question: 'На каком этапе ремонта установить натяжной потолок?', answer: 'В идеале натяжной потолок следует устанавливать, когда закончены все работы, связанные с пылью, и стены подготовлены под покраску или оклейку обоями.' },
                { question: 'Имеет ли потолок запах и как долго он выветривается?', answer: 'Как любой новый предмет, находящийся в помещении, натяжной потолок непосредственно после монтажа может иметь запах, который, как правило, выветривается в течение нескольких дней.' },
                { question: 'Будут ли на натяжном потолке швы?', answer: 'На сегодняшний день без швов возможно установить натяжной потолок шириной до шести метров. Отличным выходом в случае ширины помещения более 6 метров станет двухуровневый потолок.' },
                { question: 'Что делать, если затопили сверху?', answer: 'В критических случаях основной объем воды можно удалить самостоятельно. Но лучше сразу обратиться к специалистам, в любом случае после удаления воды потолок рекомендуется просушить тепловой пушкой.' },
                { question: 'Какие светильники подойдут для натяжного потолка?', answer: 'Для установки с натяжным потолком не существует каких-либо ограничений для встраиваемых светильников - подойдет большинство.' },
                { question: 'В какие сроки может быть установлен натяжной потолок и сколько времени займет его монтаж?', answer: 'По желанию заказчика потолок может быть установлен на следующий после замера день. Время монтажа зависит от специфических особенностей заказа: количества светильников, труб, углов, материала стен, наличия в помещении мебели. Как правило, монтаж натяжного потолка в комнате 10 м.кв. с одной люстрой (светильником) занимает порядка четырех часов.' },
                { question: 'Чего боятся натяжные потолки?', answer: 'Не следует касаться полотна натяжного потолка острыми предметами, существует опасность его проколоть. В случае воздействия высоких температур(от +70 <sup>о</sup>С) потолок может расплавиться (даже от неправильно подобранной лампочки накаливания). В случае отрицательных температур(ниже -10 <sup>о</sup>С) полотно натяжного потолка становится хрупким и подверженным растрескиванию при механическом воздействии.' },
                { question: 'Какой срок эксплуатации натяжного потолка?', answer: 'Гарантия на монтажные работы составляет один год, на применяемые полотна производитель дает гарантию 25 лет. На практике большую роль играет именно профессионализм монтажа и качество комплектующих, что соответственно влияет и на цену работ.' },
                { question: 'Может ли осесть пыль на потолке?', answer: 'Натяжной потолок обладает антистатичным покрытием, поэтому пыль на нем не оседает.' },
                { question: 'Можно ли установить на потолок какие-либо навесные спортивные снаряды?', answer: 'В натяжной потолок можно монтировать любые тяжёлые конструкции, путем предварительного монтажа соответствующих закладных.' },
                { question: 'Может ли появляться конденсат между натяжным и обычным потолком?', answer: 'Все это исключено, так как температура полотна точно такая же, как и в комнате. Нет резких перепадов, поэтому конденсат отсутствует.' },
                { question: 'Как необходимо подготовить помещение перед приездом монтажников?', answer: 'Комнату, где будет производиться монтаж натяжного потолка, рекомендуется максимально освободить от мебели, полы желательно закрыть картоном. Если такой возможности нет, то как минимум изолировать (накрыть) предметы, у которых существует вероятность повреждения высокой температурой, и создать доступ к стенам помещения.' }
            ];
            //* fn вставки кода с вопросами
            function insertQuestionHtml() {
                arrQuestions.forEach(item => {
                    boxQuestions.insertAdjacentHTML('beforeend', `
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
            insertQuestionHtml();
            const questionsTitleAll = boxQuestions.querySelectorAll('.questions__title');
            function allClose() {
                const bodyAll = document.querySelectorAll('.questions__body');
                bodyAll.forEach(item => {
                    const info = item.querySelector('.questions__info');
                    const text = item.querySelector('.questions__text');
                    const title = item.querySelector('.questions__title');
                    info.style.height = '0px';
                    text.style.opacity = '0%';
                    item.classList.remove('_questions-white');
                    title.classList.remove('_questions-text');
                });
            }
            questionsTitleAll.forEach(item => {
                item.addEventListener('click', (event) => {
                    console.log(event.target);
                    if (event.target instanceof HTMLDivElement || event.target instanceof HTMLSpanElement) {
                        allClose();
                        const parent = event.target.closest('.questions__body');
                        const title = parent.querySelector('.questions__title');
                        const info = parent.querySelector('.questions__info');
                        const text = parent.querySelector('.questions__text');
                        function close() {
                            info.style.height = '0px';
                            text.style.opacity = '0%';
                        }
                        if (getComputedStyle(info).height === '0px') {
                            let hi = text.offsetHeight;
                            info.style.height = hi + 'px';
                            setTimeout(() => {
                                text.style.opacity = '100%';
                            }, 100);
                            parent.classList.add('_questions-white');
                            title.classList.add('_questions-text');
                        }
                        else {
                            close();
                            parent.classList.remove('_questions-white');
                            title.classList.remove('_questions-text');
                        }
                    }
                });
            });
        }
    }
    catch (error) {
        console.log('', error);
    }
}
exports["default"] = questions;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _modules_animation_praise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/animation_praise */ "./js/modules/animation_praise.ts");
/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/questions */ "./js/modules/questions.ts");
/* harmony import */ var _lamps_lampModules_startLamps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lamps/lampModules/startLamps */ "./js/lamps/lampModules/startLamps.ts");
/* harmony import */ var _lamps_lampModules_startLamps__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lamps_lampModules_startLamps__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_start__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-start */ "./js/data-start.ts");

















window.addEventListener('DOMContentLoaded', () => {
    
    (0,_modules_menu_nav__WEBPACK_IMPORTED_MODULE_0__["default"])({
        cursUsd: _data_start__WEBPACK_IMPORTED_MODULE_13__.cursUsd, 
        workPrace: _data_start__WEBPACK_IMPORTED_MODULE_13__.workPrace,
        lightPrace: _data_start__WEBPACK_IMPORTED_MODULE_13__.lightPrace,
        perimeterPrace: _data_start__WEBPACK_IMPORTED_MODULE_13__.perimeterPrace,
    });
    (0,_modules_gallery__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_calc_index__WEBPACK_IMPORTED_MODULE_3__["default"])({
        cursUsd: _data_start__WEBPACK_IMPORTED_MODULE_13__.cursUsd,
        workPrace: _data_start__WEBPACK_IMPORTED_MODULE_13__.workPrace,
        lightPrace: _data_start__WEBPACK_IMPORTED_MODULE_13__.lightPrace,
        perimeterPrace: _data_start__WEBPACK_IMPORTED_MODULE_13__.perimeterPrace,
    });
    (0,_modules_calc_m2__WEBPACK_IMPORTED_MODULE_4__["default"])({
        cursUsd: _data_start__WEBPACK_IMPORTED_MODULE_13__.cursUsd, 
        works: _data_start__WEBPACK_IMPORTED_MODULE_13__.workPrace, 
        pracePerimetr: _data_start__WEBPACK_IMPORTED_MODULE_13__.perimeterPrace,
    });
    (0,_modules_ruler_movement__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_phone_input_index__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_email_index__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_modules_youtube__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_modules_icon_observer__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_modules_animation_praise__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_modules_questions__WEBPACK_IMPORTED_MODULE_11__["default"])();
    _lamps_lampModules_startLamps__WEBPACK_IMPORTED_MODULE_12___default()();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map