window.addEventListener('DOMContentLoaded', () => {
//= калькулятор index   
(function calcIndex () {
    const selectSoffitTypeSelectAll = document.querySelectorAll('.select-soffit-type__select');

    selectSoffitTypeSelectAll.forEach(select => {
        select.addEventListener('click', selectClick);
    });

    let lineAll;
    let selectText;
    function selectClick (e) {
        let selectTarget = e.target.closest('.select-soffit-type__select').nextElementSibling;
        let typeSelect = e.target.closest('.select-soffit-type__select');
        selectText = typeSelect.querySelector('.select-soffit-type__select-text');
        lineAll = selectTarget.querySelectorAll('.select-soffit-type__line');
        lineAll.forEach(line => {
            line.addEventListener('click', lineClick);
            line.classList.remove('line-none');
        });
    }
    function lineClick (e) {
        selectText.textContent = e.target.textContent;
        lineAll.forEach(line => {
            line.classList.add('line-none');
            line.removeEventListener('click', lineClick);
        });
    }
}());
//end
});