window.addEventListener('DOMContentLoaded', () => {
    (function galleryAdd () {
        const galleryPop = document.querySelector('.gallery-pop');
        const galleryBody = document.querySelector('.gallery__body');
        const popUpRow = document.querySelector('.gallery-pop__row');
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

                galleryPop.style.display = 'flex';
                // добавляем в PopUp
                popUpRow.append(imgLeft);
                popUpRow.append(img);
                popUpRow.append(imgRight);
            });
        }

        openPopUp();

        function closePopUp () {
            buttonClose.addEventListener('click', () => {
                galleryPop.style.display = 'none';
                popUpRow.innerHTML = '';
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

        function rightButton () {
            buttonRight.addEventListener('click', () => {
                popUpRow.style.left ='-200%';
                centerNumber++;
                let img = document.createElement('img');
                img.classList.add('gallery-pop__img');
                img.setAttribute('src', arrSrc[checkNumber(centerNumber, 1)]);
                popUpRow.append(img);
                let divDel = popUpRow.firstElementChild;
                console.log('',divDel);
                setTimeout(function () {
                    popUpRow.append(img);
                    popUpRow.style.left ='-100%';
                    divDel.remove();
                }, 700);
            });
        }
        rightButton();

    }());
//end
});