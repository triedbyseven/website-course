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

export {
  renderErrors,
  renderClearErrors
};