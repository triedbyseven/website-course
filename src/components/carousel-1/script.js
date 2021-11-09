// Variables
const containerElement = document.getElementById("slider");
const sliderContainerElement = document.getElementById("slider-container");
const prevButtonElement = document.getElementById("previous-button");
const nextButtonElement = document.getElementById("next-button");

let current = 2;
let margin = 0;
let itemWidth = containerElement.offsetWidth / 3;
let itemLength = sliderContainerElement.children.length;
let timeoutInstance = null;
let slides = [
  { id: "1", imgUrl: "https://images.unsplash.com/photo-1610884461690-e802d880e527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1325&q=80" },
  { id: "2", imgUrl: "https://images.unsplash.com/photo-1624343583006-ce7442701c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" },
  { id: "3", imgUrl: "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
  { id: "4", imgUrl: "https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80" }
];
let slidesLength = slides.length;

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = undefined;
let currentIndex = 0;

let animationDirection = '';

// Assigned event methods.
prevButtonElement.onclick = prevButton;
nextButtonElement.onclick = nextButton;
window.onresize = handleOnResize;
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

function renderSlides(value, index, array) {
  const li = document.createElement("li");

  li.innerHTML = `
    <img src=${value.imgUrl} alt="miata"/>
  `;

  sliderContainerElement.appendChild(li);
};

function renderSlidesHandler(value, index, array) {
  return renderSlides(value, index, array);
};

function enableEventListeners(slide, index, array) {
  const sliderImageElement = slide.querySelector("img");

  // disable default image drag
  sliderImageElement.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch Events
  sliderImageElement.addEventListener('touchstart', touchStart(index));
  sliderImageElement.addEventListener('touchend', touchEnd);
  sliderImageElement.addEventListener('touchmove', touchMove);

  // Mouse Events
  sliderImageElement.addEventListener('mousedown', touchStart(index));
  sliderImageElement.addEventListener('mouseup', touchEnd);
  sliderImageElement.addEventListener('mousemove', touchMove);
  sliderImageElement.addEventListener('mouseleave', touchEnd);
};


// App Initialization

slides.forEach(renderSlidesHandler);

[...sliderContainerElement.children].forEach(enableEventListeners);


for (let i = 0; i < sliderContainerElement.children.length; i++) {
  sliderContainerElement.children[i].style.width = itemWidth + "px";
};

itemLength = sliderContainerElement.children.length;

console.log('@current', current);
console.log('@currentIndex',currentIndex);