function prevButton() {
  if (current === 2) return;

  current = current - 1;

  margin = margin + itemWidth;
  sliderContainerElement.style.marginLeft = margin + 'px';

  console.log(current);
};

function nextButton() {
  if (current = sliderItems) sliderItems.forEach(renderSlidesHandler);
  // if (current =  sliderItems) sliderContainerElement.forEach(resizeHandler);
  // for (let i = current; i < sliderContainerElement.children.length; i++) {
  //   sliderContainerElement.children[i].style.width = itemWidth + "px";
  // };
  // sliderContainerElement.style.width = containerElement.offsetWidth / 3;

  current = current + 1;

  margin = margin - itemWidth;
  sliderContainerElement.style.marginLeft = margin + 'px';

  console.log(current);
};

function renderSlidesHandler(slide, index, array) {
  const liNode = document.createElement("li");
  const width = itemWidth;

  liNode.innerHTML = `

    <img src=${slide.imgUrl} alt=${slide.imgAlt}/>
  `;

  sliderContainerElement.appendChild(liNode);
};

function enableEventListeners(slide, index, array) {
  const sliderImageElement = slide.querySelector("img");

  // disable default image drag
  sliderImageElement.addEventListener('dragstart', (e) => e.preventDefault())

  // Mouse Events
  sliderImageElement.addEventListener('mousedown', touchStart(index));
  sliderImageElement.addEventListener('mousemove', touchMove);
  sliderImageElement.addEventListener("mouseup", touchEnd);

  // Touch Events
  sliderImageElement.addEventListener('touchstart', touchStart(index));
  sliderImageElement.addEventListener('touchmove', touchMove);
  sliderImageElement.addEventListener('touchEnd', touchEnd);
};

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
};

function animation() {
  sliderContainerElement.style.tranform = `translateX(${currentTranslate}px)`;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    isDragging = true;
    startPosition = getPositionX(event);
    animationId = requestAnimationFrame(animation);

    console.log('@currentIndex', currentIndex);
    console.log('@isDraggin', isDragging);
    console.log('@startPosition', startPosition);
    console.log('@animationId', animationId);
  };
};

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPosition;
    console.log("@currentTranslate", currentTranslate);
  };
};

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationId);

  console.log('@isDragging', isDragging);

  const movedBy = currentTranslate - previousTranslate;

  if ((movedBy < -100) && (currentIndex <= current)) {
    if (current === slidesItems.length - 1) {
      currentTranslate = (slidesItems.length - 3) * -itemWidth;
      previousTranslate = currentTranslate;

      return;
    };

    current = current + 1;
    currentIndex = currentIndex + 1;
  };

  if (movedBy > 100 && currentIndex > 0) {
    currentIndex = currentIndex - 1;
    console.log('currentIndex', currentIndex);
  };

  currentTranslate = currentIndex * -itemWidth;
  previousTranslate = currentTranslate;
  sliderContainerElement.style.transform = `translateX(${currentTranslate}px)`;

};

// function prevButton() {
//   if (current === 2) return;

//   current = current - 1;

//   margin = margin + itemWidth;
//   sliderContainerElement.style.marginLeft = margin + 'px';

//   console.log(current);
// };

// function nextButton() {
//   if (current === 3) return;

//   current = current + 1;

//   margin = margin - itemWidth;
//   sliderContainerElement.style.marginLeft = margin + 'px';

//   console.log(current);
// };