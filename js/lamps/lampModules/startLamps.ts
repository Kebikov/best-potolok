//: начало - добавление светильников на сайт
import { panels, Led } from "../../../ajax/panels";
import addFilterLamps from "./addFilterLamps";
import filterLamps from "./filterLamps";
import create from "./create";
import toggleActivityFitter from "./toggleActivityFitter";


//= lamps 
const lamps = ():void => {
    
    try {

        const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;

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

        create(currentArrLamps);

        //* обработчик кнопкок активности фильтра
        toggleActivityFitter();
        //* добавляем элементы фильтрации
        addFilterLamps();
        //* метод фильтрации
        filterLamps(currentArrLamps);

    } catch (error) {
        console.log('Error in function lamps >>> ', error);
    }
}


export default lamps;