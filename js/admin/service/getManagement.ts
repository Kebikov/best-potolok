import { Link, Respons, IResManagement } from "../helps/interface";
import processRespons from "../helps/processRespons";
import fetchCheckAndRefreshToken from "../helps/fetchCheckAndRefreshToken";

const getManagement = async () =>  {
    try {

        const url: string = Link.Management;
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('accessToken') ?? '',
                'Content-Type': 'application/json',
            },
            "mode":"cors"
        }

        const resManagement: void | IResManagement = await fetchCheckAndRefreshToken(url, options)
        .then(res => res?.json())
        .then((res: Respons | IResManagement) => {
            if('error' in res) return processRespons(res);
            console.log('%c Response >>> ', 'color: red; background: white;', res);
            return res;
        })
        .catch(error => console.log(error));

        return resManagement; 
    } catch (error) {
        console.log('Error in Function getManagement >>> ', error);
    }
}

export default getManagement;