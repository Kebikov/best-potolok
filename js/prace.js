window.addEventListener('DOMContentLoaded', () => {
    (function animationIconPic () {
        const buildPracePicAll = document.querySelectorAll('.build-prace__pic');
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
    
//end
});