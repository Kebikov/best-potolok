window.addEventListener('DOMContentLoaded', () => {

//=   счёт м2   
(function calcM2 () {
    const praceMondeyInput = document.querySelector('.prace-mondey__input');
    const  praceMondeyByn = document.querySelector('.prace-mondey__byn');
    praceMondeyInput.addEventListener('input', () => {
        let num = praceMondeyInput.value;
        if(num.length > 3) praceMondeyInput.value = num.slice(0,3);
        praceMondeyByn.innerHTML = `${num * 15}<span> РУБ.</span>`;
    });
}());

//конец страницы
});




