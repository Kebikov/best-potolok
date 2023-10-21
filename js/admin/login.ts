import localStorageHelps from "./helps/localStorage.helps";

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
                    fetch('http://localhost:3000/api/auth/login-admin', {
                        method: 'POST',
                        body: JSON.stringify(loginPassword),
                        headers: {'Content-type': 'application/json'}
                    })
                    .then(res => res.json())
                    .then(res => {
                        if(res?.error?.message) {
                            localStorageHelps.deleteDataLogin();
                            return alert(res.error.message);
                        }

                        const response: IResponsServer = res;
                        localStorageHelps.saveDataLogin(response);
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