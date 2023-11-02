//: фильтрация светильников на сайте
import { proxy } from '../helps/proxy';
import { Led, LedKey, isLedKey } from "../../../ajax/panels";
import create from './create';
import { priceUP } from '../../data-start';


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
                console.log(name);
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
                if(item.checked && isLedKey(item.name)) {
                    const name = item.name;
                    objectFilter[name].push(item.value);
                }
            });
            //* фильтрация по всем checkbox
            const resalt = currentArrLamps.filter(lamp => {
                const length = Object.keys(objectFilter).length;
                let totalMatch = 0;
                
                for(let key in objectFilter) {
                    if(isLedKey(key)) {
                        let isMatch: boolean = false;
                        //*-1 проверка, поподает ли значение из поля wats в промежуток 
                        if(key === 'wats-segment') {
                            const from: number = +objectFilter[key][0].split('-')[0];
                            const to: number = +objectFilter[key][0].split('-')[1];

                            const str: string | undefined = lamp.wats;
                            // wats - значение сколько ват у данного обьекта lamp, получаем с поля lamp.wats
                            const wats: number | undefined = typeof str !== 'undefined' ? parseInt( str ) : undefined;

                            if(wats !== undefined && from < wats && wats < to) {
                                isMatch = true;
                            }else{
                                isMatch = false;
                            }
                            //*-1 end
                        } else {
                            isMatch = objectFilter[key].includes(lamp[key] as string);
                        }
                        if(isMatch) {
                            totalMatch++;
                        }
                    }
                }

                if(totalMatch === length) {
                    return lamp;
                }

            });

            //* фильтрация по цене
            const form = document.querySelector('#form-filter') as HTMLFormElement;
            const from: number = +form.from.value;
            const until: number = +form.until.value === 0 ? Infinity : +form.until.value;
            // from / until числа от и до 
            
            //* resaltPrice - массив с отфильтрованными обьектами по цене и по checkbox
            const resaltPrice = resalt.filter(lamp => {
                if(lamp.price && from <= +lamp.price * priceUP  && +lamp.price * priceUP <= until) {
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









