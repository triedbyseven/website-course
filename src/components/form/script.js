const formNode = document.getElementById('form');
const inputFullNameNode = document.getElementById('fullName');
const inputEmailNode = document.getElementById('email');
const inputPhoneNode = document.getElementById('phone');
const inputProjectDetailsNode = document.getElementById('projectDetails');
const formSubmitNode = document.getElementById('formSubmit');
const characterCountNode = document.querySelector('.character-count');

let fullName = '';
let email = '';
let phone = '';
let projectDetails = '';

const validateFullName = (value) => {
  if ( !isRequired(value) ) return 'Full name can not be empty.';

  if ( !isBetween(value.length, 2, 30) ) return 'Full name must be between 2 and 30 characters.';

  return '';
};

const validateEmail = (value) => {
  if (!isRequired(value)) return 'Fields cannot be empty.';

  if (!isRegEmailExpression(value)) return 'This is not a valid email please make sure @ and .com are included.';

  return '';
};

const validatePhone = (value) => {
  if (!isRequired(value)) return 'Phone cannot be empty.';

  if (!isPhone(value)) return 'Phone must be a valid 10 digit number.';

  return '';
};

const validateProjectDetails = (value) => {
  if (!isRequired(value)) return 'Project details cannot be empty.';

  if (!isBetween(value.length, 10, 300)) return 'Project details must be between 10 and 300 characters.';

  return '';
};

const isRequired = (value) => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isRegEmailExpression = (value) => {
  const atExpression = /@/;
  const comExpression = /.com/;

  return atExpression.test(value) && comExpression.test(value);
};

const isPhone = (value) => {
  if (value.length === 12) return true;

  return false;
};

const filterNumbers = (value) => {
  const phoneNumberInput = value;
  const regExp = /\d/;
  let numbersSplit = [];
  let numbersNoDashes = [];
  let phoneArray = [];

  numbersSplit = phoneNumberInput.split('');
  numbersNoDashes = numbersSplit.filter(letter => letter !== '-' ? true : false);
  numbersNoDashes.forEach((letter, index) => {
    if (regExp.test(letter)) phoneArray.push(letter);
  });

  const phoneArrayJoined = phoneArray.join('');

  return phoneArrayJoined;
};

const createPhoneNumberParts = (phoneNumber) => {
  const areaCodeDigits = phoneNumber.slice(0, 3);
  const regionDigits = phoneNumber.slice(3, 6);
  const lineDigits = phoneNumber.slice(6, 10);

  return { areaCodeDigits, regionDigits, lineDigits };
};

const renderErrors = (error) => {
  const errorsNode = document.querySelector('.errors');

  errorsNode.classList.add('hasErrors');
  errorsNode.children[0].innerText = error;
};

const renderClearErrors = () => {
  const errorsNode = document.querySelector('.errors');
  
  errorsNode.classList.remove('hasErrors');
  errorsNode.children[0].innerText = '';
};

const clearForm = () => {
  fullName = '';
  inputFullNameNode.value = '';
  email = '';
  inputEmailNode.value = '';
  phone = '';
  inputPhoneNode.value = '';
  projectDetails = '';
  inputProjectDetailsNode.value = '';
};

const sendGridEmail = async () => {
  const url = 'http://localhost:3001';
  const init = {
    method: 'POST',
    body: JSON.stringify({
      fullName: fullName,
      email: email,
      phone: phone,
      projectDetails: projectDetails
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  try {
    const response = await fetch(url, init);

    const jsonResponse = await response.json();
  
    console.log('sendgrid email', jsonResponse);
  } catch (error) {
    console.error(error); 
  };

};

formNode.addEventListener('submit', (event) => {
  event.preventDefault();
});

inputFullNameNode.addEventListener('change', (event) => {
 fullName = event.target.value;
});

inputEmailNode.addEventListener('change', (event) => {
  email = event.target.value;
});

inputPhoneNode.addEventListener('input', (event) => {
  let phoneNumber = '';
  let phoneNumberFiltered = '';
  let phoneNumberParts = '';

  phone = event.target.value;
  phoneNumberFiltered = filterNumbers(phone);
  phoneNumberParts = createPhoneNumberParts(phoneNumberFiltered);
  
  if (phoneNumberFiltered.replaceAll('-', '').length >= 6) {
    phoneNumber = `${phoneNumberParts.areaCodeDigits}-${phoneNumberParts.regionDigits}-${phoneNumberParts.lineDigits}`;
    phone = phoneNumber;
    event.target.value = phoneNumber;
    return;
  };

  
  if (phoneNumberFiltered.length >= 3) {
    phoneNumber = `${phoneNumberParts.areaCodeDigits}-${phoneNumberParts.regionDigits}`;
    phone = phoneNumber;
    event.target.value = phoneNumber;
    return;
  };

  phone = phoneNumberFiltered;
  event.target.value = phoneNumberFiltered;
});

inputPhoneNode.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace' && phone.length === 4 ) {
    const phoneValue = phone.slice(0, -2);

    phone = phoneValue;
    event.currentTarget.value = phoneValue;

    return event.preventDefault();
  };

  if (event.key === 'Backspace' && phone.length === 8 ) {
    const phoneValue = phone.slice(0, -2);

    phone = phoneValue;
    event.currentTarget.value = phoneValue;

    return event.preventDefault();
  };
});

inputProjectDetailsNode.addEventListener('input', (event) => {
  projectDetails = event.target.value;
  characterCountNode.children[0].innerText = projectDetails.length;
});

inputProjectDetailsNode.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace' && projectDetails.length >= 300) {
    return;
  };

  if (projectDetails.length >= 300) {
    return event.preventDefault();
  }
});

formSubmitNode.addEventListener('click', () => {
  const resultFullName = validateFullName(fullName);
  const resultEmail = validateEmail(email);
  const resultPhone = validatePhone(phone);
  const resultProjectDetails = validateProjectDetails(projectDetails);

  if ( resultFullName ) return renderErrors(resultFullName);
  if ( resultEmail ) return renderErrors(resultEmail);
  if ( resultPhone ) return renderErrors(resultPhone);
  if ( resultProjectDetails ) return renderErrors(resultProjectDetails);

  renderClearErrors();
   
  // Send Grid API Call
  sendGridEmail();

  clearForm();
});