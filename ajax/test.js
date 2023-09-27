const str = 'SAPRA LP1000 28W, чёрная накладная Артикул: 2200380 Размер: 215×42 мм Световой поток: 1960 Lm Цвет свечения: 4000K нейтральный свет Класс защиты: I Материал изделия: метал';



function cut(str) {
    let obj = {};

    const splitOne = str.split(',');
    const splitTwo = splitOne[0].split(' ');

    obj.wats = '' + parseInt( splitTwo.at(-1) );
    splitTwo.pop();
    obj.title = splitTwo.join(' ');

    const splitTree = splitOne[1].split(' ');

    obj.color = splitTree[1].trim();
    obj.article = search('Артикул:', splitTree);
    obj.diameter = cutWord('Размер:', 'мм');
    obj.diameterCut = 'нет ';
    obj.colorLightK = search('свечения:', splitTree);
    obj.lightStream = search('поток:', splitTree);
    obj.img = '/img/lamps/all-lamp/2200375.jpg';

    obj.price = '18.7';

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







