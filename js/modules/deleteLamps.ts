const deleteLamps = () => {
    try {
        const lampsBlock = document.querySelector('.lamps-block__body') as HTMLDivElement;
        lampsBlock.innerHTML = '';
    } catch (error) {
        console.log(error);
    }
}

export default deleteLamps;