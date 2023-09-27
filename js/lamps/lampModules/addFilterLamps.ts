// добавление элементов фильтрации на сайт
import { panels, Led, LedKey, trek } from "../../../ajax/panels";
import addBlockFilter from "../helps/addBlockFilter";


//= const addFilterLamps
const addFilterLamps = (currentArrLamps: Array<Led>, typeLamps: string | undefined) => {
    try {
            // блок в который будут добавлены фильтры 
        const blockForFilters = document.querySelector('#block-for-filters') as HTMLDivElement;

        switch(typeLamps) {
            case 'panels':
                    // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'colorLightK', 'Цвет свечения',  'K');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'wats', 'Мощность',  'W');
            break;

            case 'trek':
                    // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'color', 'Цвет',  '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'patron', 'Патрон',  '');
            break;

                
            case 'lustre':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'material', 'Материал',  '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'patron', 'Патрон',  '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'color', 'Цвет',  '');
            break;

            case 'dot':
                // добавление новой сортировки по выбранному полю
                addNewSortForLamps(blockForFilters, currentArrLamps, 'patron', 'Цоколь',  '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'color', 'Цвет',  '');
                addNewSortForLamps(blockForFilters, currentArrLamps, 'colorLightK', 'Подсветка Led',  '');
            break;
                
            default:
                break;
        }

    } catch (error) {
        console.log('Error in functions addFilterLamps >>> ', error);
    }
}

// добавление новой сортировки по выбранному полю
// body - куда вставим фильтры
// arrayObjectLamps - массив с обьектами светильников для сортировки
// keySort - ключ по которому будет сортировка
// title - заголовок для блока с фильтрами
// unit - единицы измирения, например 80 W
function addNewSortForLamps(body: HTMLDivElement, arrayObjectLamps: Array<Led>, keySort: LedKey, title: string, unit: string) {
    const arrValues = searchFilters(arrayObjectLamps, keySort);
    addBlockFilter(body , arrValues, title, unit, keySort);
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