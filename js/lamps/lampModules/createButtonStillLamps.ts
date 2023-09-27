//* создание кнопки показать еще 

type StillButton = 'create' | 'delete';

const createButtonStillLamps = (command: StillButton) => {

    const numberLampsBody = document.querySelector('#body-for-button-still-lamps') as HTMLDivElement;

    if(command === 'create') {
        const button = document.querySelector('#button-add-lamps') as HTMLDivElement;
        if(!button) {
            numberLampsBody?.insertAdjacentHTML('beforeend',`
                <div id="button-add-lamps" class="number-lamps__add">показать еще</div>
            `);
        }
    }

    if(command === 'delete') {
        numberLampsBody.innerHTML = '';
    }

}

export default createButtonStillLamps;