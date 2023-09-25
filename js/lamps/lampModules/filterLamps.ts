//: фильтрация светильников на сайте
import { proxy } from '../helps/proxy';
import { type } from "os";
import { Led, LedKey } from "../../../ajax/panels";
import create from './create';


//= filterLamps
const filterLamps = (currentArrLamps: Array<Led>) => {

    type ObjectFilter = {
        [key in LedKey]: Array<string>
    }

    try {

        const formFilter = document.querySelector('#form-filter') as HTMLFormElement;
        const buttonResetFilter = document.querySelector('#button-reset-filter') as HTMLDivElement;

        buttonResetFilter.addEventListener('click', () => {
            formFilter.reset();
            create(currentArrLamps);
        });

        formFilter.addEventListener('input', () => {
            const checkboxAll = document.querySelectorAll('.filter-checkbox__input') as NodeListOf<HTMLInputElement>;
            //* массив уникальных ключей по которым фильтруем светильники
            let arrKey: Array<LedKey> = [];
            //* получение всех уникальных ключей
            checkboxAll.forEach(item => {
                const name = item.name as LedKey;
                const isMatchKey = arrKey.includes(name);
                if(item.checked && !isMatchKey) {
                    arrKey.push(name);
                }
            });
            //* обьект для дальнейшей фильтрации типа {key: [value], key: [value]}
            let objectFilter = {} as ObjectFilter;
            //* создание обьекта с ключами в которыз значения пустые массивы для дальнейшего заполнения значениями
            arrKey.forEach(key => {
                objectFilter[key] = [];
            });
            //* заполнение ключей значениями
            checkboxAll.forEach(item => {
                if(item.checked) {
                    const name = item.name as LedKey;
                    objectFilter[name].push(item.value);
                }
            });
            //* фильтрация по всем checkbox
            const resalt = currentArrLamps.filter(lamp => {
                const length = Object.keys(objectFilter).length;
                let totalMatch = 0;
                for(let key in objectFilter) {
                    const isMatch = objectFilter[key as LedKey].includes(lamp[key as LedKey]);
                    if(isMatch) {
                        totalMatch++;
                    }
                }
                if(totalMatch === length) {
                    return lamp;
                }
            });
            //* фильтрация по цене
            const form = document.querySelector('.filter-price__form') as HTMLFormElement;
            const from: number = +form.from.value;
            const until: number = +form.until.value === 0 ? Infinity : +form.until.value;
            // from / until числа от и до 
            //* resaltPrice - массив с отфильтрованными обьектами по цене и по checkbox
            const resaltPrice = resalt.filter(lamp => {
                if(from <= +lamp.price  && +lamp.price <= until) {
                    return lamp;
                }
            });
            proxy.lamps = resaltPrice;
            return resaltPrice;
        });

    } catch (error) {
        console.log(error);
    }
}

export default filterLamps;







