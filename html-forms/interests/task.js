let parentList = document.querySelectorAll('div.interests.interests_main > ul > li > label > input');
let parentListArr = Array.from(parentList);

parentListArr.forEach((item) => {
  item.onchange = () => {
    let itemCategory = item.closest('.interest');
    let subCategories = itemCategory.querySelectorAll('ul.interests.interests_active > li > label > input');
    for (let i = 0; i < subCategories.length; i++) {
      if (item.checked === true) {
        subCategories[i].checked = true;
      } else {
        subCategories[i].checked = false;
      }
    }
  }
});
