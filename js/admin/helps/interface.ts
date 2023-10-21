export interface ILoginPassword {
    email: string,
    password: string
}

export interface IResponsServer {
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    userId: string,
    access: string
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
