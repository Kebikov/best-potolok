const str = "SAPRA DL361 N 36W, белая без пульта Размер: Ø455×70 мм Световой поток: 2900 Lm Ra≥80 Цвет свечения: 4000K нейтральный свет Класс защиты: I Материал изделия: металл+пластик 10 Много 24,90";


function cut(str) {
    let obj = {};

    const splitOne = str.split(' ');
    const splitTwo = str.split(' ');
    const price = splitTwo.at(-1).replace(/,/gi, '.');


    obj.title = splitOne[0] + ' ' + splitOne[1];
    obj.article = '2200129';
    obj.wats = cutWord('SAPRA', ',').split(' ').at(-1);
    obj.color = cutWord(',', 'с пультом');
    obj.diameter = cutWord('Размер:', 'Световой поток:');
    obj.colorLightK = cutWord('Температура свечения:', 'K') + 'K';
    obj.patron = 'есть';
    obj.lightStream = cutWord('Световой поток: max.', 'Lm') + 'Lm';


    obj.img = `/img/lamps/lights/${obj.article}.jpg`;
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







