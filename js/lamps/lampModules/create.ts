import createLampElement from "../helps/createLampElement";
import { elementsOnPage } from "../../data-start";
import { Led } from "../../../ajax/panels";
import addLamps from "../helps/addLamps";
import deleteLamps from "./deleteLamps";
import createButtonStillLamps from "./createButtonStillLamps";
import { ComandButtonLamp } from "./createButtonStillLamps";
import addTotalFindLampOnPage from "../helps/addTotalFindLampOnPage";
import showImg from "./showImg";


//= create
const create = (arrLamps: Array<Led>) => {
    try {

        deleteLamps();
        addTotalFindLampOnPage(arrLamps.length);
        createLampElement(arrLamps, 0, elementsOnPage);
        
        createButtonStillLamps(ComandButtonLamp.Delete);
        if(arrLamps.length  > 12) {
            createButtonStillLamps(ComandButtonLamp.Create);

            const addButton = document.querySelector('#button-add-lamps') as HTMLDListElement;

            addButton?.addEventListener('click', listener);
        }else{
            createButtonStillLamps(ComandButtonLamp.Delete);
        }
        
        function listener() {
            addLamps(arrLamps, elementsOnPage);
        }
        //* показ изображения лампы во весь экран
        showImg();
    } catch (error) {
        console.log('Error in function create >>> ', error);
    }
}

export default create;