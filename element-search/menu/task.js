let links = document.querySelectorAll('.menu__link');
let arrLinks = Array.from(links);
//console.log(arrLinks);

arrLinks.forEach((item) => {
  if(item.closest('.menu.menu_sub')) {
    let a = item.closest('.menu__item');
    let b = a.closest('.menu__link');
    //console.log(b);
    b.onclick = function() {
      item.closest('.menu.menu_sub').classList.add('.menu_active');
    }
  }
});
