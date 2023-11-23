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


// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };
// // функция по поиску случайного элемента в массиве
// const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];


function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { showErrorMessage, debounce };
