function loadHamburgerMenu() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');

  let isToggled = false;

  menu.onclick = function () {
    isToggled = !isToggled;

    console.log('isToggled is now set to: ', isToggled);

    overlay.classList.remove('overlay-hidden');
    overlay.classList.add('overlay-shown');
    console.log(overlay.classList);
  };

};

export default loadHamburgerMenu;