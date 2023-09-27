const str = "SAPRA BL3000-3, карданный чёрный Артикул: 2200466 Размер: 335×135 мм Вращение: → 120⁰ + 120⁰ Врезное отверстие: 310×110 мм Цоколь: GU5.3 Мощность: max. 13 Вт  Класс защиты: III Материал: металл 24 Много 8,56";


function cut(str) {
    let obj = {};
    const splitOne = str.split(',');
    const splitTwo = str.split(' ');
    const price = splitTwo.at(-1).replace(/,/gi, '.');
   
    const splitTree = splitOne[1].split(' ');


    obj.title = splitOne[0];
    obj.color = cutWord(',', 'Артикул:').trim();
    obj.article = cutWord('Артикул:', 'Размер:');
    obj.diameter = cutWord('Размер:', 'Вращение:');
    obj.patron = cutWord('Цоколь:', 'Мощность:');
    obj.diameterCut = cutWord('Врезное отверстие:', 'Цоколь:');
    obj.colorLightK = 'без LED';

// split(' ')[0] + ' мм'

    obj.img = `/img/lamps/dot/${obj.article}.jpg`;
    obj.price = price;


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







