export let cursUsd: number = 3.25; //курс доллара

//= расчет стоимости потолка 
export let perimeterPrace: number = 1; //цена в usd за метр периметра
export let lightPrace: number = 1; //цена в usd за одну световую точку
export let workPrace: number = 15; //цена в byn за метр кв. работы

//= для светильников 
export const elementsOnPage: number = 12; // количество ламп на странице при первом показе
export const priceUP: number = 1.1 * cursUsd; // коэфициент на сколько поднять цену относительно базовой(указанной в базе)
