import { IResponsServer } from "../helps/interface";

class LocalStorageHelps {

    saveDataLogin(response: IResponsServer): void {
        if(response?.refreshToken) localStorage.setItem('refreshToken', response.refreshToken);
        if(response?.accessToken) localStorage.setItem('accessToken', response.accessToken);
        if(response?.userId) localStorage.setItem('userId', response.userId);

        if(response?.expiresIn) {
            const expiryTime: number = new Date().getTime() + response.expiresIn * 1000;
            localStorage.setItem('expiresIn', expiryTime + '');
        }
        
        if(response?.access) localStorage.setItem('access', response.access);
    }

    deleteDataLogin():void {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('access');
    }

}

export default new LocalStorageHelps();