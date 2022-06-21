function delayAnimation(node, className, delayTime, isScrolledTo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isScrolledTo ? node.classList.remove(className) : node.classList.add(className);
      resolve(1);
    }, delayTime);
  });
};

function delayAnimations(nodes, delayTime, isScrolledTo) {
  setTimeout(() => {
    for (let index = 0; index < nodes.length; index++) {
      delayAnimation(nodes[index], 'opacity', index * 100, isScrolledTo);
    }
  }, delayTime);
};

async function loadServiceAnimations(isScrolledTo) {
  const serviceHeadingElement = document.getElementById('serviceHeading');
  const serviceSubHeadingElement = document.getElementById('serviceSubHeading');
  const serviceContentElement = document.getElementById('serviceContent');
  const cardServicesElements = document.querySelectorAll('#card-services');

  await delayAnimation(serviceHeadingElement, 'opacity', 0, isScrolledTo);
  await delayAnimation(serviceSubHeadingElement, 'opacity', 250, isScrolledTo);
  await delayAnimation(serviceContentElement, 'opacity', 500, isScrolledTo);
  await delayAnimations(cardServicesElements, 750, isScrolledTo);
};

export default loadServiceAnimations;