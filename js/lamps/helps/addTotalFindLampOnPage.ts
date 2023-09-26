//* добавление количества найденых товаров в результате фильтрации в блок визу фильтра 
import changeTextProduct from "./changeTextProduct";


//= addTotalFindLampOnPage 
const addTotalFindLampOnPage = (total: number) => {
    try {
        const productsElement = document.querySelector('#products') as HTMLDivElement;
        if(productsElement && total) {
            const word = changeTextProduct(total);
            productsElement.textContent = `Найдено ${total} ${word}`;
        }
    } catch (error) {
        console.log('Error in fnc addTotalFindLampOnPage >>> ', error);
    }
}

export default addTotalFindLampOnPage;