window.addEventListener('DOMContentLoaded', () => {
    (function galleryAdd () {
        const galleryPop = document.querySelector('.gallery-pop');
        const galleryBody = document.querySelector('.gallery__body');
        const popUpBody = document.querySelector('.gallery-pop__body');
        const buttonRight = document.querySelector('.gallery-pop__right');
        const buttonLeft = document.querySelector('.gallery-pop__left');
        const buttonClose = document.querySelector('.gallery-pop__x');
        const arrSrc = [];
        let centerNumber;
        let step = 0;

        function allImgSrc () {
            const arrImg = galleryBody.querySelectorAll('img');
            arrImg.forEach(item => {
                arrSrc.push(item.getAttribute('src'));
            });
        }

        allImgSrc();

        function openPopUp () {
            galleryBody.addEventListener('click', (e) => {
                let target = e.target;
                let src = target.getAttribute('src');
                centerNumber = searchInArrSrc(src);
                console.log('',centerNumber);
                // создаем
                let imgLeft = document.createElement('img');
                let img = document.createElement('img');
                let imgRight = document.createElement('img');
                // добавляем класс
                imgLeft.classList.add('gallery-pop__img');
                img.classList.add('gallery-pop__img');
                imgRight.classList.add('gallery-pop__img');
                // добавляем src
                imgLeft.setAttribute('src', arrSrc[checkNumber(centerNumber, -1)]);
                img.setAttribute('src', arrSrc[centerNumber]);
                imgRight.setAttribute('src', arrSrc[checkNumber(centerNumber, 1)]);

                imgLeft.style.left = '-100%';
                img.style.left = '0%';
                imgRight.style.left = '100%';

                galleryPop.style.display = 'flex';
                // добавляем в PopUp
                popUpBody.append(imgLeft);
                popUpBody.append(img);
                popUpBody.append(imgRight);
            });
        }

        openPopUp();

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

        function searchInArrSrc (find) {
            return arrSrc.indexOf(find, 0);
        }

        function checkNumber (num, number) {
            num = num + number;
            if(num < 0) num = arrSrc.length - 1;
            if(num > arrSrc.length - 1) num = 0;
            return num;
        }

        function checkCenterNumber (num) {
            if(num < 0) centerNumber = arrSrc.length - 1;
            if(num > arrSrc.length - 1) centerNumber = 0;
        }

        function rightButton () {
            buttonRight.addEventListener('click', () => {
                centerNumber++;
                checkCenterNumber(centerNumber);
                let img = document.createElement('img');
                img.classList.add('gallery-pop__img');
                img.setAttribute('src', arrSrc[checkNumber(centerNumber, 1)]);
                img.style.left = '200%';
                popUpBody.append(img);

                let imgAllInPopUp = popUpBody.querySelectorAll('.gallery-pop__img');
                let i = -200;
                imgAllInPopUp.forEach(item => {
                    item.style.left = i + '%';
                    i = i + 100;
                });
                let divDel = popUpBody.querySelector('.gallery-pop__img');
                buttonRight.removeEventListener('click', this);
                setTimeout(function () {
                    divDel.remove();
                }, 700);
            });
        }
        rightButton();

    }());
//end
});