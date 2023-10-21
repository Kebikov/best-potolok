import checkAndRefreshToken from "./helps/checkAndRefreshToken";
import processRespons from "./helps/processRespons";

import { IOptions, Respons } from "./helps/interface";



const options = () => {
    try {

        const access: string | null = localStorage.getItem('access');
        const path: string = window.location.pathname;

        if(path !== '/admin-options.html') return;

        if(!access) return window.location.href = '/admin-best.html';
        
        const formOptions: HTMLFormElement | null = document.querySelector('form[name="options"]');

        if(formOptions) {
            formOptions.addEventListener('submit', submitOptions);
        }

        async function submitOptions(event: Event) {
            event.preventDefault();
            
            const curs: string = formOptions?.usd?.value;
            const isWorkAds: boolean = formOptions?.ads?.checked;

            if(curs && isWorkAds !== undefined) {

                const bodyOptions: IOptions = {
                    isShowBaner: isWorkAds,
                    cursUsd: +curs
                };

                const url: string = 'http://localhost:3000/api/admin/management';
                const options: RequestInit = {
                    method: 'POST',
                    headers: {
                        'Authorization': localStorage.getItem('accessToken') ?? '',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bodyOptions),
                    "mode":"cors"
                }

                checkAndRefreshToken(url, options)
                .then(res => res?.json())
                .then((res: Respons) => processRespons(res))
                .catch(error => console.log(error));
    
            }


        }

    }catch (error) {
        console.log('Error in Function  >>> ', error);
    }
}

export default options;