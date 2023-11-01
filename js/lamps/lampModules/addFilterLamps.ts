// добавление элементов фильтрации на сайт
import { panels, Led, LedKey, trek } from "../../../ajax/panels";
import addBlockFilter from "../helps/addBlockFilter";
import watsFilter from "../helps/watsFilter";
import { TypeLamps } from "./startLamps";



//= const addFilterLamps
const addFilterLamps = (currentArrLamps: Array<Led>, typeLamps: TypeLamps) => {
    try {
        

        switch(typeLamps) {
            case 'panels':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(currentArrLamps, 'colorLightK', 'Цвет свечения',  'K');
                addNewSortForLamps(currentArrLamps, 'wats', 'Мощность',  'W');
            break;

            case 'trek':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(currentArrLamps, 'color', 'Цвет',  '');
                addNewSortForLamps(currentArrLamps, 'patron', 'Патрон',  '');
            break;

                
            case 'lustre':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(currentArrLamps, 'material', 'Материал',  '');
                addNewSortForLamps(currentArrLamps, 'patron', 'Патрон',  '');
                addNewSortForLamps(currentArrLamps, 'color', 'Цвет',  '');
            break;

            case 'dot':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(currentArrLamps, 'patron', 'Цоколь',  '');
                addNewSortForLamps(currentArrLamps, 'color', 'Цвет',  '');
                addNewSortForLamps(currentArrLamps, 'colorLightK', 'Подсветка Led',  '');
            break;

            case 'light':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(currentArrLamps, 'colorLightK', 'Цвет свечения',  '');
                addNewSortForLamps(currentArrLamps, 'patron', 'Пульт',  '');
                watsFilter('Мощность');
                addNewSortForLamps(currentArrLamps, 'material', 'Серия',  '');
            break;

            case 'spot':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(currentArrLamps, 'material', 'Материал',  '');
                addNewSortForLamps(currentArrLamps, 'rotation', 'Вращение',  '');
                addNewSortForLamps(currentArrLamps, 'patron', 'Патрон',  '');
                addNewSortForLamps(currentArrLamps, 'color', 'Цвет',  '');
            break;
                
            default:
                break;
        }

    } catch (error) {
        console.log('Error in functions addFilterLamps >>> ', error);
    }
}

// добавление новой сортировки по выбранному полю
// arrayObjectLamps - массив с обьектами светильников для сортировки
// keySort - ключ по которому будет сортировка
// title - заголовок для блока с фильтрами
// unit - единицы измирения, например 80 W
function addNewSortForLamps(arrayObjectLamps: Array<Led>, keySort: LedKey, title: string, unit: string) {

    const arrValues = searchFilters(arrayObjectLamps, keySort);
    addBlockFilter(arrValues, title, unit, keySort);
}


//= function searchFilters
// поиск в массиве обьектов со светильниками по значению и формирование и сортировка массива строк
function searchFilters(arrForFilters: Array<Led>, key: LedKey): Array<string>{

    const arrValue: Array<string> = [];

    arrForFilters.forEach(lamp => {

        if(key && typeof lamp[key] !== 'undefined') {

            const isMatch: boolean = arrValue.includes(lamp[key] as string);

            if(!isMatch) {
                arrValue.push(lamp[key] as string);
            }

        }
    });

    const sortArr = arrValue.sort((x,y) => {
        return parseInt(x) - parseInt(y); 
    });

    return sortArr;
}



export default addFilterLamps;