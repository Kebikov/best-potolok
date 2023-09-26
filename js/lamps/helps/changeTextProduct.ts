//* в зависимосити от числа вернет товар/товара/товаров
 
type AtNumber = -1 | -2;

//= changeTextProduct 
const changeTextProduct = (num: number): string | undefined => {
    try {

        const letter: string | undefined = lastLetter(num, -1);

        if(num !== 11 && letter === '1') {
                return 'товар';
        }else if(letter &&  ['2','3','4'].includes(letter) && checkNumber(num)) {//hhh
            return 'товара';
        }else{
            return 'товаров';
        }

    } catch (error) {
        console.log('Error in Function changeTextProduct >>> ', error);
    }
}

export default changeTextProduct;



function checkNumber(num: number): boolean {
    if(typeof num === 'number' && num > 11) {

        const preNumber: string | undefined = lastLetter(num, -2);
        const lastNumber: string | undefined = lastLetter(num, -1);

        const whole: string = preNumber && lastNumber ? preNumber + lastNumber : '';

        if(!['12','13','14'].includes(whole)) {
            return true;
        }else{
            return false;
        }

    }else{
        return true;
    }

}


//= lastLetter 
// возврат последний цыфры в виде строки
function lastLetter(num: number, pref: AtNumber): string | undefined {
    if(typeof num === 'number') {
        const numToString: string = '' + num;
        const lastLetter: string | undefined = numToString.at(pref);
        return lastLetter;
    }else{
        return undefined;
    }
}


