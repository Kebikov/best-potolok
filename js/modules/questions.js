export default function questions () {
    (function questionsBox () {
        const boxQuestions = document.querySelector('.box-questions');
        if(boxQuestions) {
            const questionsTitleAll = boxQuestions.querySelectorAll('.questions__title');
            function allClose () {
                const bodyAll = document.querySelectorAll('.questions__body');
                bodyAll.forEach(item => {
                    const info = item.querySelector('.questions__info');
                    const text = item.querySelector('.questions__text');
                    const title = item.querySelector('.questions__title');

                    info.style.height = '0px';
                    text.style.opacity = 0;
                    item.classList.remove('_questions-white');
                    title.classList.remove('_questions-text');
                });
            }

            questionsTitleAll.forEach(item => {
                item.addEventListener('click', (e) => {
                    allClose();
                    const parent = e.target.closest('.questions__body');
                    const title = parent.querySelector('.questions__title');
                    const info = parent.querySelector('.questions__info');
                    const text = parent.querySelector('.questions__text');
                    function close () {
                        info.style.height = '0px';
                        text.style.opacity = 0; 
                    }

                    if(getComputedStyle(info).height === '0px') {
                        let hi = text.offsetHeight;
                        info.style.height = hi + 'px';
                        setTimeout(() => {
                            text.style.opacity = 1;
                        }, 100);
                        parent.classList.add('_questions-white');
                        title.classList.add('_questions-text');
                        
                    }else {
                        close();
                        parent.classList.remove('_questions-white');
                        title.classList.remove('_questions-text');
                    }
                });
            });
        }
    }());
}