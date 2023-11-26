import {pristine} from './form-validation.js';
import {changeOriginalEffect, onEffectListChange} from './form-slider.js';
import { bodyModalOpenAdd, bodyModalOpenRemove } from './util.js';


const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imageUploadForm = document.querySelector('.img-upload__form'); // находим фору
const editingForm = imageUploadForm.querySelector('.img-upload__overlay');// находим форму редактирования
const addingNewImage = document.querySelector('.img-upload__input');// находим элемент на который будем кликать
// const bodyContainer = document.querySelector('body');
const closeFormButton = editingForm.querySelector('.img-upload__cancel');
const inputHashtag = editingForm.querySelector('.text__hashtags'); // находим input hashtag
const inputComment = editingForm.querySelector('.text__description'); // находим input коментариев
const effecstList = document.querySelector('.effects__list');// Список всех фильтров

// <Масштаб изображения>
const scaleSmaller = editingForm.querySelector('.scale__control--smaller');
const scaleBigger = editingForm.querySelector('.scale__control--bigger');
const scaleValue = editingForm.querySelector('.scale__control--value');
const scaleImage = editingForm.querySelector('.img-upload__preview img');
// Загрузка изображения пользователя
const fileChooser = document.querySelector('.img-upload__input');
const smallPreviews = document.querySelectorAll('.effects__preview');

let scaleNumber;

// <Масштаб изображения>
// Получаем число из строки
const getScaleNumber = (scaleString) => parseInt(scaleString.value, 10);


// Уменьшение изображения
const onMinButtonClick = () => {
  scaleNumber = getScaleNumber(scaleValue);
  if(scaleNumber > SCALE_MIN) {
    scaleValue.value = `${scaleNumber - SCALE_STEP}%`;
    scaleImage.style.transform = `scale(${(scaleNumber - SCALE_STEP) / 100})`;
  }
};

// Увеличение изображения
const onMaxButtonClick = () => {
  scaleNumber = getScaleNumber(scaleValue);
  if(scaleNumber < SCALE_MAX) {
    scaleValue.value = `${scaleNumber + SCALE_STEP}%`;
    scaleImage.style.transform = `scale(${(scaleNumber + SCALE_STEP) / 100})`;
  }
};


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    сloseForm();
  }
};


// функия открытия формы
const openDownloadForm = () => {
  editingForm.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  scaleSmaller.addEventListener('click', onMinButtonClick);
  scaleBigger.addEventListener('click', onMaxButtonClick);
  changeOriginalEffect();
  effecstList.addEventListener('change', onEffectListChange);
  bodyModalOpenAdd();

};

// функия закрытия формы
function сloseForm () {
  editingForm.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  scaleSmaller.removeEventListener('click', onMinButtonClick);
  scaleBigger.removeEventListener('click', onMaxButtonClick);
  effecstList.removeEventListener('change', onEffectListChange);
  imageUploadForm.reset(); // очищаем форму
  pristine.reset(); // сбрасываем pristine
  scaleImage.style.transform = '';
  bodyModalOpenRemove();
}


addingNewImage.addEventListener('change', () => {
  openDownloadForm();
});


closeFormButton.addEventListener('click', () => {
  сloseForm();
});

closeFormButton.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    сloseForm();
  }
});

// функция отменяет нажатие Escape если input активны
const unEventEscape = (item) => {
  item.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocumentKeydown);
  });
  item.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocumentKeydown);
  });
};
unEventEscape(inputHashtag);
unEventEscape(inputComment);


// Загрузка изображения пользователя
fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (matches) {
    scaleImage.src = URL.createObjectURL(file);
    smallPreviews.forEach((smallPreview) => {
      smallPreview.style.backgroundImage = `  url('${scaleImage.src}')`;
    });
  }
});


export { сloseForm };
