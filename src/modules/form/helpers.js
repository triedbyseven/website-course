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

export {
  isRequired,
  isBetween,
  isRegEmailExpression,
  isPhone,
  filterNumbers,
  createPhoneNumberParts,
  clearForm
};