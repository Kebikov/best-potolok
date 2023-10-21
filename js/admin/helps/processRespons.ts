import { ResObject } from "./interface";


const processRespons = (res: ResObject) => {
    try {

        if(res?.error) {

            //. error msg 
            switch(res.error.message) {
                case 'DATA_IS_NOT_VALID':
                    return alert('Ошибка отправленных данных.');
                case 'ACCESS_DENIED':
                    return alert('Отказано в доступе.');
                default:
                    return alert('Не известная ощибка.');
            }

        } else {

            //. server msg 
            switch(res.server.message) {
                case 'OBJECT_CREATED':
                    return alert('Данные успешно отправлены.');
                case 'OBJECT_UPDATE':
                    return alert('Данные успешно отправлены.');
                default:
                    return alert('Ошибка обработки данных на сервере.');
            }

        }

    }catch (error) {
        console.log('Error in Function processRespons >>> ', error);
    }
}

export default processRespons;