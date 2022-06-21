import { renderErrors, renderClearErrors } from './render.js';
import { validateFullName, validateEmail, validatePhone, validateProjectDetails } from './validators.js';
import { filterNumbers, clearForm, createPhoneNumberParts } from './helpers.js';

const characterCountNode = document.querySelector('.character-count');

let fullName = '';
let email = '';
let phone = '';
let projectDetails = '';

const sendGridEmail = async () => {
  // const url = 'http://localhost:3001';
  const url = 'https://api.devtechkita.com/';
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

const submitListener = (event) => {
  event.preventDefault();
};

const onFullNameChangeListener = (event) => {
  fullName = event.target.value;
};

const onEmailChangeListener = (event) => {
  email = event.target.value;
};

const onPhoneInputListener = (event) => {
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
};

const onPhoneKeyDownListener = (event) => {
  if (event.key === 'Backspace' && phone.length === 4) {
    const phoneValue = phone.slice(0, -2);

    phone = phoneValue;
    event.currentTarget.value = phoneValue;

    return event.preventDefault();
  };

  if (event.key === 'Backspace' && phone.length === 8) {
    const phoneValue = phone.slice(0, -2);

    phone = phoneValue;
    event.currentTarget.value = phoneValue;

    return event.preventDefault();
  };
};

const onProjectDetailsInputListener = (event) => {
  projectDetails = event.target.value;
  characterCountNode.children[0].innerText = projectDetails.length;
};

const onProjectDetailsKeyDownListener = (event) => {
  if (event.key === 'Backspace' && projectDetails.length >= 300) {
    return;
  };

  if (projectDetails.length >= 300) {
    return event.preventDefault();
  }
};

const onFormClickListener = () => {
  const resultFullName = validateFullName(fullName);
  const resultEmail = validateEmail(email);
  const resultPhone = validatePhone(phone);
  const resultProjectDetails = validateProjectDetails(projectDetails);

  if (resultFullName) return renderErrors(resultFullName);
  if (resultEmail) return renderErrors(resultEmail);
  if (resultPhone) return renderErrors(resultPhone);
  if (resultProjectDetails) return renderErrors(resultProjectDetails);

  renderClearErrors();

  // Send Grid API Call
  sendGridEmail();

  clearForm();
};

export {
  submitListener,
  onFullNameChangeListener,
  onEmailChangeListener,
  onPhoneInputListener,
  onPhoneKeyDownListener,
  onProjectDetailsInputListener,
  onProjectDetailsKeyDownListener,
  onFormClickListener
};