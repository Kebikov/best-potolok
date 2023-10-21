import { IResponsServer } from "../helps/interface";

class LocalStorageHelps {

    saveDataLogin(response: IResponsServer): void {
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('userId', response.userId);

        const expiryTime: number = new Date().getTime() + response.expiresIn * 1000;
        localStorage.setItem('expiresIn', expiryTime + '');

        localStorage.setItem('access', response.access);
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