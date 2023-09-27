const str = "SAPRA LPL 106/3Р, чёрный / матовый белый Артикул: 2200335 Размер плафона: Ø155×170 мм Размер основания: 550×40×20 мм Размер светильника с проводом: 64×16×max.105 см Мощность LED-лампы: max. 20 Вт Патрон: E27 Класс защиты: II Материал: стекло";


function cut(str) {
    let obj = {};

    const splitOne = str.split(',');
    const splitTwo = splitOne[0].split(' ');

    
    splitTwo.pop();

    const splitTree = splitOne[1].split(' ');

    obj.title = splitOne[0];
    obj.color = cutWord(',', 'Артикул:').replace(/\s/g, '');
    obj.article = cutWord('Артикул:', 'Размер плафона:');
    obj.diameter = cutWord('Размер плафона:', 'мм');
    obj.diameterCut = cutWord('Размер основания:', 'мм');
    obj.wats = cutWord('Мощность:', 'Патрон:');
    obj.patron = cutWord('Патрон:', 'Класс защиты:');
    obj.material = cutWord('Материал:');


    obj.img = '/img/lamps/lustre/31.jpg';
    obj.price = '57';


    console.log(obj);
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

cut(str);
//-----------------------------------------------------







