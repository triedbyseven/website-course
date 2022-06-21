import { 
  submitListener, 
  onFullNameChangeListener, 
  onEmailChangeListener, 
  onPhoneInputListener, 
  onPhoneKeyDownListener,
  onProjectDetailsInputListener,
  onProjectDetailsKeyDownListener,
  onFormClickListener
} from './eventListenerCallBacks.js';

const loadForm = () => {
  const formNode = document.getElementById('form');
  const inputFullNameNode = document.getElementById('fullName');
  const inputEmailNode = document.getElementById('email');
  const inputPhoneNode = document.getElementById('phone');
  const inputProjectDetailsNode = document.getElementById('projectDetails');
  const formSubmitNode = document.getElementById('formSubmit');

  formNode.addEventListener('submit', submitListener);

  inputFullNameNode.addEventListener('change', onFullNameChangeListener);

  inputEmailNode.addEventListener('change', onEmailChangeListener);

  inputPhoneNode.addEventListener('input', onPhoneInputListener);

  inputPhoneNode.addEventListener('keydown', onPhoneKeyDownListener);

  inputProjectDetailsNode.addEventListener('input', onProjectDetailsInputListener);

  inputProjectDetailsNode.addEventListener('keydown', onProjectDetailsKeyDownListener);

  formSubmitNode.addEventListener('click', onFormClickListener);
};

export default loadForm;