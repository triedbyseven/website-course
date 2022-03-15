const inputFullNameNode = document.getElementById('fullName');
const inputEmailNode = document.getElementById('email');
const formSubmitNode = document.getElementById('formSubmit');

let fullName = '';
let email = '';

inputFullNameNode.addEventListener('change', (event) => {
  fullName = event.target.value;
});

inputEmailNode.addEventListener('change', (event) => {
  email = event.target.value;
});

formSubmitNode.addEventListener('click', () => {
  console.log('Captured full name data', fullName, email);
});