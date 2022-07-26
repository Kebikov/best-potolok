window.addEventListener('DOMContentLoaded', () => {
    //= отправка на почту   
    (function emailIndex () {
        const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
        const  form = document.forms.actionCall;
        const  praceMondeyButton = document.querySelector('.prace-mondey__button');
        const animeMeil = document.querySelector('.anime-meil');
        const bodyDis = document.body;
        praceMondeyButton.addEventListener('click', (e) => {
            e.preventDefault;
            if(praceMondeyTelInput.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)) {
                let formData = new FormData(form);
                bodyDis.style.overflow = 'hidden';
                animeMeil.style.display = 'block';
                fetch('mail.php', {
                    method: 'POST',
                    body: formData
                })
                .then(data => {
                    if(data.status === 200) {
                        bodyDis.style.overflow = 'auto';
                        animeMeil.style.display = 'none';
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