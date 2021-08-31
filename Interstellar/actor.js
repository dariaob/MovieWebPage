let table = document.getElementById('tableActors')
let actors = [ {
    name: 'Мэттью МакКонахи',
    photo: 'img/actors/Mat.webp',
    charachterName: 'Купер'
},
    {
        name: 'Энн Хэтэуэй',
        photo: 'https://www.kinofilms.ua/images/photos/w680/348019.jpg',
        charachterName: 'Бранд'
    },

    {
        name: 'Джессика Честейн',
        photo: 'https://vokrug.tv/pic/news/2/e/c/4/2ec4895088887a4af2ef9efab75af2c1.jpg',
        charachterName: 'Мёрф'
    },

    {
        name: 'Маккензи Фой',
        photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b5931a08-d554-4141-af2f-d13f9ebde988/360',
        charachterName: 'Мёрф 10 лет'
    },

    {
        name: 'Майкл Кейн',
        photo: 'https://www.peoples.ru/art/cinema/actor/kein/BHDugL44zc6tu.jpeg',
        charachterName: 'Профессор Бранд'
    },

    {
        name: 'Дэвид Гяси',
        photo:'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQkSk4slmCD3pjoHmcKBgjNzvh6Cp576hw8ooOSeTZ1CIOqOdToMy7oZrNzg3E2',
        charachterName: 'Ромили'

    },
    {
        name: 'Уэс Бентли',
        photo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTGn_0hoeKJl00Tay43dPWpGO2zp0uITsa0LTJya8-_84jrxP1U42yNy9Ovv9HJ',
        charachterName: 'Дойл'
    },

    {
        name: 'Мэтт Дэймон',
        photo: 'https://www.golddisk.ru/people_photos/10/1000/big/1000_9b401ddfac0d49b47bf77f58cade7d7a.jpg',
        charachterName: 'Манн'
    },
    {
        name: 'Кейси Аффлек',
        photo: 'https://cs8.pikabu.ru/post_img/big/2017/08/09/8/150228592316619520.png',
        charachterName: 'Том',
    },
    {
        name:  'Джон Литгоу',
        photo: 'https://www.vokrug.tv/pic/person/d/b/5/7/db571761d305f9f74ceef1747f8a2f42.jpg',
        charachterName: 'Дональд'
    },
    {
        name: 'Тимоти Шаламе',
        photo: 'https://www.vokrug.tv/pic/person/2/5/1/9/25194ada5525cde47eac7d2dc2eb2dce.jpg',
        charachterName: 'Том 15 лет'
    },
];

function showActors() {
    for (let actor of actors) {
        let tr = document.createElement('tr');

        let td2 = document.createElement('td');
        td2.innerHTML = `<img src=${actor.photo} alt="Фото актёра" id="actorPic">`
        tr.appendChild(td2)

        let td1 = document.createElement('td');
        td1.innerHTML = actor.name;
        tr.appendChild(td1);


        let td3 = document.createElement('td');
        td3.innerHTML = actor.charachterName;
        tr.appendChild(td3);

        table.appendChild(tr);
    }
}

showActors();