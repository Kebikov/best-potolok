//: создание элементов ламп на странице 
import { Led } from "../../../ajax/panels";
import caunter from "./caunter";
import deleteButtonStillLamps from "../lampModules/deleteButtonStillLamps";

const createLampElement = (currentArrLamps: Array<Led>, startNumberElement: number, finishNumberElement: number) => {
    
    const priceUP = 1.1;

    const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;
    const addButton = document.querySelector('#button-add-lamps') as HTMLDListElement;

    if(currentArrLamps.length < 13) {
        deleteButtonStillLamps();
    }
    
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
            deleteButtonStillLamps();
            caunter('zero');
            break;
        }

    }

}

export default createLampElement;