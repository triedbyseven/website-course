function reportWindowSize() {
  itemWidth = containerElement.offsetWidth / 3;
  for (let i = 0; i < sliderContainerElement.children.length - 1; i++) {
    sliderContainerElement.children[i].style.width = itemWidth + 'px';
  }

  current = 2;
  marginLeft = 0;
  sliderContainerElement.style.marginLeft = marginLeft + 'px';
}


function handleOnResize() {
  clearTimeout(timeoutInstance);

  timeoutInstance = setTimeout(reportWindowSize, 500); // 5 second delay
}