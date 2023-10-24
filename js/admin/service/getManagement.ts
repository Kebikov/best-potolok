//: getManagement - функция получения с сервера данных для начального запуска сайта, вернет обьект типа 
    //: { 
    //:     _id: object, (id - обьекта)
    //:     isShowBaner: boolean, (true/false для определения надо ли показывать рекламный банер)
    //:     cursUsd: string, (вернет курс доллара установленный админом)
    //:     __v: 0
    //: }

import { Link, Respons, IResManagement } from "../helps/interface";
import processRespons from "../helps/processRespons";


const getManagement = async () =>  {
    try {
        console.log('%c start fnc getManagement ', 'background: blue;color: white;');
        const url: string = Link.Management;

        const resManagement: void | IResManagement = await fetch(url)
            .then(res => res?.json())
            .then((res: Respons | IResManagement) => {
                if('error' in res) return processRespons(res);
                //console.log('%c Response >>> ', 'color: red; background: white;', res);
                return res;
            })
            .catch(error => console.log(error));

        return resManagement; 
    } catch (error) {
        console.log('Error in Function getManagement >>> ', error);
    }
}

export default getManagement;