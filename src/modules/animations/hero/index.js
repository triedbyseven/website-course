
function delayAnimation(node, className, delayTime) {
  setTimeout(() => {
    node.classList.remove(className);    
  }, delayTime);
};


function loadHeroAnimations() {
  console.log('Hero animations loaded!');
  // const animateHeadingElement = document.getElementById('animateHeading');
  // const animateParagraphElement = document.getElementById('animateParagraph');
  // const animateButtonsElement = document.getElementById('animateButtons');

  // delayAnimation(animateHeadingElement, 'opacity', 1000);
  // delayAnimation(animateParagraphElement, 'opacity', 1250);
  // delayAnimation(animateButtonsElement, 'opacity', 1500);

};

export default loadHeroAnimations;