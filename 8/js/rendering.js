const getTemplatePicture = () => document.querySelector('#picture').content.querySelector('.picture');


const createUserPicture = ({ url, like, comments }) => {
  const userPicture = getTemplatePicture().cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__likes').textContent = like;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  return userPicture;
};

const addThumbnailsToContainer = (pictures, container) => {
  const userPictures = pictures.map(({ url, like, comments }) => createUserPicture({ url, like, comments }));
  container.append(...userPictures);
};

export { addThumbnailsToContainer };
