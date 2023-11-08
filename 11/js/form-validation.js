const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadText = document.querySelector('.img-upload__text');
const formHashtag = imageUploadText.querySelector('.text__hashtags');
// const formDescription = imageUploadText.querySelector ('.text__description');
const pristine = new Pristine(imageUploadForm, {
  // Элемент, на который будут добавляться классы
  classTo: 'img-upload__field-wrapper',
  // Элемент, куда будет выводиться текст с ошибкой
  errorTextParent: 'img-upload__field-wrapper',
});
// первый аргумент - элемент формы, который мы хотим валидировать.
// второй аргумент - функция проверки
// третий аргумент - сообщение об ошибке
const normilize = (value) => {
  // Убираем лишние пробелы по краям массива с комметами, разделяем хэштеги пробелами и передаем в новый массив те элементы, которые не пустые
  const noNormilizeArray = value.trim().split(' ');
  const normilizeArray = noNormilizeArray.filter((tag) => tag.length > 0);
  return normilizeArray;
};
// Для разных ошибок показываются разные сообщения. Следует разделять случаи, когда:
// 1. введён невалидный хэш-тег;
const isValidateTextHashtag = (textHashtag) => normilize(textHashtag).every((tag) => VALID_SYMBOLS.test(tag));
pristine.addValidator(
  formHashtag,
  isValidateTextHashtag,
  'Хэштег начинаться с #, состоять из букв и чисел и не превыщать 20 символов'
);
// 2. превышено количество хэш-тегов;
const isValidCountHashtag = (textHashtag) => normilize(textHashtag).length <= MAX_HASHTAG_COUNT;
pristine.addValidator(
  formHashtag,
  isValidCountHashtag,
  'Максимальное количество хэштегов - 5'
);
// 3. хэш-теги повторяются.
const isUniqueHashtag = (textHashtag) => {
  //приведем все к строчным буквам
  const lowerCase = normilize(textHashtag).map((tag) => tag.toLowerCase());
  return lowerCase.length === new Set(lowerCase).size;
};
pristine.addValidator(
  formHashtag,
  isUniqueHashtag,
  'Хэштеги должны быть уникальными'
);

// Проверка валидации при отправке формы
imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {imageUploadForm, pristine};
