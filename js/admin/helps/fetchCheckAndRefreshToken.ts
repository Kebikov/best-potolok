//: проверка точена и обновление при необходимости, использовать для доступа к api требуюшем авторизации
import { IBodyRefresh, IResponsServer, Respons } from './interface';
import localStorageHelps from './localStorage.helps';
import processRespons from './processRespons';


const fetchCheckAndRefreshToken = async (url: string, options: RequestInit) => {
    try {
        console.log('%c start fnc fetchCheckAndRefreshToken ', 'background: blue;color: white;');
        const id: string | null = localStorage.getItem('userId');
        const refreshToken: string | null = localStorage.getItem('refreshToken');

        let expiresIn: string | null = localStorage.getItem('expiresIn');
        let expiresInNumber: number | null = expiresIn ? +expiresIn : null;

        const bodyRefresh: IBodyRefresh = {
            refreshToken: refreshToken ? refreshToken : '', 
            id: id ? id : ''
        };

        //* update refresh token 
        if(expiresInNumber && typeof expiresInNumber === 'number' && expiresInNumber <= new Date().getTime()) {
            console.log('%c UPDATE_TOKEN ', 'background: white;color: black;');
            
            await fetch('http://localhost:3000/api/auth/refresh-token-check', 
                {
                    method: 'PATCH',
                    body: JSON.stringify(bodyRefresh),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': refreshToken ?? '',
                    }
                }
            )
            .then(res => res.json())
            .then((res: Respons | IResponsServer)  => {
                if('error' in res) {
                    console.log(res?.error)
                    return processRespons(res);
                }
                localStorageHelps.saveDataLogin(res);
                options.headers = {
                    'Authorization': res.accessToken ?? '',
                    'Content-Type': 'application/json',
                }
            })
            .catch(err => console.log(err));

            return fetch(url, options);
        } else {
            console.log('%c WITHOUT_UPDATE_TOKEN ', 'background: white; color: black;');
            return fetch(url, options);
        }


    }catch (error) {
        return Promise.reject(error);
    }
}

export default fetchCheckAndRefreshToken;