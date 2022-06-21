import { isRequired, isBetween, isRegEmailExpression, isPhone } from './helpers.js';

const validateFullName = (value) => {
  if (!isRequired(value)) return 'Full name can not be empty.';

  if (!isBetween(value.length, 2, 30)) return 'Full name must be between 2 and 30 characters.';

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

export {
  validateFullName,
  validateEmail,
  validatePhone,
  validateProjectDetails
};