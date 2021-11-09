function prevButton() {
  if (current === 2) return;

  current = current - 1;

  marginLeft = marginLeft + itemWidth;
  sliderContainerElement.style.marginLeft = marginLeft + 'px';

  console.log(current);
}
function nextButton(event, itemLength) {
  if (current === 4) return;

  current = current + 1;

  marginLeft = marginLeft - itemWidth;
  sliderContainerElement.style.marginLeft = marginLeft + 'px';

  console.log(current);
}