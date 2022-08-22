//= ввод телефона и его проверка на главной 
import checkNumberPhone from './check_number_phone';

export default function phoneInputIndex () {
    const praceMondeyTel = document.querySelector('.prace-mondey__tel');
    if(praceMondeyTel) {
        (function phoneInput () {
            const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
            //* проверка введенного телефона 
            praceMondeyTelInput.addEventListener('click',  () => checkNumberPhone(praceMondeyTelInput, praceMondeyTel, 0, {classOne: 'grey', classTwo: 'green'}));
        }());
    }
}



