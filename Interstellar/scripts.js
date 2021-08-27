let  page = document.querySelector('body');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function () {
    page.classList.toggle('light-theme');
}

let img = document.querySelector('img');
let imageButton = document.querySelector('.image-button');

imageButton.onclick = function () {
        img.src = 'img/img2.jpg';
        if (img.src === 'img/img2.jpg') {
            img.src = 'img/1618566638_39-funart_pro-p-oboi-fon-chernoe-zvezdnoe-nebo-45.jpg';

    }

}


