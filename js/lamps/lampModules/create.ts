import createLampElement from "../helps/createLampElement";
import { elementsOnPage } from "../data/data";
import { Led } from "../../../ajax/panels";
import addLamps from "../helps/addLamps";
import deleteLamps from "./deleteLamps";
import createButtonStillLamps from "./createButtonStillLamps";
import addTotalFindLampOnPage from "../helps/addTotalFindLampOnPage";


//= create
const create = (arrLamps: Array<Led>) => {
    try {
        //console.log('%c create >>>', 'color: white; background: green', arrLamps.length);
        deleteLamps();
        addTotalFindLampOnPage(arrLamps.length);
        createLampElement(arrLamps, 0, elementsOnPage);

        if(arrLamps.length  > 12) {
            createButtonStillLamps();

            const addButton = document.querySelector('#button-add-lamps') as HTMLDListElement;

            addButton.addEventListener('click', listener);
        }
        
        function listener() {
            addLamps(arrLamps, elementsOnPage);
        }

    } catch (error) {
        console.log('Error in function create >>> ', error);
    }
}

export default create;