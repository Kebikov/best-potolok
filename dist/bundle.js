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
    const buildPracePicAll = document.querySelectorAll('.build-prace__pic');
    if(buildPracePicAll) {
        (function animationIconPic () {
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
    const calculationIndex = document.querySelector('.calculation-index');
    if(calculationIndex) {
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
function menuNav ({cursUsd, workPrace, lightPrace, perimeterPrace}) {
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
//= ввод телефона и его проверка на главной 
function phoneInputIndex () {
    const praceMondeyTel = document.querySelector('.prace-mondey__tel');
    if(praceMondeyTel) {
        (function phoneInput () {
            const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
            function symbolPlus (number, symbol) {
                if(praceMondeyTelInput.value.length === number) {
                    praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0,number - 1) + symbol + praceMondeyTelInput.value[number - 1];
                }
            }
            praceMondeyTelInput.addEventListener('click', (e) => {
                praceMondeyTelInput.value = '+375';
                praceMondeyTelInput.addEventListener('input', () => {
                    if(praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === '(' || praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === ')' || praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === '-') {
                        praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0, praceMondeyTelInput.value.length - 1);
                    }else {
                        if(praceMondeyTelInput.value.length < 4) {
                            praceMondeyTelInput.value = '+375';
                        }
                        symbolPlus(5, '(');
                        symbolPlus(8, ')');
                        symbolPlus(12, '-');
                        symbolPlus(15, '-');
                        if(praceMondeyTelInput.value.length > 16) {
                            praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0,17);
                        }
                        if(/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)){
                            praceMondeyTel.style.boxShadow = '0px 0px 2px 2px rgba(22, 255, 138, 0.663) inset';
                        }else {
                            praceMondeyTel.style.boxShadow = '0px 0px 3px 3px rgba(255, 22, 22, 0.9) inset';
                        }
                    }
                    // проверка телефона в конце
                    if(praceMondeyTelInput.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)) {
                        if(praceMondeyTel.classList.contains('grey')) {
                            praceMondeyTel.classList.remove('grey');
                            praceMondeyTel.classList.add('green');
                        }
                    }else {
                        if(praceMondeyTel.classList.contains('green')) {
                            praceMondeyTel.classList.remove('green');
                            praceMondeyTel.classList.add('grey');
                        }
                    }
                });
            });
        }());
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
function popUpFn () {
    //= popup блок  
    const orderCall = document.querySelector('.order-call');
    if(orderCall){
        //* всплытие popup   
        (function popup () {
            const orderCall = document.querySelector('.order-call');
            const openAll = document.querySelectorAll('[data-popup="open"]');
            const title = orderCall.querySelector('.order-call__title');
            //open
            openAll.forEach(item => {
                item.addEventListener('click', () => {
                    orderCall.style.display = 'flex';
                    if(item.hasAttribute('data-name-button')) {
                        title.textContent = item.getAttribute('data-name-button');
                    }
                });
            });
            //close
            orderCall.addEventListener('click', (e) => {
                if(e.target.closest('.order-call__x')) {
                    orderCall.style.display = 'none';
                }
            });
            
        }());
        //* проверка телефона и трубка зеленая/серая   
        (function phoneInput () {
            const inputTel = document.querySelector('.order-call__tel');
            const divInputTel = document.querySelector('.order-call__tel-div');
            function symbolPlus (number, symbol) {
                if(inputTel.value.length === number) {
                    inputTel.value = inputTel.value.slice(0,number - 1) + symbol + inputTel.value[number - 1];
                }
            }
            inputTel.addEventListener('click', () => {
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
                            inputTel.style.border = '#28b352 2px solid';
                        }else {
                            inputTel.style.border = '#ec3c3c 2px solid';
                        }
                    }
                    // проверка телефона в конце
                    if(inputTel.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value)) {
                        if(divInputTel.classList.contains('_grey')) {
                            divInputTel.classList.remove('_grey');
                            divInputTel.classList.add('_green');
                        }
                    }else {
                        if(divInputTel.classList.contains('_green')) {
                            divInputTel.classList.remove('_green');
                            divInputTel.classList.add('_grey');
                        }
                    }
                });
            });
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
    let videos = document.querySelectorAll('.video');
    if(videos) {
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












window.addEventListener('DOMContentLoaded', () => {
    let cursUsd = 2.6;//курс доллара
    let perimeterPrace = 1;//цена в usd за метр периметра
    let lightPrace = 1;//цена в usd за одну световую точку
    let workPrace = 15;//цена в byn за метр кв. работы

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
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map