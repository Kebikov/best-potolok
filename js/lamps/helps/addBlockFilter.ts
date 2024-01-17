//: add filters

const addBlockFilter = (arrValues: Array<string>, title: string, unit: string, key: string) => {

    //* блок в который будут добавлены фильтры 
    const blockForFilters = document.querySelector('#block-for-filters') as HTMLDivElement;

    const filterBlockElement: HTMLDivElement = document.createElement('div');
    filterBlockElement.classList.add('filter-block');

    const filterTitleElement: HTMLDivElement = document.createElement('div');
    filterTitleElement.classList.add('filter-title');
    filterTitleElement.innerHTML = title;

    filterBlockElement.append(filterTitleElement);

    for(let item of arrValues) {
        filterBlockElement.insertAdjacentHTML('beforeend', `
        <div class="filter-checkbox">
            <input class="filter-checkbox__input" type="checkbox" name="${key}" value="${item}" id="${item}">
            <label class="filter-checkbox__lable" for="${item}" >${item} ${unit}</label>
        </div>
        `);
    }

    if(blockForFilters) blockForFilters.prepend(filterBlockElement);
}

export default addBlockFilter;