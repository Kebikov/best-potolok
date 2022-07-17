window.addEventListener('DOMContentLoaded', () => {
    //= отправка на почту   
    (function emailIndex () {
        let form = document.forms[0];
        let praceMondeyButton = document.querySelector('.prace-mondey__button');
        praceMondeyButton.addEventListener('click', (e) => {
            e.preventDefault;
            if(praceMondeyTelInput.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)) {
                let formData = new FormData(form);
                fetch('tel.php', {
                    method: 'POST',
                    body: formData
                })
                .then(data => {
                    if(data.status === 200) {
                        praceMondeyButton.textContent = 'заявка отправлена';
                        praceMondeyTelInput.value = 'Cпасибо за заказ !';
                    }
                });
            }else {
                praceMondeyButton.textContent = 'проверьте номер';
                setTimeout(()=>{
                    praceMondeyButton.textContent = 'заказать по акции';
                },2000);
            }
        });
    }());
//end
});