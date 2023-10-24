import menuNav from './modules/menu_nav';
import galleryFn from './modules/gallery';
import popUpFn from './modules/popup';
import calcIndex from './modules/calc_index';
import calcM2Fn from './modules/calc_m2';
import rulerMovement from './modules/ruler_movement';
import phoneInputIndex from './modules/phone_input_index';
import emailIndexMain from './modules/email_index';
import youtubeVideo from './modules/youtube';
import iconGo from './modules/icon_observer';
import animationPraise from './modules/animation_praise';
import questions from './modules/questions';
import startLamps from './lamps/lampModules/startLamps'
import time from './baner/time';
import login from './admin/login';
import options from './admin/options';
import getManagement from './admin/service/getManagement';

import { perimeterPrace, lightPrace, workPrace } from './data-start';


window.addEventListener('DOMContentLoaded', () => {

    (async function start() {

        //* получение данных с сервера и запись в localStorage 
        const managementObject = await getManagement();
        const cursUsd = managementObject.cursUsd;
        const isShowBaner = managementObject.isShowBaner;
        localStorage.cursUsd = cursUsd;
        localStorage.isShowBaner = isShowBaner;
    
        //* запуск модулей 
        menuNav({
            workPrace: workPrace,
            lightPrace: lightPrace,
            perimeterPrace: perimeterPrace,
        });
        galleryFn();
        popUpFn();
        calcIndex({
            workPrace: workPrace,
            lightPrace: lightPrace,
            perimeterPrace: perimeterPrace,
        });
        calcM2Fn({
            works: workPrace, 
            pracePerimetr: perimeterPrace,
        });
        rulerMovement();
        phoneInputIndex();
        emailIndexMain();
        youtubeVideo();
        iconGo();
        animationPraise();
        questions();
        startLamps();
        time();
        login();
        options();
    }());

});