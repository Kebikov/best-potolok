window.addEventListener('DOMContentLoaded', () => {

//=   счёт м2   
(function calcM2 () {
    const praceMondeyInput = document.querySelector('.prace-mondey__input');
    const  praceMondeyByn = document.querySelector('.prace-mondey__byn');
    const cursUsd = 2.6;
    const works = 15;
    let praceM2;
    let pracePerimetr = 1;
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

//конец страницы
});




