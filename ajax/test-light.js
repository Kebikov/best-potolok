


function cut(str) {
    let obj = {};

    const splitOne = str.split(' ');
    const splitTwo = str.split(' ');
    const price = splitTwo.at(-1).replace(/,/gi, '.');


    obj.title = splitOne[0] + ' ' + splitOne[1];
    obj.article = '2200129';
    obj.wats = cutWord('SAPRA', ',').split(' ').at(-1);
    obj.color = cutWord(', ', ' ');
    obj.diameter = cutWord('Размер:', 'Световой поток:');
    obj.colorLightK = cutWord('Цвет свечения:', 'K').replace(/ /gi, '') + 'K';
    obj.patron = 'есть';
    obj.lightStream = cutWord('Световой поток: max.', 'Lm') + 'Lm';


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

cut(str);
//-----------------------------------------------------







