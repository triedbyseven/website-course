import { overlayElement, isToggled, setIsToggled } from './global.js';

export const menuOpenElement = document.getElementById('menu-open-button');
export const menuCloseElement = document.getElementById('menu-close-button');

menuOpenElement.onclick = function () {
  setIsToggled(!isToggled);

  overlayElement.classList.remove('overlay-hidden');
  overlayElement.classList.add('overlay-shown');
};

menuCloseElement.onclick = function () {
  setIsToggled(!isToggled);

  overlayElement.classList.remove('overlay-shown');
  overlayElement.classList.add('overlay-hidden');
};