window.addEventListener('DOMContentLoaded', () => {
    (function galleryAdd () {
        const galleryPop = document.querySelector('.gallery-pop');
        const galleryBody = document.querySelector('.gallery__body');
        const galleryPopRow = document.querySelector('.gallery-pop__row');
        const galleryPopRight = document.querySelector('.gallery-pop__right');
        let dataImg;
        fetch('./ajax/foto_potolkov.json')
        .then(data => data.json())
        .then(jsonAll => {
            let lengthArrImg = jsonAll.length;
            jsonAll.forEach(item => {
                let newElement = document.createElement('div');
                newElement.classList.add('pic-item');
                newElement.innerHTML = `
                <div class="pic-item__body">
                    <img src="${item.img}" data-img="${item.data}" alt="">
                </div>`;
                galleryBody.append(newElement);
            });
        });
        openPopUp();
        closePopUp ();
        function openPopUp () {
            galleryBody.addEventListener('click', (e) => {
                let targetImg = e.target;
                let srcImg = targetImg.getAttribute('src');
                dataImg = +targetImg.getAttribute('data-img');
                console.log('',dataImg);
                galleryPop.style.display = 'flex';

                galleryPopRow.insertAdjacentHTML('beforeend',`
                <img class="gallery-pop__img" src="img/foto-potolkov/${dataImg - 1}.jpg" alt="">
                <img class="gallery-pop__img" src="img/foto-potolkov/${dataImg}.jpg" alt="">
                <img class="gallery-pop__img" src="img/foto-potolkov/${dataImg + 1}.jpg" alt="">`);
                
                // let w = galleryPopRow.firstElementChild;
                // console.log('',w);
            });

            
        }

        function closePopUp () {
            galleryPop.addEventListener('click', (e) => {
                if(e.target.classList.contains('gallery-pop__x')) {
                    galleryPop.style.display = 'none';
                    galleryPopRow.innerHTML = '';
                }
            });
        }



        galleryPopRight.addEventListener('click', (e) => {
            dataImg++;
            galleryPopRow.style.left = '-200%';
            galleryPopRow.innerHTML = '';
            galleryPopRow.insertAdjacentHTML('beforeend',`
                <img class="gallery-pop__img" src="img/foto-potolkov/${dataImg - 1}.jpg" alt="">
                <img class="gallery-pop__img" src="img/foto-potolkov/${dataImg}.jpg" alt="">
                <img class="gallery-pop__img" src="img/foto-potolkov/${dataImg + 1}.jpg" alt="">`);
        });

    }());
//end
});