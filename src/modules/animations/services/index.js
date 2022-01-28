const animationState = {
  hasAnimatedUp: false,
  hasAnimatedDown: false,
  direciton: null
};

function delayAnimation(node, className, delayTime, isScrolledTo) {
  setTimeout(() => {
    isScrolledTo ? node.classList.remove(className) : node.classList.add(className);
  }, delayTime);
};

function delayAnimations(nodes, delayTime, isScrolledTo) {
  setTimeout(() => {
    for ( let index = 0; index < nodes.length; index++ ) {
      delayAnimation(nodes[index], 'opacity', index * 100, isScrolledTo); 
    }
  }, delayTime);
};

function loadServiceAnimations(isScrolledTo) {
  const serviceHeadingElement = document.getElementById('serviceHeading');
  const serviceSubHeadingElement = document.getElementById('serviceSubHeading');
  const serviceContentElement = document.getElementById('serviceContent');
  const cardServicesElements = document.querySelectorAll('#card-services');

  delayAnimation(serviceHeadingElement, 'opacity', 0, isScrolledTo);
  delayAnimation(serviceSubHeadingElement, 'opacity', 150, isScrolledTo);
  delayAnimation(serviceContentElement, 'opacity', 300, isScrolledTo);
  delayAnimations(cardServicesElements, 450, isScrolledTo);
};

export default loadServiceAnimations;