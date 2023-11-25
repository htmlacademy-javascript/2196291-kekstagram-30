// сообщение об ошивке будет висеть не меньше 5 сек
const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

// сообщение об ошибке
function showErrorMessage() {
  const errorElement = errorMessageTemplate.cloneNode(true);
  document.body.append (errorElement);
  setTimeout (() => {
    errorElement. remove();
  },
  REMOVE_MESSAGE_TIMEOUT) ;
}

const bodyModalOpenAdd = () => {
  document.body.classList.add('modal-open');
};

const bodyModalOpenRemove = () => {
  document.body.classList.remove('modal-open');
};

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));


function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { showErrorMessage, debounce, getRandomIndex, bodyModalOpenAdd, bodyModalOpenRemove };
