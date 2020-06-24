const clickerCounter = document.getElementById('clicker__counter');
let counter = +clickerCounter.textContent;
const cookie = document.getElementById('cookie');

function clicker() {
    cookie.width = (cookie.width == 200) ? 185 : 200;
    counter += 1;
    clickerCounter.textContent = counter;
};

cookie.onclick = clicker;
