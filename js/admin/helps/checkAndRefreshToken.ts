import { IBodyRefresh, IResponsServer, Respons } from './interface';
import localStorageHelps from './localStorage.helps';
import processRespons from './processRespons';


const checkAndRefreshToken = async (url: string, options: RequestInit) => {
    try {

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
            console.log('UPDATE_checkAndRefreshToken');
            const responseServer = await fetch('http://localhost:3000/api/auth/refresh-token-check', 
                {
                    method: 'PATCH',
                    body: JSON.stringify(bodyRefresh),
                    headers: {'Content-Type': 'application/json'}
                }
            );
            
            responseServer.json()
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
            });

            return fetch(url, options);
        } else {
            console.log('WITHOUT_UPDATE_checkAndRefreshToken', options);
            return fetch(url, options);
        }


    }catch (error) {
        return Promise.reject(error);
    }
}

export default checkAndRefreshToken;