//= движение иконок соц.сетей при появлении 
export default function iconGo () {
    try {
        const iconsBox = document.querySelector('.all-contacts__icons');
        let time = 0;
        const iconObserver = new IntersectionObserver((elAll, observMy) => {
            elAll.forEach(item => {
                if(item.isIntersecting) {
                    let target = item.target;
                    time = time + 350;
                    setTimeout(function (){
                        target.classList.add('roll-in-right');
                        observMy.unobserve(target);
                    }, time);
                }
            });
        },{
            threshold:[1],
            rootMargin: '-40px 0px -10% 0px',
        });

        const allIcons = iconsBox.querySelectorAll('img');
        allIcons.forEach(item => iconObserver.observe(item));
        } catch (error) {
            console.log('',error);
        }
}

