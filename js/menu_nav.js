window.addEventListener('DOMContentLoaded', () => {
    //=   меню   
    (function menu () {
        //variables
        const menu = document.querySelector('.menu');
        const burgerSquare = document.querySelector('.burger__square');
        const  menuList = document.querySelector('.menu__list');
        const  menuLineAll = menuList.querySelectorAll('.menu__line');
        const  menuLine = menuList.querySelector('.menu__line');
        const  burgerSpan = document.querySelector('.burger__span');
        
        //body-open menu
        burgerSquare.addEventListener('click', () => {
            let time = 0.3;
            menuLineAll.forEach(item => {
                item.style.transition = `all ${time}s ease`;
                item.classList.toggle('active');
                time += 0.1;
            });
            burgerSpan.classList.toggle('active-burger');
        });

        //body-fix menu
        let positionMenu = menu.getBoundingClientRect().top;
        window.addEventListener('scroll', (e) => {
            if(window.scrollY  >= positionMenu) {
                menu.classList.add('menu__fix');
            }else{
                menu.classList.remove('menu__fix');
            }
        });
        
    }());
//end
});