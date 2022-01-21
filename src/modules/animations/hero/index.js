
// const animationState = {
//   hasAnimated: false
// };

// function delayAnimation(node, className, delayTime) {
//   setTimeout(() => {
//     node.classList.remove(className);
//   }, delayTime);
// };

// function delayAnimations(nodes, delayTime) {
//   console.log('nodes: ', nodes);
//   setTimeout(() => {
//     for (let index = 0; index < nodes.length; index++) {
//       delayAnimation(nodes[index], 'opacity', index * 100);
//     }
//   }, delayTime);
// }


// function loadHeroAnimations() {
//   if ( animationState.hasAnimated ) return;

//   console.log('Hero animations loaded!');
//   animationState.hasAnimated = !animationState.hasAnimated;
//   console.log('animationState.hasAnimated', animationState.hasAnimated);
//   const serviceHeadingElement = document.getElementById('serviceHeading');
//   const serviceSubHeadingElement = document.getElementById('serviceSubHeading');
//   const serviceContentElement = document.getElementById('serviceContent');
//   const cardServicesElements = document.querySelectorAll('#card-services');

//   delayAnimation(serviceHeadingElement, 'opacity', 0);
//   delayAnimation(serviceSubHeadingElement, 'opacity', 500);
//   delayAnimation(serviceContentElement, 'opacity', 1000);
//   delayAnimations(cardServicesElements, 1500);

// };

// export default loadHeroAnimations;