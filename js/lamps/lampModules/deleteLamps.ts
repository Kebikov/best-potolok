//: удаление ламп со страницы 


const deleteLamps = () => {
    try {
        const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;
        lampsBlock.innerHTML = '';
    } catch (error) {
        console.log(error);
    }
}

export default deleteLamps;