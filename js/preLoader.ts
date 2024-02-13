/**
 * Добавление прелоадера при начальной загрузке.
 */
const preLoader = () => {
    try {
        const head = document.querySelector('head');
        const stylesheet = document.querySelector('#stylesheet');
        const page = document.querySelector('#page');

        if(stylesheet instanceof Element && head instanceof HTMLHeadElement && page instanceof HTMLDivElement) {

            head.insertAdjacentHTML('beforeend', stylesheet.innerHTML);

            const linkStylesheet = document.querySelector('#link-stylesheet');

            if(linkStylesheet instanceof Element) {
                linkStylesheet.addEventListener('load', () => {
                    page.style.opacity = '0';
                    setTimeout(() => {
                        page.style.display = 'none';
                    }, 1000);
                });
            }

        } else {
            console.error('Элемент #stylesheet | #page | head');
        }

    }catch (error) {
        console.error('Error in Function "preLoader" >>> ', error);
    }
}

export default preLoader;