//: создание элементов ламп на странице 
import { Led } from "../../../ajax/panels";
import caunter from "./caunter";
import createButtonStillLamps from "../lampModules/createButtonStillLamps";
import { priceUP } from "../data/data";
import showElementNotProduct from "../lampModules/showElementNotProduct";
import { addEventListenerForElement } from "../lampModules/showImg";

const createLampElement = (currentArrLamps: Array<Led>, startNumberElement: number, finishNumberElement: number) => {

    const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;
    const path = window.location.pathname;

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
function pathLamps(path: string, body: HTMLDivElement, priceUP: number,obj: Led) {
    //* /lamps-panel.html
    if(path === '/lamps-panel.html') {
        const element = document.createElement('div') as HTMLDivElement;
        element.classList.add('cart-lamp');

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

        addEventListenerForElement(element);
        body.append(element);
    }
    
    //* /lamps-panel.html
    if(path === '/lamps-trek.html') {
        const element = document.createElement('div') as HTMLDivElement;
        element.classList.add('cart-lamp');

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

        addEventListenerForElement(element);
        body.append(element);
    }

    //* /lamps-lustre.html
    if(path === '/lamps-lustre.html') {
        const element = document.createElement('div') as HTMLDivElement;
        element.classList.add('cart-lamp');

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

        addEventListenerForElement(element);
        body.append(element);
    }

    //* /lamps-dot.html
    if(path === '/lamps-dot.html') {
        const element = document.createElement('div') as HTMLDivElement;
        element.classList.add('cart-lamp');

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

        addEventListenerForElement(element);
        
        body.append(element);
    }

}