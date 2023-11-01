export interface ILoginPassword {
    email: string,
    password: string
}

export interface IResManagement {
    _id: object,
    isShowBaner: string,
    cursUsd: string
}

export interface IResponsServer {
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    userId: string,
    access?: string
}

export type Respons = {
    [key in ResServer]: {
        message: string,
        code?: number
    }
}

export interface IOptions {
    isShowBaner: boolean;
    cursUsd: number;
}

export interface IBodyRefresh {
    refreshToken: string;
    id: string;
}

type ResServer = 'server' | 'error';

export type ResObject = {
    [key in ResServer]: {
        message: string;
    }
}

export interface BodyTelegram {
    title: string;
    name: string;
    tel: string;
}

//= ENUM 

// export enum Link {
//     LoginAdmin ='http://localhost:3306/api/auth/login-admin',
//     Management = 'http://localhost:3306/api/admin/management',
//     Telegram = 'http://localhost:3306/api/management/telegram',
//     RefreshToken = 'http://localhost:3306/api/auth/refresh-token-check'
// }

export enum Link {
    LoginAdmin ='https://server.best-potolok.by/api/auth/login-admin',
    Management = 'https://server.best-potolok.by/api/admin/management',
    Telegram = 'https://server.best-potolok.by/api/management/telegram',
    RefreshToken = 'http://server.best-potolok.by/api/auth/refresh-token-check'
}

