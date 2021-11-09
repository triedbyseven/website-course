function prevButton() {
  if (current === 2) return;

  decrementPositionsByIndex()

  setPositionByIndex();
  setSliderPosition();

  console.log(current);
};

function nextButton() {
  if (current === itemLength - 1) return;

  incrementPositionsByIndex();

  setPositionByIndex();
  setSliderPosition();
  
  console.log(current);
};

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
};

function touchStart(index) {
  return function (event) {
    currentIndex = currentIndex;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
  };
};

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + (currentPosition - startPos);
  }
};

function touchEnd() {
  if (!isDragging) return;

  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy > -100 && movedBy < 100) resetThreshold(movedBy);

  if ( (movedBy <= -100) && (current < slidesLength - 1) ) incrementPositionsByIndex();

  if( ( movedBy >= 100) && (currentIndex > 0) ) decrementPositionsByIndex();

  setPositionByIndex();
  setSliderPosition();
};

function animation() {
  sliderContainerElement.style.transform = `translateX(${currentTranslate}px)`;
  setSliderPosition();

  if (isDragging) requestAnimationFrame(animation);
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -itemWidth;
  prevTranslate = currentTranslate;
};

function setSliderPosition() {
  sliderContainerElement.style.transform = `translateX(${currentTranslate}px)`;
};

function resetThreshold(movedBy) {
  console.warn(`Does not surpass threshold of ${movedBy}, returning slide back to default start position.`);
  currentTranslate = prevTranslate;
  sliderContainerElement.style.transform = `translateX(${currentTranslate}px)`;
};

function incrementPositionsByIndex() {
  current += 1;
  currentIndex += 1;
};

function decrementPositionsByIndex() {
  current -= 1;
  currentIndex -= 1;
};