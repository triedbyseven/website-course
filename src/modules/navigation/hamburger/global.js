export const overlayElement = document.getElementById('hamburger-menu');
export let isToggled = false;
export let current = 0;

// Setters
export function setIsToggled(toggleValue) {
  isToggled = toggleValue;
};

export function setCurrent(currentValue) {
  current = currentValue;
};