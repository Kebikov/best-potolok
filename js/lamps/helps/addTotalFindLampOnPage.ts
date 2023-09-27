//* добавление количества найденых товаров в результате фильтрации в блок визу фильтра 
import changeTextProduct from "./changeTextProduct";


//= addTotalFindLampOnPage 
const addTotalFindLampOnPage = (total: number) => {
    try {
        console.log('%c addTotalFindLampOnPage >>>', 'color: white; background: green', total);
        const productsElement = document.querySelector('#products') as HTMLDivElement;
        if(productsElement && total) {
            const word = changeTextProduct(total);
            productsElement.textContent = `Найдено ${total} ${word}`;
        }else if(total === 0 && productsElement){
            productsElement.textContent = `Найдено 0 товаров`;
        }

    } catch (error) {
        console.log('Error in fnc addTotalFindLampOnPage >>> ', error);
    }
}

export default addTotalFindLampOnPage;