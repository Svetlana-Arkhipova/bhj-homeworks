let dropdownButtons = Array.from(document.querySelectorAll('.dropdown__value'));

dropdownButtons.forEach((item) => {
  item.onclick = function() {
    let dropdownList = this.nextElementSibling;
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
  }
});

let dropdownItems = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownItems.forEach((item) => {
  item.onclick = function() {
    let buttontElement = this.closest('.dropdown__list').previousElementSibling;
    buttontElement.textContent = this.textContent;
    this.closest('.dropdown__list').classList.remove('dropdown__list_active')
    return false;
  }
});
