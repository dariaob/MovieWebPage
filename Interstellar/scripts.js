//Меняем цвет темы
let  page = document.querySelector('body');
let themeButton = document.querySelector('#theme-button');

themeButton.onclick = function () {
    page.classList.toggle('light-theme');
}

//Меняем картинку у постера
let img = document.querySelector('img');
let imageButton = document.querySelector('#image-button');

imageButton.onclick = function () {
        img.src = 'img/img2.jpg';
        if (img.src === 'img/img2.jpg') {
            img.src = 'img/1618566638_39-funart_pro-p-oboi-fon-chernoe-zvezdnoe-nebo-45.jpg';

    }
}

//Переносим просмотр трейлера в отдельное окно
let trailerButton = document.querySelector('#trailer-button');

trailerButton.onclick = function () {
    window.open('https://www.youtube.com/embed/qcPfI0y7wRU');
}

//Добавляем комментарии и их счетчик
let comments = [];
let submitButton = document.getElementById('comment-add');
let counter = 0;
let counterStorage = document.querySelector('#counter');
loadComments();

//Сохраняем комментарии
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

//Считаем их количество
function commentsAmount() {
    counter = comments.length;
    counterStorage.innerHTML = `Количество комментариев: ${counter}`;
}

//Загружаем комментарии
function loadComments() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
    commentsAmount();

}

//Создаем функцию, которая преобразует время в человеческое
function timeConverter(UnixTime) {
    let newTime = new Date(UnixTime * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = newTime.getFullYear();
    let month = months[newTime.getMonth()];
    let date = newTime.getDate();
    let hour = newTime.getHours();
    let min = newTime.getMinutes();
    let sec = newTime.getSeconds();
    return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;

}

//Функция, которая добавляет комментарии в HTML
function showComments() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function (item) {
        out += `<p class="text-right small"><em>${timeConverter(item.time)}</em>></p>>`;
        out += `<p class="alert alert-primary">${item.name}</p>`
        out += `<p class="alert alert-success">${item.body}</p>`
    });
    commentField.innerHTML = out;
}

//Добавление комментариев в массив
submitButton.onclick = function () {
    event.preventDefault()
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    console.log(comment);
    saveComments();
    showComments();
    commentsAmount();
}

function dataUpdate() {
    setTimeout(function () {
        document.getElementById('moviesTable')}, 2000);


}
dataUpdate();
