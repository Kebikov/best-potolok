//=   меню   
const 
    burgerSquare = document.querySelector('.burger__square'),
    menuList = document.querySelector('.menu__list'),
    menuLine = menuList.querySelectorAll('.menu__line'),
    burgerSpan = document.querySelector('.burger__span');

burgerSquare.addEventListener('click', () => {
    let time = 0.3;
    menuLine.forEach(item => {
        item.style.transition = `all ${time}s ease`;
        item.classList.toggle('active');
        time += 0.1;
    });
    burgerSpan.classList.toggle('active-burger');
});
//=   счёт м2   
const 
    praceMondeyInput = document.querySelector('.prace-mondey__input'),
    praceMondeyByn = document.querySelector('.prace-mondey__byn');

praceMondeyInput.addEventListener('input', () => {
    let num = +praceMondeyInput.value;
    praceMondeyByn.innerHTML = `${num * 15}<span> РУБ.</span>`;
});

//=   ввод телефона   
const 
    praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input'),
    praceMondeyTel = document.querySelector('.prace-mondey__tel');
let 
    telInput;
function symbolPlus (number, symbol) {
    if(telInput.length === number) {
        praceMondeyTelInput.value = telInput.slice(0,number - 1) + symbol + telInput[number - 1];
    }
}

praceMondeyTelInput.addEventListener('click', () => {
    praceMondeyTelInput.value = '+375';
    praceMondeyTelInput.addEventListener('input', () => {
        telInput = praceMondeyTelInput.value;
        if(telInput[telInput.length - 1] === '(' || telInput[telInput.length - 1] === ')' || telInput[telInput.length - 1] === '-') {
            praceMondeyTelInput.value = telInput.slice(0,telInput.length - 1);
        }else {
            if(isNaN(telInput[telInput.length - 1])){
                praceMondeyTel.style.boxShadow = '0px 0px 3px 3px rgba(255, 22, 22, 0.9) inset';
            }else {
                praceMondeyTel.style.boxShadow = '0px 0px 2px 2px rgba(22, 255, 138, 0.663) inset';
            }
            if(telInput.length < 4) {
                praceMondeyTelInput.value = '+375';
            }
            symbolPlus(5, '(');
            symbolPlus(9, ')');
            symbolPlus(13, '-');
            symbolPlus(16, '-');
            symbolPlus(18, '-');
            if(telInput.length > 17) {
                praceMondeyTelInput.value = telInput.slice(0,18);
            }
        }
        // проверка телефона
        let allNum = praceMondeyTelInput.value.match(/\d/g).join('');
        if(allNum.length < 13) {
            if(!praceMondeyTel.classList.contains('grey')) {
                praceMondeyTel.classList.remove('green');
                praceMondeyTel.classList.add('grey');
            }

        }else {
                praceMondeyTel.classList.remove('grey');
                praceMondeyTel.classList.add('green');
        }
    });
});

//= отправка на почту   
let form = document.forms[0];
let button = document.querySelector('.prace-mondey__button');
button.addEventListener('click', (e) => {
    console.log('отправка');
    e.preventDefault;
    let formData = new FormData(form);
    console.log('',formData.get('name'));
    fetch('tel.php', {
        method: 'POST',
        body: JSON.stringify({
            'name': 'Gen',
            'email': 'Google',
            'text': 'text'
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(data => console.log('ответ сервера:',data));
});







