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

window.addEventListener('DOMContentLoaded', () => {
    let cursUsd = 2.6; //курс доллара
    let perimeterPrace = 1; //цена в usd за метр периметра
    let lightPrace = 1; //цена в usd за одну световую точку
    let workPrace = 15; //цена в byn за метр кв. работы

    menuNav({
        cursUsd: cursUsd, 
        workPrace: workPrace,
        lightPrace: lightPrace,
        perimeterPrace: perimeterPrace,
    });
    galleryFn();
    popUpFn();
    calcIndex({
        cursUsd: cursUsd,
        workPrace: workPrace,
        lightPrace: lightPrace,
        perimeterPrace: perimeterPrace,
    });
    calcM2Fn({
        cursUsd: cursUsd, 
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
});