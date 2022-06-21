function delayAnimation(node, className, delayTime, isScrolledTo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isScrolledTo ? node.classList.remove(className) : node.classList.add(className);
      resolve(1);
    }, delayTime);
  });
};

// function delayAnimationsLeft(nodes, delayTime, isScrolledTo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        for ( let index = 0; index < nodes.length; index++ ) {
//         delayAnimations(nodes[index], 'hide', index * 100, isScrolledTo); 
//         resolve(1);
//        }
//     }, delayTime);
//   });
// };  


function delayAnimationsLeft(nodes, delayTime, isScrolledTo) {
  setTimeout(() => {
    for (let index = 0; index < nodes.length; index++) {
      delayAnimation(nodes[index], 'hide-left', index * 500, isScrolledTo);
    }
  }, delayTime);
};

function delayAnimationsRight(nodes, delayTime, isScrolledTo) {
  setTimeout(() => {
    for (let index = 0; index < nodes.length; index++) {
      delayAnimation(nodes[index], 'hide-right', index * 500, isScrolledTo);
    }
  }, delayTime);
};

async function loadPortfolioAnimations(isScrolledTo) {
  //Headers
  // const portfolioCardsLeftElement = document.querySelectorAll('#selected-work-card-left');
  const portfolioTitleRight = document.getElementById('#header-right');

  //Portfolio Cards
  const portfolioCardsLeftElement = document.querySelectorAll('#selected-work-card-left');
  const portfolioCardsRightElement = document.querySelectorAll('#selected-work-card-right');

  // await delayAnimation(portfolioTitleRight, 'hide-right', 300, isScrolledTo); 

  await delayAnimationsLeft(portfolioCardsLeftElement, 750, isScrolledTo);
  await delayAnimationsRight(portfolioCardsRightElement, 750, isScrolledTo);
};

export default loadPortfolioAnimations;