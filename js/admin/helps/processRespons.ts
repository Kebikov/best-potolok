import { ResObject } from "./interface";


const processRespons = (res: ResObject) => {
    try {

        //. error msg 
        if(res?.error) {
            switch(res.error.message) {
                case 'DATA_IS_NOT_VALID':
                    return alert('Ошибка отправленных данных.');
                case 'ACCESS_DENIED':
                    return alert('Отказано в доступе.');
                case 'EMAIL_NOT_FOUND':
                    return alert('Email не найден.');
                case 'INVALID_PASSWORD':
                    return alert('Не правильный пароль.');
                case 'REFRESH_TOKEN_IS_BED':
                    return alert('Недействительный REFRESH_TOKEN');
                default:
                    return alert(`Не известная ощибка: ${res?.error?.message}`);
            }
        }

        //. server msg 
        if(res?.server){
            switch(res.server.message) {
                case 'OBJECT_CREATED':
                    return alert('Данные успешно отправлены.');
                case 'OBJECT_UPDATE':
                    return alert('Данные успешно отправлены.');
                default:
                    return alert('Ошибка обработки данных на сервере.');
            }
        }

        return alert('Error: ответ сервера не обработан');
    }catch (error) {
        console.log('Error in Function processRespons >>> ', error);
    }
}

export default processRespons;