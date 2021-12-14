import { current, setCurrent } from './global';
import { menuOpenElement, menuCloseElement } from './menu-toggle';

function loadHamburgerMenu() {
  const menuItemsElement = document.getElementsByClassName('menu-item');
  const menuItems = [...menuItemsElement];

  menuItems.forEach((menuItem, index) => menuItem.onclick = function () {
    menuItems[current].classList.remove('active');

    setCurrent(index);

    menuItem.classList.add('active');
  });
};

export default loadHamburgerMenu;