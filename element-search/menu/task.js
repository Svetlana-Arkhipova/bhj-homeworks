let links = document.querySelectorAll('ul.menu.menu_main > li.menu__item > a.menu__link');
let arrLinks = Array.from(links);

arrLinks.forEach((item) => {
  let subMenu = item.nextElementSibling;
  if (subMenu != null) {
    item.onclick = function() {
      let activeSubMenu = document.querySelector('.menu_active');
      if (activeSubMenu != null) {
          activeSubMenu.classList.remove('menu_active');
      }
      subMenu.classList.add('menu_active');
      if (subMenu === activeSubMenu) {
        subMenu.classList.remove('menu_active');
      }
      return false;
    }
  }
});
