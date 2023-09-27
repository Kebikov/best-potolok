//: показ изображения лампы во весь экран 


//= showImg 
const showImg = () => {
    try {
        const showLampsLightbox = document.querySelector('.show-lamps-lightbox') as HTMLDivElement;
        const body = document.body;
        // если лайтбокс сушествует вешаем слушатель на крестик, для его закрытия
        if(showLampsLightbox) {
            const cross = showLampsLightbox.querySelector('.show-lamps-lightbox__close') as HTMLDivElement;
            cross.addEventListener('click', () => {
                showLampsLightbox.classList.remove('active-show-lamps-lightbox');
                body.style.overflow = 'auto';
            });
        }

    }catch (error) {
        console.log('Error in Function showImg >>> ', error);
    }
}


//* fnc добавляет слушатель для каждого переданного element
export function addEventListenerForElement(element: HTMLDivElement) {

    const showLampsLightbox = document.querySelector('.show-lamps-lightbox') as HTMLDivElement;
    const lightboxImg = showLampsLightbox.querySelector('#lightbox__img') as HTMLImageElement;
    const body = document.body;

    element.addEventListener('click', () => {
        const img = element.querySelector('img');
        const src: string = img ? img?.getAttribute('src') as string : '';
        lightboxImg.setAttribute('src', src);
        showLampsLightbox.classList.add('active-show-lamps-lightbox');
        body.style.overflow = 'hidden';
    });

}

export default showImg;