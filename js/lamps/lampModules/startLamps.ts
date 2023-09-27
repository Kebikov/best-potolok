//: начало - добавление светильников на сайт
import { panels, Led, trek, lustre } from "../../../ajax/panels";
import { light } from "../../../ajax/lustre-light";
import { lustreDot } from "../../../ajax/lustre-dot";
import addFilterLamps from "./addFilterLamps";
import filterLamps from "./filterLamps";
import create from "./create";
import toggleActivityFitter from "./toggleActivityFitter";


//= lamps 
const lamps = ():void => {
    
    try {

        const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;

        if(lampsBlock) {
            const typeLamps: string | undefined = lampsBlock.dataset.lamp;
            // значение приходящее из [ data-lamp=" тут получаемое значение " ]

            let currentArrLamps: Array<Led> = [];

            // установка текушего массива для страницы
            switch(typeLamps) {
                case 'panels':
                    currentArrLamps = panels;
                    break;
                case 'trek':
                    currentArrLamps = trek;
                    break;
                case 'lustre':
                    currentArrLamps = lustre;
                    break;
                case 'dot':
                    currentArrLamps = lustreDot;
                    break;
                case 'light':
                    currentArrLamps = light;
                    break;
                default:
                    currentArrLamps = [];
                    break;
            }

            create(currentArrLamps);

            //* обработчик кнопкок активности фильтра
            toggleActivityFitter();
            //* добавляем элементы фильтрации
            addFilterLamps(currentArrLamps, typeLamps);
            //* метод фильтрации
            filterLamps(currentArrLamps);
        }
    } catch (error) {
        console.log('Error in function lamps >>> ', error);
    }
}



export default lamps;