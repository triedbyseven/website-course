import loadServiceAnimations from '../../animations/services';
import loadAboutAnimations from '../../animations/about';

function mountScrollOnRevealEventListener() {
  window.addEventListener('scroll', onScrollEventListener());
};

function onScrollEventListener(data) {
  return function () {
    const scrolledTo = Math.ceil(window.scrollY + (window.innerHeight / 2));
    reveal(scrolledTo);
  };
};

function reveal(scrolledTo) {
  const revealElements = document.querySelectorAll('.reveal');

  for (let index = 0; index < revealElements.length; index++) {
    const revealTopElement = revealElements[index].offsetTop;

    if (scrolledTo > revealTopElement) {
      onAnimate(revealElements[index].id, true);
    } else {
      onAnimate(revealElements[index].id, false);
    }
  };
};

function onAnimate(revealElementID, isScrolledTo) {
  if (revealElementID === 'service') loadServiceAnimations(isScrolledTo);
  if (revealElementID === 'about') loadAboutAnimations(isScrolledTo);
};

export default mountScrollOnRevealEventListener;