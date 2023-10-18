const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const MAX_COMMENT_INDEX = 1000;
const MAX_COMMENT_COUNT = 5;
const COMMENT_MESSEGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Описание фото1', 'Описание фото2', 'Описание фото3', 'Описание фото4', 'Описание фото5', 'Описание фото6', 'Описание фото7',
  'Описание фото8', 'Описание фото9', 'Описание фото10', 'Описание фото11', 'Описание фото12', 'Описание фото13', 'Описание фото14',
  'Описание фото15', 'Описание фото16', 'Описание фото17', 'Описание фото18', 'Описание фото19', 'Описание фото20'
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Мартин',
  'Педро',
  'Рамзес',
  'Пауло',
  'Пабло',
  'Митрофан',
  'Иван Степанович',
  'Волан-де-Морт',
  'Азазелло',
  'Пендальф Серый'
];
//генерация рамдомного ID элемента
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// функция по поиску случайного элемента в массиве
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];
// функция создает массив комментариев
const createComment = () => {
  const randomAvatarIndex = getRandomInteger(1, AVATAR_COUNT); //создает аватар
  return {
    id: getRandomInteger(1, MAX_COMMENT_INDEX),
    avatar: `img/avatar-${randomAvatarIndex}.svg`,
    message: getRandomArrayElement(COMMENT_MESSEGE), // случайное сообщение из массива MESSEGE
    name: getRandomArrayElement(NAMES), // случайное Имя из массива NAMES
  };
};
// функция создает объекты
const createPicture = (pictureId) => {
  const randomLikeIndex = getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT); // рамдомное колличество лайков
  return {
    id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS), // случайное описание фото из массива DESCRIPTIONS
    like: randomLikeIndex, // колличество лайков
    comments: Array.from({ length: getRandomInteger(1, MAX_COMMENT_COUNT) }, createComment),
  };
};


const similarPicture = () => new Array(PICTURE_COUNT).fill().map((_, index) => createPicture(index + 1));
similarPicture();
