const watsFilter = (body: HTMLDivElement, title: string, key: string = 'wats-segment') => {
    try {
        const filterBlockElement: HTMLDivElement = document.createElement('div');
        filterBlockElement.classList.add('filter-block');
    
        const filterTitleElement: HTMLDivElement = document.createElement('div');
        filterTitleElement.classList.add('filter-title');
        filterTitleElement.innerHTML = title;
    
        filterBlockElement.append(filterTitleElement);


        type ObjWats = {
            [ key in 'title' | 'id' ]: string
        }

        type ObjWatsFilter = Array<ObjWats>;

        const objWatsFilter: ObjWatsFilter = [
            {
                title: 'от 0 до 50W',
                id: '0-50'
            },
            {
                title: 'от 50 до 100W',
                id: '50-100'
            },
            {
                title: 'от 100 до 150W',
                id: '100-150'
            },
            {
                title: 'от 100 до 150W',
                id: '100-150'
            },
            {
                title: 'от 200 до 250W',
                id: '200-250'
            },
            {
                title: 'от 250 до 300W',
                id: '250-300'
            }
        ];

        for(let item of objWatsFilter) {
            filterBlockElement.insertAdjacentHTML('beforeend', `
                <div class="filter-checkbox">
                    <input class="filter-checkbox__input" type="checkbox" name="${key}" value="${item.id}" id="${item.id}">
                    <label class="filter-checkbox__lable" for="${item.id}" >${item.title}</label>
                </div>
            `);
        }

        body.prepend(filterBlockElement);
    }catch (error) {
        console.log('Error in Function watsFilter >>> ', error);
    }
}

export default watsFilter;