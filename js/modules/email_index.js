//= отправка на почту на главной странице 
export default function emailIndexMain () {
    try {
        const praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input');
        if(praceMondeyTelInput) {
            (function emailIndex () {
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
                            console.log('status 1 >>> ', data.status);
                            if(data.status === 200) {
                                bodyDis.style.overflow = 'auto';
                                animeMeil.style.display = 'none';
                                praceMondeyButton.textContent = 'заявка отправлена';
                                praceMondeyTelInput.value = 'Cпасибо за заказ !';
                            }
                        })
                        .catch(error => {
                            console.log('Error Email >>> ', error);
                        });
                    }else {
                        praceMondeyButton.textContent = 'проверьте номер';
                        setTimeout(()=>{
                            praceMondeyButton.textContent = 'заказать по акции';
                        },2000);
                    }
                });
            }());
        }
    } catch (error) {
        console.log('',error);
    }
}

    
