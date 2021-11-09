function reportWindowSize() {
  itemWidth = containerElement.offsetWidth / 3;

  for (let i = 0; i < sliderContainerElement.children.length; i++) {
    const liNode = sliderContainerElement.children[i]

    liNode.style.width = itemWidth + 'px';
  };

  current = 2;
  margin = 0;
  sliderContainerElement.style.marginLeft = margin + 'px';
};


function handleOnResize() {
  clearTimeout(timeoutInstance);

  timeoutInstance = setTimeout(reportWindowSize, 500); // 5 second delay
};