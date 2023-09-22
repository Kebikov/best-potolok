import { panels, Led } from "../../ajax/panels";
import createLampElement from "../helps/createLampElement";

const lamps = ():void => {

    try {
        const elementsOnPage = 12;
        
        const lampsBlock = document.querySelector('.lamps-block__body') as HTMLDivElement;
        const addButton = document.querySelector('.number-lamps__add') as HTMLDListElement;

        const typeLamps: string | undefined = lampsBlock.dataset.lamp;

        let currentArrLamps: Array<Led> = [];

        switch(typeLamps) {
            case 'panels':
                currentArrLamps = panels;
                break;
            default:
                currentArrLamps = [];
                break;
        }

        createLampElement(currentArrLamps, 0, elementsOnPage);

        addButton.addEventListener('click', () => addLamps(currentArrLamps, elementsOnPage));

    } catch (error) {
        console.log('Error in function lamps >>> ', error);
    }
}

function counter() {
    let total: number = 0;
    return (): number => {
        total++;
        return total;
    }
}

const sum: () => number = counter();

function addLamps(currentArrLamps: Array<Led>, elementsOnPage: number) {
    let start: number = sum() * elementsOnPage;
    let finish: number = start + elementsOnPage;
    createLampElement(currentArrLamps, start, finish);
    
}

export default lamps;