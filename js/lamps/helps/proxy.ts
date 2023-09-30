import deleteLamps from "../lampModules/deleteLamps";
import createButtonStillLamps from "../lampModules/createButtonStillLamps";
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
            deleteLamps();
            //console.log('%c proxy >>>', 'color: white; background: green', value.length);
            if(value.length < 13) {
                createButtonStillLamps('delete');
            }
            create(value);
            target[prop] = value;
            return true;
        }
        return false;
    }
});









