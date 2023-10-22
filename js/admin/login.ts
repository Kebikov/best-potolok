import localStorageHelps from "./helps/localStorage.helps";
import { Link, Respons } from "./helps/interface";
import processRespons from "./helps/processRespons";

import { ILoginPassword, IResponsServer } from "./helps/interface";


const login = () => {
    try {

        const loginForm = document.querySelector('.login__form') as HTMLFormElement;

        if(loginForm) {
            const button = loginForm.querySelector('button') as HTMLButtonElement;

            button.addEventListener('click', submitButton);

            function submitButton(e: Event) {
                e.preventDefault();

                const login: string = loginForm.login.value;
                const password: string = loginForm.password.value;

                const loginPassword: ILoginPassword = {
                    email: login,
                    password
                } 

                if(login && password) {
                    fetch(Link.LoginAdmin, {
                        method: 'POST',
                        body: JSON.stringify(loginPassword),
                        headers: {'Content-type': 'application/json'}
                    })
                    .then(res => res.json())
                    .then((res: Respons | IResponsServer) => {
                        if('error' in res) {
                            localStorageHelps.deleteDataLogin();
                            return processRespons(res);
                        }

                        localStorageHelps.saveDataLogin(res);
                        window.location.href = '/admin-options.html';
                    })
                    .catch(error => console.log('Error in fetch in fnction login >>>', error));
                }

                console.log(login, password);
            }
        }

    }catch (error) {
        console.log('Error in Function  login >>> ', error);
    }
}

export default login;