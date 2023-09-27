//=   счёт м2(расчет цены в квадратном блоке на главной странице, в зависимости только от м2)   
export default function calcM2Fn ({cursUsd, works, pracePerimetr}) {
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





