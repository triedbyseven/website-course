function loadModalContactUs() {
  const overlayNode = document.getElementById('overlay');
  const contactMeNodes = document.querySelectorAll('.contact-me');

 overlayNode.children[0].addEventListener('click', () => {
   overlayNode.style.display = 'none';
 });

 contactMeNodes.forEach(node => node.addEventListener('click', (event) => {
   overlayNode.style.display = 'flex';
 }));
};

export default loadModalContactUs;