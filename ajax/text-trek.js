const str = 'SAPRA SP015 TR, чёрный Артикул: 2200103 Размер: Ø54×160 мм Вращение: → 315⁰ / ↑ 180⁰ Мощность: max. 13 Вт Патрон: GU10 Класс защиты: II Материал изделия: металл + пластик ';

function cut(str) {
    let obj = {};

    const splitOne = str.split(',');
    const splitTwo = splitOne[0].split(' ');

    splitTwo.pop();

    const splitTree = splitOne[1].split(' ');

    obj.title = splitOne[0];
    obj.wats = 'max. 13 W';
    obj.color = splitTree[1].trim();
    obj.article = cutWord('Артикул:', 'Размер:');
    obj.diameter = cutWord('Размер:', 'Вращение:');
    obj.rotation = cutWord('Вращение:', 'Мощность:');
    obj.patron = cutWord('Патрон:','Класс защиты:');
    obj.material = cutWord('Материал изделия:')
    obj.img = '/img/lamps/trek';
    obj.price = '';

    console.log(obj);
}

function search(str, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === str) {
            return arr[i + 1].match(/\d/gi).join('') ;
        }
    }
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


cut(str);
//-----------------------------------------------------







