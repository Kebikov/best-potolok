//: начало - добавление светильников на сайт
import { panels, Led, trek, lustre } from "../../../ajax/panels";
import { light } from "../../../ajax/lustre-light";
import { spot } from "../../../ajax/lustre-spot";
import { lustreDot } from "../../../ajax/lustre-dot";
import addFilterLamps from "./addFilterLamps";
import filterLamps from "./filterLamps";
import create from "./create";
import toggleActivityFitter from "./toggleActivityFitter";

const lampsStringArray = ['panels', 'trek', 'lustre', 'dot', 'light', 'spot'] as const;

export type TypeLamps = typeof lampsStringArray[number];
type ObjectLamps = Record<TypeLamps, Array<Led>>;

const isTypeLamps = (str: string): str is TypeLamps => {
    return lampsStringArray.includes(str as TypeLamps);
}


//= lamps 
const lamps = ():void => {
    
    try {

        const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;

        if(lampsBlock) {
            const typeLamps: string | undefined = lampsBlock.dataset.lamp;
            // значение приходящее из [ data-lamp=" тут получаемое значение " ]

            const allLamps: ObjectLamps = {
                panels: panels,
                trek: trek,
                lustre: lustre,
                dot: lustreDot,
                light: light,
                spot: spot
            }

            let currentArrLamps: Array<Led> = [];
            // установка текушего массива для страницы

            //* проверка ключа на соответствие type TypeLamps
            if(typeLamps && isTypeLamps(typeLamps)) {
                currentArrLamps = allLamps[typeLamps];

                addFilterLamps(currentArrLamps, typeLamps);
                // добавляем элементы фильтрации
            }

            create(currentArrLamps);

            //* обработчик кнопкок активности фильтра
            toggleActivityFitter();
            //* метод фильтрации
            filterLamps(currentArrLamps);
        }
    } catch (error) {
        console.log('Error in function lamps >>> ', error);
    }
}



export default lamps;