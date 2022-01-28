
function delayAnimation(node, className, delayTime, isScrolledTo) {
  setTimeout(() => {
    isScrolledTo ? node.classList.remove(className) : node.classList.add(className);
  }, delayTime);
};

function loadAboutAnimations(isScrolledTo) {
  const aboutHeadingElement = document.getElementById('aboutHeading');
  const aboutSubHeadingElement = document.getElementById('aboutSubHeading');
  const aboutContentElement = document.getElementById('aboutContent');
  const aboutButtonElement = document.getElementById('aboutButton');

  delayAnimation(aboutHeadingElement, 'animate', 0, isScrolledTo);
  delayAnimation(aboutSubHeadingElement, 'animate', 150, isScrolledTo);
  delayAnimation(aboutContentElement, 'animate', 300, isScrolledTo);
  delayAnimation(aboutButtonElement, 'animate', 450, isScrolledTo);
};

export default loadAboutAnimations;