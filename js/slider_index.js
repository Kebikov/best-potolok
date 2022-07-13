window.addEventListener('DOMContentLoaded', () => {

//= slider index   
(function sliderIndex () {
    const fotoWorksBody = document.querySelector('.foto-works__body');
    const boxPic = document.querySelector('.box-pic');
    const body = document.querySelector('body');
    const boxPicPic = boxPic.querySelector('.box-pic__pic');
    const pointsBody = document.querySelector('.points__body');
    let lengthImgFotoPotolkov;
    let srcData;

    function fnPoints () {
        pointsBody.innerHTML = '';
            for(let i = 1; i <= lengthImgFotoPotolkov; i++) {
                if(i === srcData) {
                    let element = document.createElement('div');
                    element.classList.add('points__white');
                    pointsBody.append(element);
                }else{
                    let element = document.createElement('div');
                    element.classList.add('points__dot');
                    pointsBody.append(element);
                }
            }
    }
    //number img potolok
    fetch('../ajax/foto_potolkov.json')
    .then(data => data.json())
    .then(json => {
    lengthImgFotoPotolkov = json.length;
    });

    fotoWorksBody.addEventListener('click', (e) => {
        let target = e.target;
        srcData = +target.querySelector('img').getAttribute('data-img');
        boxPic.style.display = 'block';
        body.style.overflow = 'hidden';
        boxPicPic.setAttribute('src', `/img/foto-potolkov/${srcData}.jpg`);
        //points
        fnPoints();
    });
    boxPic.addEventListener('click', (b) => {
        if(b.target.classList.contains('pic__right')) {
            srcData ++;
            if(srcData > lengthImgFotoPotolkov) srcData = 1;
            boxPicPic.setAttribute('src', `/img/foto-potolkov/${srcData}.jpg`);
        }
        if(b.target.classList.contains('pic__left')) {
            srcData --;
            if(srcData === 0) srcData = lengthImgFotoPotolkov;
            boxPicPic.setAttribute('src', `/img/foto-potolkov/${srcData}.jpg`);
        }
        if(b.target.closest('.box-pic__x')) {
            boxPic.style.display = 'none';
            body.style.overflow = 'auto';
        }
        //points
        fnPoints();
    });

}());

//end
});