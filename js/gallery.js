window.addEventListener('DOMContentLoaded', () => {
    (function galleryAdd () {
        const galleryPop = document.querySelector('.gallery-pop');
        const galleryBody = document.querySelector('.gallery__body');
        const popUpBody = document.querySelector('.gallery-pop__body');
        const imgBox = document.querySelector('.gallery-pop__img-box');
        const buttonRight = document.querySelector('.gallery-pop__right');
        const buttonLeft = document.querySelector('.gallery-pop__left');
        const buttonClose = document.querySelector('.gallery-pop__x');
        const styleDiv = document.querySelector('style');
        const arrSrc = [];
        const classAddImg = ['gallery-pop__img', '_gap-img'];
        let centerNumber;

        //* fn сбор src в массив 
        function allImgSrc () {
            const arrImg = galleryBody.querySelectorAll('img');
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
        //* fn нажатие вправо
        function rightButton () {
            buttonRight.addEventListener('click', () => {
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
                });
                
                let divDel = imgBox.querySelector('.gallery-pop__img');
                buttonRight.removeEventListener('click', this);
                setTimeout(function () {
                    divDel.remove();
                }, 700);
            });
        }
        rightButton();
        //* fn нажатие влево
        function leftButton () {
            buttonLeft.addEventListener('click', () => {
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
                        item.style.left = i + '%';
                        i = i + 100;
                    });
                });
                let divDel = imgBox.lastElementChild;
                console.log('',divDel);
                buttonLeft.removeEventListener('click', this);
                setTimeout(function () {
                    divDel.remove();
                }, 700);
            });
        }
        leftButton();
        //* пробел между слайдами
        let gap = galleryPop.getAttribute('data-gap');
        
        function gapOpenPopUp () {
            if(window.matchMedia('(min-width: 1021px)').matches){
                styleDiv.innerHTML = `._gap-img {padding-left: ${gap}px; padding-right: ${gap}px;}`;
            }
        }
        
        window.addEventListener('resize', () => {
            if(window.matchMedia('(max-width: 1020px)').matches && window.matchMedia('(min-width: 760px)').matches){
                //console.log('max-1020px & min 760px');
            }
            if(window.matchMedia('(max-width: 768px)').matches){
                //console.log('768px',);
            }
        });

    }());
//end
});