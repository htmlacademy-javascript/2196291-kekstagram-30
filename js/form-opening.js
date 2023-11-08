import {pristine} from './form-validation.js';
const imageUploadForm = document.querySelector('.img-upload__form'); // находим формц
const openForm = document.querySelector('.img-upload__overlay');// находим форму редактирования
const openFormButton = document.getElementById('upload-file');// находим элемент на который будем кликать
const bodyContainer = document.getElementsByTagName('body')[0];
const closeFormButton = document.querySelector('.img-upload__cancel');
const inputHashtag = document.querySelector('.text__hashtags'); // находим input hashtag
const inputComment = document.querySelector('.text__description'); // находим input коментариев

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    сloseForm();
  }
};

// функия открытия формы
function openDownloadForm () {
  openForm.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}
// функия закрытия формы
function сloseForm () {
  openForm.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imageUploadForm.reset(); // очищаем форму
  pristine.reset(); // сбрасываем pristine
}

openFormButton.onchange = function () {
  openDownloadForm();
};


closeFormButton.addEventListener('click', () => {
  сloseForm();
});

closeFormButton.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    сloseForm();
  }
});

// функция отменяет нажатие Escape если input активны
const unPressEscape = (item) => {
  item.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocumentKeydown);
  });
  item.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocumentKeydown);
  });
};
unPressEscape(inputHashtag);
unPressEscape(inputComment);
