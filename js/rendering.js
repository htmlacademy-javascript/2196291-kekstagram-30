import { renderBigPicture } from './big-picture.js';
const getTemplatePicture = () => document.querySelector('#picture').content.querySelector('.picture');

// const createUserPicture = ({ url, likes, comments, description}) => {
//   const userPicture = getTemplatePicture().cloneNode(true);
//   userPicture.querySelector('.picture__img').src = url;
//   userPicture.querySelector('.picture__likes').textContent = likes;
//   userPicture.querySelector('.picture__comments').textContent = comments.length;
//   // добавляем обработчик события при колике на минеатюре отрисовывается большое изображение
//   userPicture.addEventListener('click', () => {
//     renderBigPicture({ url, description, likes, comments });

//   });
//   return userPicture;

// };


// // можно перенести эту функцию в createUserPicture
// const addThumbnailsToContainer = (pictures, container) => {
//   const userPictures = pictures.map(createUserPicture);
//   container.append(...userPictures);
// };


// export { addThumbnailsToContainer , createUserPicture};

const picturesListFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const createUserPicture = (dataUserPicture) => {
  dataUserPicture.forEach(({ url, likes, comments, description}) => {
    const userPicture = getTemplatePicture().cloneNode(true);
    userPicture.querySelector('.picture__img').src = url;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comments.length;
    // добавляем обработчик события при колике на минеатюре отрисовывается большое изображение
    userPicture.addEventListener('click', () => {
      renderBigPicture({ url, description, likes, comments });

    });
    picturesListFragment.append(userPicture);
  });
  picturesContainer.append(picturesListFragment);
};

export { createUserPicture };
