// добавление ламп на страницу по количеству равному elementsOnPage
import { Led } from "../../../ajax/panels";
import { elementsOnPage } from "../../data-start";
import createLampElement from "./createLampElement";
import caunter from "./caunter";


//= addLamps 
const addLamps = (currentArrLamps: Array<Led>, elementsOnPage: number) => {
    let start: number = caunter('plus-one') * elementsOnPage;
    let finish: number = start + elementsOnPage;
    createLampElement(currentArrLamps, start, finish);
}

export default addLamps;