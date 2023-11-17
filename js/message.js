const successMessageElement = document.querySelector('#success').content.querySelector('.success');

const errorMessageElement = document.querySelector('#error').content.querySelector('.error');

function hideMessage() {

  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  existsElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.addEventListener('click', onBodyClick);
}
function onCloseButtonClick() {
  hideMessage();
}

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
}

function onBodyClick(evt) {
  if (evt.target.closest('.success__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }
  hideMessage();
}

function showMessage(element, buttonClass) {
  document.body.append (element);
  element
    .querySelector(buttonClass)
    .addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.addEventListener('click', onBodyClick);
}

function showErrorMessage() {
  showMessage(errorMessageElement, '.error__button');
}

function showSuccessMessage() {
  showMessage (successMessageElement, '.success__button');
}


export { showSuccessMessage, showErrorMessage };
