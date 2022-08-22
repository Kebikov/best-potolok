//= анимацыя элементов на странице цены  
export default function animationPraise () {
    const buildPracePicAll = document.querySelectorAll('.build-prace__pic');
    if(buildPracePicAll) {
        (function animationIconPic () {
            let time = 0;
            const animPicObserver = new IntersectionObserver((entryAll, observer) => {
                entryAll.forEach(e => {
                    if(e.isIntersecting) {
                        let eTarget = e.target;
                        time += 100; 
                        setTimeout(function () {
                            eTarget.classList.add('anime-pic');
                        }, time);
                        observer.unobserve(eTarget);
                    }
                });
            },{
                rootMargin: '-40px 0px -10% 0px',
                threshold:[1],
            });

            buildPracePicAll.forEach(item => {
                animPicObserver.observe(item);
            });
        }());

        (function animationImg () {
            const capTypeImgAll = document.querySelectorAll('.cap-type__img');
            const imgObserver = new IntersectionObserver((itemAll, itemObserver) => {
                itemAll.forEach(item => {
                    if(item.isIntersecting) {
                        item.target.classList.add('scale-in-ver-center');
                        itemObserver.unobserve(item.target);
                    }
                });
            },{
                rootMargin: '0px 0px -15% 0px',
                threshold: [1],
            });

            capTypeImgAll.forEach(item => {
                imgObserver.observe(item);
            });
        }());
    }
}

    