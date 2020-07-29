let navigation = document.getElementById('tabs1');
let tabs = navigation.querySelectorAll('.tabs > .tab__navigation > .tab');
let tabsArr = Array.from(tabs);
let tabContents = navigation.querySelectorAll('.tab__contents > .tab__content');

function setActive(number) {
  tabs[number].classList.add('tab_active');
  tabContents[number].classList.add('tab__content_active');
}

function removeActive(number) {
  tabs[number].classList.remove('tab_active');
  tabContents[number].classList.remove('tab__content_active');
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    let index = tabsArr.findIndex((item) => item.classList.contains('tab_active'));
    removeActive(index);
    setActive(i);
  }
}
