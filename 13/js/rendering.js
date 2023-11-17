import { renderBigPicture } from './big-picture.js';
const getTemplatePicture = () => document.querySelector('#picture').content.querySelector('.picture');


const createUserPicture = ({ url, likes, comments, description}) => {
  const userPicture = getTemplatePicture().cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  // userPicture.dataset.userPictureId = id;
  // добавляем обработчик события при колике на минеатюре отрисовывается большое изображение
  userPicture.addEventListener('click', () => {
    renderBigPicture({ url, description, likes, comments });

  });
  return userPicture;
};

const addThumbnailsToContainer = (pictures, container) => {
  const userPictures = pictures.map(createUserPicture);
  container.append(...userPictures);
};

export { addThumbnailsToContainer };
