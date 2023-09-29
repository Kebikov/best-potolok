//: создание элементов ламп на странице 
import { Led } from "../../../ajax/panels";
import caunter from "./caunter";
import createButtonStillLamps from "../lampModules/createButtonStillLamps";
import { priceUP } from "../../data-start";
import showElementNotProduct from "../lampModules/showElementNotProduct";
import { addEventListenerForElement } from "../lampModules/showImg";

type KeyElement = '/lamps-panel.html' | '/lamps-trek.html' | '/lamps-lustre.html' | '/lamps-dot.html' | '/lamps-light.html';


//= createLampElement 
const createLampElement = (currentArrLamps: Array<Led>, startNumberElement: number, finishNumberElement: number) => {
    console.log('Добавить >>> ', currentArrLamps);
    const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;
    const path: KeyElement = window.location.pathname as KeyElement;

    if(currentArrLamps.length < 13) {
        createButtonStillLamps('delete');
    }

    if(currentArrLamps.length === 0) {
        showElementNotProduct('show');
    }else{
        showElementNotProduct('hidden');
    }
    
    for(let i = startNumberElement; i < finishNumberElement; i++) {
        let obj = currentArrLamps[i];
        console.log('',obj);
        if(obj) {
            pathLamps(path, lampsBlock, priceUP, obj);
        }else{
            createButtonStillLamps('delete');
            caunter('zero');
            break;
        }
    }
}

export default createLampElement;


//: добавление карточки товара в зависимости от страницы на которой находится клиент 
function pathLamps(path: KeyElement, body: HTMLDivElement, priceUP: number,obj: Led) {

    type CreateElement = {
        [prop in KeyElement]?: (element: HTMLDivElement) => void
    }

    const componentsLamp: CreateElement = {
        '/lamps-panel.html': (element: HTMLDivElement): void => {
            element.insertAdjacentHTML('beforeend',`
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>
                        <div class="text-lamp"><span>Мощность</span>: ${obj.wats}W</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}mm</div>
                        <div class="text-lamp"><span>Врезное отверстие</span>: ${obj.diameterCut}mm</div>
                        <div class="text-lamp"><span>Цвет свечения</span>: ${obj.colorLightK}K</div>
                        <div class="text-lamp"><span>Световой поток</span>: ${obj.lightStream}Lm</div>
                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-trek.html': (element: HTMLDivElement): void => {
            element.insertAdjacentHTML('beforeend',`
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>

                        <div class="text-lamp"><span>Мощность</span>: ${obj.wats}</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}</div>
                        <div class="text-lamp"><span>Вращение</span>: ${obj.rotation}</div>
                        <div class="text-lamp"><span>Патрон</span>: ${obj.patron}</div>
                        <div class="text-lamp"><span>Материал</span>: ${obj.material}</div>

                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-lustre.html': (element: HTMLDivElement): void => {
            element.insertAdjacentHTML('beforeend',`
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>
                        <div class="text-lamp"><span>Цвет</span>: ${obj.color}</div>
                        <div class="text-lamp"><span>Размер плафона</span>: ${obj.diameter}mm</div>
                        <div class="text-lamp"><span>Размер основания</span>: ${obj.diameterCut}mm</div>
                        <div class="text-lamp"><span>Патрон</span>: ${obj.patron}</div>
                        <div class="text-lamp"><span>Материал</span>: ${obj.material}</div>
                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-dot.html': (element: HTMLDivElement): void => {
            element.insertAdjacentHTML('beforeend',`
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>

                        <div class="text-lamp"><span>Цвет</span>: ${obj.color}</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}</div>
                        <div class="text-lamp"><span>Врезное отверстие</span>: ${obj.diameterCut}</div>
                        <div class="text-lamp"><span>Цоколь</span>: ${obj.patron}</div>
                        <div class="text-lamp"><span>Цвет подсветки</span>: ${obj.colorLightK}</div>

                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        },
        '/lamps-light.html': (element: HTMLDivElement): void => {
            element.insertAdjacentHTML('beforeend',`
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>
                        <div class="text-lamp"><span>Серия</span>: ${obj.material}</div>
                        <div class="text-lamp"><span>Мощность</span>: ${obj.wats}</div>
                        <div class="text-lamp"><span>Световой поток</span>: ${obj.lightStream}</div>
                        <div class="text-lamp"><span>Цвет свечения</span>: ${obj.colorLightK}</div>
                        <div class="text-lamp"><span>Размер</span>: ${obj.diameter}</div>
                        <div class="text-lamp"><span>Пульт</span>: ${obj.patron}</div>
                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            `);
        }
    }

    const element = document.createElement('div') as HTMLDivElement;
    element.classList.add('cart-lamp');

    const functionComponentsLamp = componentsLamp[path];

    if(functionComponentsLamp) {
        functionComponentsLamp(element);
        addEventListenerForElement(element);
        body.append(element);
    }

}