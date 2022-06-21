// CSS imports
import './css/index.css';

// Javascript imports
import loadHamburgerMenu from './modules/navigation/hamburger/index.js';
import loadForm from './modules/form/index.js';
import loadModalContactUs from './modules/modal/contact-us/index.js';
// import loadHeroAnimations from './modules/animations/hero/index.js';
import mountScrollOnRevealEventListener from './modules/global/scroll/index.js';

loadHamburgerMenu();
loadModalContactUs();
loadForm();
mountScrollOnRevealEventListener(); 