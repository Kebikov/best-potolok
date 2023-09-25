import deleteLamps from "../lampModules/deleteLamps";
import deleteButtonStillLamps from "../lampModules/deleteButtonStillLamps";
import { Led } from "../../../ajax/panels";
import { type } from "os";
import create from "../lampModules/create";

type LampsKey = 'lamps';

type Main = {
    [key in LampsKey]:Array<Led>
}

const mainObjectLamps: Main = {
    lamps: []
}

export const proxy: Main = new Proxy(mainObjectLamps, {

    set: (target, prop, value) => {
        if(prop === 'lamps' && Array.isArray(value)) {
            console.log('Объект изменился...');
            deleteLamps();
            console.log('%c proxy >>>', 'color: white; background: green', value.length);
            if(value.length < 13) {
                console.log('delete button',);
                deleteButtonStillLamps();
            }
            create(value);
            target[prop] = value;
            return true;
        }
        return false;
    }
});









