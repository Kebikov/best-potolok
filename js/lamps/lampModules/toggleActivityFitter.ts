const toggleActivityFitter = () => {
    try {
        const filterToggle = document.querySelector('#filter-toggle') as HTMLDivElement;
        const filterLampsElement = document.querySelector('#filter-lamps-element') as HTMLDivElement;
        const filterCloseElement = document.querySelector('.filter-lamps__close-boby') as HTMLDivElement;
        const body = document.body;

        filterToggle?.addEventListener('click', () => {
            filterLampsElement?.classList.add('active-filter');
        });

        filterCloseElement?.addEventListener('click', () => {
            filterLampsElement?.classList.remove('active-filter');
        });

    } catch (error) {
        console.log('Error in function toggleActivityFitter >>> ', error);
    }
}

export default toggleActivityFitter;