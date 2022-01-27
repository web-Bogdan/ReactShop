const items = [
    {
        id: 1,
        name: 'Apple iPhone 12',
        img: 'https://static.eldorado.ru/photos/71/716/237/03/new_71623703_l_1631658381.jpeg/resize/380x240/',
        price: 932,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 2,
        name: 'Honor x8',
        img: 'https://static.eldorado.ru/photos/71/715/958/01/new_71595801_l_1619539477.jpeg/resize/380x240/',
        price: 123,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 3,
        name: 'Samsung Galaxy M12',
        img: 'https://static.eldorado.ru/photos/71/716/026/38/new_71602638_l_1620818126.jpeg/resize/380x240/',
        price: 379,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 4,
        name: 'HyperX Cloud Stinger',
        img: 'https://static.eldorado.ru/photos/71/712/406/53/new_71240653_l_1490463197.jpeg/resize/380x240/',
        price: 188,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 5,
        name: 'Apple iPad 10.2',
        img: 'https://static.eldorado.ru/photos/71/716/237/75/new_71623775_l_1631662583.jpeg/resize/380x240/',
        price: 899,
        code: 1,
        isInCart: false,
        count: 1
    },
    {
        id: 6,
        name: 'Apple iPhone 11',
        img: 'https://static.eldorado.ru/photos/71/715/665/96/new_71566596_l_1605093913.jpeg/resize/380x240/',
        price: 719,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 7,
        name: 'Apple iPad mini 7.9 ',
        img: 'https://static.eldorado.ru/photos/71/715/115/94/new_71511594_l_1553247391.jpeg/resize/380x240/',
        price: 229,
        code: 1,
        isInCart: false,
        count: 1
    },
    {
        id: 8,
        name: 'Sony WH-CH510',
        img: 'https://static.eldorado.ru/photos/71/715/294/40/new_71529440_l_1574172010.jpeg/resize/380x240/',
        price: 123,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 9,
        name: 'Apple iPad Pro 11',
        img: 'https://static.eldorado.ru/photos/71/716/012/18/new_71601218_l_1618955421.jpeg/resize/380x240/',
        price: 870,
        code: 1,
        isInCart: false,
        count: 1
    },
    {
        id: 10,
        name: 'Huawei Freebuds 3',
        img: 'https://static.eldorado.ru/photos/71/715/340/58/new_71534058_l_1574579931.jpeg/resize/380x240/',
        price: 37,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 11,
        name: 'JBL Tune175BT',
        img: 'https://static.eldorado.ru/photos/71/715/854/60/new_71585460_l_1613039082.jpeg/resize/380x240/',
        price: 70,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 12,
        name: 'Galaxy Buds2 True',
        img: 'https://static.eldorado.ru/photos/mv/Big/50160744bb.jpg/resize/380x240/',
        price: 20,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 13,
        name: 'Huawei MediaPad M5',
        img: 'https://static.eldorado.ru/photos/71/715/133/80/new_71513380_l_1558956059.jpeg/resize/380x240/',
        price: 190,
        code: 1,
        isInCart: false,
        count: 1
    },
    {
        id: 14,
        name: 'Samsung Galaxy A32',
        img: 'https://static.eldorado.ru/photos/71/715/900/18/new_71590018_l_1624603786.jpeg/resize/380x240/',
        price: 399,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 15,
        name: 'Samsung Galaxy S20',
        img: 'https://static.eldorado.ru/photos/71/716/025/94/new_71602594_l_1624543121.jpeg/resize/380x240/',
        price:520,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 16,
        name: 'JBL JBLT115TWSRED',
        img: 'https://static.eldorado.ru/photos/71/715/703/88/new_71570388_l_1603103037.jpeg/resize/380x240/',
        price: 89,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 17,
        name: 'Philips TAT2205BK/00',
        img: 'https://static.eldorado.ru/photos/71/715/670/37/new_71567037_l_1603291424.jpeg/resize/380x240/',
        price: 17,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 18,
        name: 'Lenovo M10 FHD Plus',
        img: 'https://static.eldorado.ru/photos/71/715/412/95/new_71541295_l_1585579075.jpeg/resize/380x240/',
        price: 109,
        code: 1,
        isInCart: false,
        count: 1
    },
    {
        id: 19,
        name: 'Xiaomi Mi 10T Pro',
        img: 'https://static.eldorado.ru/photos/71/715/751/58/new_71575158_l_1606471337.jpeg/resize/380x240/',
        price: 279,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 20,
        name: 'POCO X3 Pro',
        img: 'https://static.eldorado.ru/photos/71/715/983/79/new_71598379_l_1618386627.jpeg/resize/380x240/',
        price: 389,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 21,
        name: 'Sony WI-C310',
        img: 'https://static.eldorado.ru/photos/71/715/242/90/new_71524290_l_1568127364.jpeg/resize/380x240/',
        price: 9,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 22,
        name: 'Digma Optima 7 A101 3G',
        img: 'https://static.eldorado.ru/photos/71/715/675/67/new_71567567_l_1602737482.jpeg/resize/380x240/',
        price: 27,
        code: 1,
        isInCart: false,
        count: 1
    },
    {
        id: 23,
        name: 'vivo Y31 ',
        img: 'https://static.eldorado.ru/photos/71/715/844/94/new_71584494_l_1612772287.jpeg/resize/380x240/',
        price: 669,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 24,
        name: 'Honor 30S ',
        img: 'https://static.eldorado.ru/photos/71/715/484/85/new_71548485_l_1597761848.jpeg/resize/380x240/',
        price: 279,
        code: 0,
        isInCart: false,
        count: 1
    },
    {
        id: 25,
        name: 'JBL Tune 590BT',
        img: 'https://static.eldorado.ru/photos/71/715/211/65/new_71521165_l_1565539078.jpeg/resize/380x240/',
        price: 69,
        code: 2,
        isInCart: false,
        count: 1
    },
    {
        id: 26,
        name: 'JBL T460BT',
        img: 'https://static.eldorado.ru/photos/71/714/166/06/new_71416606_l_1559649373.jpeg/resize/380x240/',
        price: 79,
        code: 2,
        isInCart: false,
        count: 1
    },

];

export default items;

