const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'text.txt');

fs.readFile(filePath, ((error, data) => {
    const str = data.toString();
    const obj = cut(str);

    console.log(obj);

    function cut(str) {
        let obj = {};

        const splitOne = str.split(' ');
        const splitTwo = str.split(' ');
        //const price = splitTwo.at(-1).replace(/,/gi, '.');

        let price = '';

        for(let x = splitTwo.length; x != 0;x--) {
            if(splitTwo[x] && splitTwo[x] !== '\r' && splitTwo[x] !== '\n') {
                let value = splitTwo[x].replace(/\r\n/gi, '');
                price = value.replace(/,/gi, '.');
                break;
            }
        }

        obj.title = splitOne[0] + ' ' + splitOne[1];
        obj.article = cutWord('Артикул: ', '\r');
        obj.wats = cutWord('SAPRA', ',').split(' ').at(-1);
        obj.color = cutWord(', ', ' ');
        obj.diameter = cutWord('Размер:', 'Световой поток:');
        obj.colorLightK = cutWord('Цвет свечения:', 'K').replace(/ /gi, '') + 'K';
        obj.patron = 'есть';
        obj.lightStream = cutWord('Световой поток:', 'Lm') + 'Lm';


        obj.img = `/img/lamps/lights/${obj.article}.jpg`;
        obj.price = price;

        return obj;
    }

    function cutWord(word1, word2) {

        if(word1 && word2) {
            const  regStr = new RegExp(word1 + '(.*?)' + word2);
            const resaltCut = str.match(regStr);
            if(resaltCut) {
                return resaltCut[1].trim();
            }else{
                return '';
            }

        }else{
            const  res = str.split(word1);
            if(res) {
                return res[1].trim();
            }else{
                return '';
            }

        }
        
    }

    function search(str, arr) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === str) {
                return arr[i + 1].match(/\d/gi).join('') ;
            }
        }
    }
}));
