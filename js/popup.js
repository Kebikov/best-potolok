//= popup блок  
window.addEventListener('DOMContentLoaded', () => {
    //* всплытие popup   
    (function popup () {
        const orderCall = document.querySelector('.order-call');
        const orderCallXImg =orderCall.querySelector('.order-call__x img');
        const openAll = document.querySelectorAll('[data-popup="open"]');
        orderCall.addEventListener('click', (e) => {
            console.log('',e.target);
            if(e.target.closest('.order-call__x')) {
                orderCall.style.display = 'none';
            }
        });
        openAll.forEach(item => {
            item.addEventListener('click', () => {
                orderCall.style.display = 'flex';
            });
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
    //* отправка на почту   
    (function emaiPopUp () {
        const  form = document.forms.popup;
        const inputTel = document.querySelector('.order-call__tel');
        let button = document.querySelector('.order-call__button');

        button.addEventListener('submit', (e) => {
            e.preventDefault;
            if(inputTel.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value)) {
                let formData = new FormData(form);
                fetch('popup.php', {
                    method: 'POST',
                    body: formData
                })
                .then(data => {
                    if(data.status === 200) {
                        button.textContent = 'заявка отправлена';
                        inputTel.value = 'Cпасибо за заказ !';
                    }
                });
            }else {
                button.textContent = 'проверьте номер';
                setTimeout(()=>{
                    button.textContent = 'заказать по акции';
                },2000);
            }
        });
    }());
//end
});