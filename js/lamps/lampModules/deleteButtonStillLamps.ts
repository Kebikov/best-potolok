const deleteButtonStillLamps = () => {
    try {
        const addButton = document.querySelector('#button-add-lamps') as HTMLDListElement;
        addButton?.remove();
    } catch (error) {
        console.log('Error in deleteButtonStillLamps >>> ', error);
    }
} 

export default deleteButtonStillLamps;