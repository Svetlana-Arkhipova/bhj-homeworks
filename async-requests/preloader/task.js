let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.send();
request.responseType = 'json';

let loader = document.getElementById('loader');
let items = document.getElementById('items');

request.onload = () => {
  loader.classList.remove('loader_active');
  let valuteList = request.response.response.Valute;
  for (country in valuteList) {
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = '<div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div>';
    item.querySelector('div.item__code').textContent = valuteList[country].CharCode;
    item.querySelector('div.item__value').textContent = valuteList[country].Value;
    items.insertAdjacentElement('beforeEnd', item);
  }
};
