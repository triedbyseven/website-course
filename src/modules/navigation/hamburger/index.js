function loadHamburgerMenu() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menu = document.getElementById('menu');
  const menuClose = document.getElementById('menu-close');
  const navigationItems = document.getElementById('navigation-items');
  const overlay = document.getElementById('overlay');

  let isToggled = false;

  let current = 0;

  menu.onclick = function () {
    isToggled = !isToggled;

    overlay.classList.remove('overlay-hidden');
    overlay.classList.add('overlay-shown');
  };

  menuClose.onclick = function () {
    isToggled = !isToggled;

    overlay.classList.remove('overlay-shown');
    overlay.classList.add('overlay-hidden');
  };


  const navigationalItems = [...navigationItems.children];
  
  navigationalItems.forEach(navigationalItem => navigationalItem.classList.add('menu-item'));

  const menuItemsElement = document.getElementsByClassName('menu-item');
  const menuItems = [...menuItemsElement];

  menuItems.forEach((menuItem, index) => menuItem.onclick = function () {
    menuItems[current].classList.remove('active');

    current = index;

    menuItem.classList.add('active');
  });

};

export default loadHamburgerMenu;