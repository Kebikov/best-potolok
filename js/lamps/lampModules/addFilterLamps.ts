// добавление элементов фильтрации на сайт
import { panels, Led, LedKey } from "../../../ajax/panels";
import addBlockFilter from "../helps/addBlockFilter";

//= const addFilterLamps
const addFilterLamps = () => {
    try {
        const codeElement = document.querySelector('[data-code]') as HTMLDivElement;
        const typeLamp: string | undefined = codeElement.dataset.code;
        let arrForFilters: Array<Led> = [];

        switch(typeLamp) {
            case 'panels':
                arrForFilters = panels;
                break;
            default:
                arrForFilters = [];
        }

        //добавление новой сортировки по выбранному полю
        const arrColorLightK = searchFilters(arrForFilters, 'colorLightK');
        const arrWats = searchFilters(arrForFilters, 'wats');

        addBlockFilter(codeElement , arrColorLightK, 'Цвет свечения', 'K', 'colorLightK');
        addBlockFilter(codeElement , arrWats, 'Мощность', 'W', 'wats');

    } catch (error) {
        
    }
}

//= function searchFilters
// поиск в массиве обьектов со светильниками по значению и формирование и сортировка массива строк
function searchFilters(arrForFilters: Array<Led>, key: LedKey): Array<string>{

    const arrValue: Array<string> = [];

    arrForFilters.forEach(lamp => {
        const isMatch = arrValue.includes(lamp[key]);
        if(!isMatch) {
            arrValue.push(lamp[key]);
        }
    });

    const sortArr = arrValue.sort((x,y) => {
        return parseInt(x) - parseInt(y); 
    });

    return sortArr;
}



export default addFilterLamps;