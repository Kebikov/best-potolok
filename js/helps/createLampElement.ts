import { Led } from "../../ajax/panels";

const createLampElement = (currentArrLamps: Array<Led>, startNumberElement: number, finishNumberElement: number) => {
    const priceUP = 1.1;
    const lampsBlock = document.querySelector('.lamps-block__body') as HTMLDivElement;
    const addButton = document.querySelector('.number-lamps__add') as HTMLDListElement;

    for(let i = startNumberElement; i < finishNumberElement; i++) {

        let obj = currentArrLamps[i];

        if(obj) {
            lampsBlock.insertAdjacentHTML('beforeend',`
                <div class="cart-lamp" >
                    <div class="cart-lamp__body">
                        <div class="cart-lamp__img">
                            <img src="${obj.img}" alt="lamps">
                        </div>
                        <div class="cart-lamp__info">
                            <div class="cart-lamp__title">${obj.title}</div>
                            <div class="cart-lamp__article">Артикул: ${obj.article}</div>
                            <div class="cart-lamp__wat text-lamp">Мощность: ${obj.wats}W</div>
                            <div class="cart-lamp__diameter text-lamp">Размер: ${obj.diameter}mm</div>
                            <div class="cart-lamp__diameterCut text-lamp">Врезное отверстие: ${obj.diameterCut}mm</div>
                            <div class="cart-lamp__colorLightK text-lamp">Цвет свечения: ${obj.colorLightK}K</div>
                            <div class="cart-lamp__lightStream text-lamp">Световой поток: ${obj.lightStream}Lm</div>
                            <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                        </div>
                    </div>
                </div>
            `);
        }else{
            addButton.classList.add('remove')
            break;
        }

    }

}

export default createLampElement;