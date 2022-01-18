function mountScrollOnRevealEventListener() {
  window.addEventListener('scroll', onScrollEventListener());
};

function onScrollEventListener(data) {
  return function () {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledTo = Math.ceil(window.scrollY + (window.innerHeight / 2));
    reveal(scrolledTo);
    console.log('Scrolling...', scrolledTo, scrollable);
  };
};

function reveal(scrolledTo) {
  const revealElements = document.querySelectorAll('.reveal');

  for (let index = 0; index < revealElements.length; index++) {
    const revealTopElement = revealElements[index].offsetTop;

    if (scrolledTo > revealTopElement) {
      revealElements[index].classList.add('active');
    } else {
      revealElements[index].classList.remove('active');
    }
  };
};

export default mountScrollOnRevealEventListener;








































// function onScrollEventListener() {
//   return function () {
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolledTo = Math.ceil(window.scrollY + (window.innerHeight / 2));
//     reveal(scrolledTo);
//     console.log('Scrolling...', scrolledTo, scrollable);
//   };
// };

// function reveal(scrolledTo) {
//   const revealElements = document.querySelectorAll('.reveal');

//   for (let index = 0; index < revealElements.length; index++) {
//     const revealTopElement = revealElements[index].offsetTop;

//     if (scrolledTo > revealTopElement) {
//       revealElements[index].classList.add('active');
//     } else {
//       revealElements[index].classList.remove('active');
//     }
//   };
// };