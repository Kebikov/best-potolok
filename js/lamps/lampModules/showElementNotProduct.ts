
type Comand = 'show' | 'hidden';

const showElementNotProduct = (comand: Comand) => {
    try {
        const notProductBlock = document.querySelector('#not-product-block') as HTMLDivElement;

        if(comand === 'show') {
            notProductBlock.classList.add('show');
        }

        if(comand === 'hidden') {
            notProductBlock.classList.remove('show');
        }

    }catch (error) {
        console.log('Error in Function showElementNotProduct >>> ', error);
    }
}

export default showElementNotProduct;