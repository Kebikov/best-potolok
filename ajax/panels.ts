import { type } from "os"

export type Led = {
    title: string,
    wats: string,
    color: string,
    article: string,
    diameter: string,
    diameterCut: string,
    colorLightK: string,
    lightStream: string,
    img: string,
    price: string
}

export type LedKey = keyof Led;

export const panels: Array<Led> = [
    {
        title: 'SAPRA LP110',
        wats: '6',
        color: 'white',
        article:  '2200001',
        diameter: '120',
        diameterCut: '95',
        lightStream: '480',
        colorLightK: '4000',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '1.9'
    },
    {
        title: 'SAPRA LP110',
        wats: '9',
        color: 'white',
        article:  '2200002',
        diameter: '143',
        diameterCut: '120',
        lightStream: '720',
        colorLightK: '4000',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '2.52'
    },
    {
        title: 'SAPRA LP110',
        wats: '12',
        color: 'white',
        article:  '2200003',
        diameter: '170',
        diameterCut: '120',
        lightStream: '720',
        colorLightK: '4000',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '2.52'
    },
    {
        wats: '15',
        title: 'SAPRA LP110',
        color: 'белая',
        article: '2200004',
        diameter: '192',
        diameterCut: '160',
        colorLightK: '4000',
        lightStream: '1200',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '3.84'
    },
    {
        wats: '18',
        title: 'SAPRA LP110',
        color: 'белая',
        article: '2200005',
        diameter: '223',
        diameterCut: '190',
        colorLightK: '4000',
        lightStream: '1440',
        img: '/img/lamps/all-lamp/2200001.jpg',
        price: '4.99'
    },

    {
        wats: '6',
        title: 'SAPRA LP200 со стеклом',
        color: 'белая',
        article: '2200006',
        diameter: '100',
        diameterCut: '70',
        colorLightK: '4000',
        lightStream: '480',
        img: '/img/lamps/all-lamp/2200006.jpg',
        price: '1.9'
    },
    {
        wats: '9',
        title: 'SAPRA LP200 со стеклом',
        color: 'белая',
        article: '2200007',
        diameter: '120',
        diameterCut: '95',
        colorLightK: '4000',
        lightStream: '720',
        img: '/img/lamps/all-lamp/2200006.jpg',
        price: '3.39'
    },
    {
        wats: '12',
        title: 'SAPRA LP200 со стеклом',
        color: 'белая',
        article: '2200008',
        diameter: '160',
        diameterCut: '125',
        colorLightK: '4000',
        lightStream: '960',
        img: '/img/lamps/all-lamp/2200006.jpg',
        price: '3.99'
    },
    {
        wats: '7',
        title: 'SAPRA LP300',
        color: 'белая',
        article: '2200009',
        diameter: '103',
        diameterCut: '75',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200009.jpg',
        price: '2.49'
    },
    {
        wats: '9',
        title: 'SAPRA LP300',
        color: 'белая',
        article: '2200010',
        diameter: '112',
        diameterCut: '85',
        colorLightK: '4000',
        lightStream: '720',
        img: '/img/lamps/all-lamp/2200009.jpg',
        price: '1.99'
    },
    {
        wats: '12',
        title: 'SAPRA LP300',
        color: 'белая',
        article: '2200011',
        diameter: '136',
        diameterCut: '110',
        colorLightK: '4000',
        lightStream: '960',
        img: '/img/lamps/all-lamp/2200009.jpg',
        price: '3.99'
    },
    {
        wats: '3+2',
        title: 'SAPRA LP400',
        color: 'белая',
        article: '2200012',
        diameter: '100',
        diameterCut: '70',
        colorLightK: '4000+6500',
        lightStream: '400',
        img: '/img/lamps/all-lamp/2200012.jpg',
        price: '2.7'
    },
    {
        wats: '6+3',
        title: 'SAPRA LP400',
        color: 'белая',
        article: '2200013',
        diameter: '145',
        diameterCut: '107',
        colorLightK: '4000+6500',
        lightStream: '720',
        img: '/img/lamps/all-lamp/2200012.jpg',
        price: '4.1'
    },
    {
        wats: '12+4',
        title: 'SAPRA LP400',
        color: 'белая',
        article: '2200014',
        diameter: '195',
        diameterCut: '155',
        colorLightK: '4000+6500',
        lightStream: '1280',
        img: '/img/lamps/all-lamp/2200012.jpg',
        price: '4.3'
    },
    {
        wats: '6',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200015',
        diameter: '100',
        diameterCut: '50-85',
        colorLightK: '4000',
        lightStream: '480',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '2.12'
    },
    {
        wats: '8',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200016',
        diameter: '118',
        diameterCut: '50-95',
        colorLightK: '4000',
        lightStream: '640',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '2.6'
    },
    {
        wats: '15',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200017',
        diameter: '173',
        diameterCut: '50-150',
        colorLightK: '4000',
        lightStream: '1200',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '4.13'
    },
    {
        wats: '20',
        title: 'SAPRA LP500',
        color: 'белая',
        article: '2200018',
        diameter: '230',
        diameterCut: '50210',
        colorLightK: '4000',
        lightStream: '1600',
        img: '/img/lamps/all-lamp/2200015.jpg',
        price: '5.16'
    },
    {
        wats: '7',
        title: 'SAPRA LP600',
        color: 'белая',
        article: '2200019',
        diameter: '80',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200019.jpg',
        price: '3.95'
    },
    {
        wats: '7',
        title: 'SAPRA LP610',
        color: 'чёрная',
        article: '2200020',
        diameter: '80',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200020.jpg',
        price: '3.42'
    },
    {
        wats: '7',
        title: 'SAPRA LP601',
        color: 'белая',
        article: '2200021',
        diameter: '82 * 82',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200021.jpg',
        price: '3.95'
    },
    {
        wats: '7',
        title: 'SAPRA LP611',
        color: 'чёрная',
        article: '2200022',
        diameter: '8282',
        diameterCut: '55',
        colorLightK: '4000',
        lightStream: '560',
        img: '/img/lamps/all-lamp/2200022.jpg',
        price: '3.42'
    }

]

