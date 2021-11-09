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
const sliderItems = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

// Assigned event methods.
prevButtonElement.onclick = prevButton;
nextButtonElement.onclick = nextButton;
window.onresize = handleOnResize;

sliderItems.forEach(item => {
  // sliderContainerElement.appendChild(item)
  var li = document.createElement('li');
  li.appendChild(document.createTextNode('hello'));
  sliderItems.appendChild(li);
});

console.log('hello')

for (let i = 0; i < sliderContainerElement.children.length; i++) {
  sliderContainerElement.children[i].style.width = itemWidth + "px";
};