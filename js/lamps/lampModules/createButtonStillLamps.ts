const createButtonStillLamps = () => {
    const numberLampsBody = document.querySelector('#body-for-button-still-lamps') as HTMLDivElement;
    numberLampsBody?.insertAdjacentHTML('beforeend',`
        <div id="button-add-lamps" class="number-lamps__add">показать еще</div>
    `);
}

export default createButtonStillLamps;