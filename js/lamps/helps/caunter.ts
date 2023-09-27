//: функция счетчика и его обнуления 
import { type } from "os";

let total: number = 0;

type ComandTotal = 'zero' | 'plus-one';

const caunter = (comand: ComandTotal): number => {
    if(comand === 'zero') {
        total = 0;
        return total;
    }
    total++;
    return total;
}

export default caunter;