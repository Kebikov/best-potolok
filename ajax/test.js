const str = 'SAPRA LP611 7W, чёрная Артикул: 2200022 Размер: 82×82 мм Врезное отверстие: Ø55 мм Световой поток: 560 Lm Цвет свечения: 4000K нейтральный свет';



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
    obj.diameter = search('Размер:', splitTree);
    obj.diameterCut = search('отверстие:', splitTree);
    obj.colorLightK = search('свечения:', splitTree);
    obj.lightStream = search('поток:', splitTree);
    obj.img = '';
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

cut(str);