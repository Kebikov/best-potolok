window.addEventListener('DOMContentLoaded', () => {
const orderCall = document.querySelector('.order-call');
const orderCallXImg =orderCall.querySelector('.order-call__x img');
const openAll = document.querySelectorAll('[data-popup="open"]');

console.log('',openAll);

orderCall.addEventListener('click', (e) => {
    console.log('',e.target);
    if(e.target.closest('.order-call__x')) {
        orderCall.style.display = 'none';
    }
});

openAll.forEach(item => {
    item.addEventListener('click', () => {
        orderCall.style.display = 'flex';
    });
});


//end
});