const 
    burgerSquare = document.querySelector('.burger__square'),
    menuList = document.querySelector('.menu__list'),
    menuLine = menuList.querySelectorAll('.menu__line'),
    burgerSpan = document.querySelector('.burger__span');

burgerSquare.addEventListener('click', () => {
    let time = 0.3;
    menuLine.forEach(item => {
        item.style.transition = `all ${time}s ease`;
        item.classList.toggle('active');
        time += 0.1;
    });
    burgerSpan.classList.toggle('active-burger');
});

