import fetchCheckAndRefreshToken from "./helps/fetchCheckAndRefreshToken";
import processRespons from "./helps/processRespons";
import getManagement from "./service/getManagement";

import { IOptions, Respons, Link, IResManagement } from "./helps/interface";



const options = async () => {
    try {
        // console.log('%c start fnc options ', 'background: blue;color: white;');

        const refreshToken: string | null = localStorage.getItem('refreshToken');
        const path: string = window.location.pathname;

        if(path !== '/admin-options.html') return;

        if(!refreshToken) return window.location.href = '/admin-best.html';
        
        const formOptions: HTMLFormElement | null = document.querySelector('form[name="options"]');
        const inputUsd: HTMLInputElement = formOptions?.usd;
        const checkbox: HTMLInputElement = formOptions?.ads;
        
        if(formOptions) {
            formOptions.addEventListener('submit', submitOptions);
        }

        //* получение данных для формы и установка значений 
        const management: IResManagement | void = await getManagement();
        console.log(management);
        if(management) {
            inputUsd.value = management.cursUsd;
            checkbox.checked = management.isShowBaner === 'true' ? true : false;
        }

        //* отправка данных с формы 
        async function submitOptions(event: Event) {
            event.preventDefault();
            
            const curs: string = formOptions?.usd?.value.replace(',', '.');
            const isWorkAds: boolean = formOptions?.ads?.checked;
            
            if(curs && isWorkAds !== undefined) {
                const bodyOptions: IOptions = {
                    isShowBaner: isWorkAds,
                    cursUsd: +curs
                };

                const url: Link = Link.Management;
                const options: RequestInit = {
                    method: 'POST',
                    headers: {
                        'Authorization': localStorage.getItem('accessToken') ?? '',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bodyOptions),
                    "mode":"cors"
                }

                fetchCheckAndRefreshToken(url, options)
                .then(res => res?.json())
                .then((res: Respons) => processRespons(res))
                .catch(error => console.log(error));
            }

        }

    }catch (error) {
        console.log('Error in Function options >>> ', error);
    }
}

export default options;