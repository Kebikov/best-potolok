//= ввод телефона   
window.addEventListener('DOMContentLoaded', () => {

(function phoneInput () {
    const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
    const praceMondeyTel = document.querySelector('.prace-mondey__tel');
    function symbolPlus (number, symbol) {
        if(praceMondeyTelInput.value.length === number) {
            praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0,number - 1) + symbol + praceMondeyTelInput.value[number - 1];
        }
    }
    praceMondeyTelInput.addEventListener('click', () => {
        praceMondeyTelInput.value = '+375';
        praceMondeyTelInput.addEventListener('input', () => {
            if(praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === '(' || praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === ')' || praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === '-') {
                praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0, praceMondeyTelInput.value.length - 1);
            }else {
                if(praceMondeyTelInput.value.length < 4) {
                    praceMondeyTelInput.value = '+375';
                }
                symbolPlus(5, '(');
                symbolPlus(8, ')');
                symbolPlus(12, '-');
                symbolPlus(15, '-');
                if(praceMondeyTelInput.value.length > 16) {
                    praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0,17);
                }
                if(/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)){
                    praceMondeyTel.style.boxShadow = '0px 0px 2px 2px rgba(22, 255, 138, 0.663) inset';
                }else {
                    praceMondeyTel.style.boxShadow = '0px 0px 3px 3px rgba(255, 22, 22, 0.9) inset';
                }
            }
            // проверка телефона в конце
            if(praceMondeyTelInput.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)) {
                if(praceMondeyTel.classList.contains('grey')) {
                    praceMondeyTel.classList.remove('grey');
                    praceMondeyTel.classList.add('green');
                }
            }else {
                if(praceMondeyTel.classList.contains('green')) {
                    praceMondeyTel.classList.remove('green');
                    praceMondeyTel.classList.add('grey');
                }
            }
        });
    });
}());
//end
});