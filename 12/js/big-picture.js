/*Отрисовка полноразмерного изображения*/
const bigPicture = document.querySelector('.big-picture__preview');
const bigPicturesContainer = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const closeBigPicture = bigPicturesContainer.querySelector('#picture-cancel');
const renderComment = (({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
});

const createCommentsList = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.map((comment) => {
    commentsListFragment.append(renderComment(comment));
  });
  commentsContainer.append(commentsListFragment);
};

// закрытие большого ищображения
const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicturesContainer.classList.remove('modal-open');
    closeUserBigPicture();
    closeUserBigPictureEscape();
    document.body.classList.remove('modal-open');

  }
};

const renderBigPicture = ({ url, description, like, comments }) => {
  bigPicturesContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = like;
  bigPicture.querySelector('.social__caption').textContent = description;

  commentsContainer.innerHTML = '';
  createCommentsList(comments);
  document.addEventListener('keydown', onDocumentKeydown);

};

// скрывает большое изображение
function closeUserBigPicture() {
  bigPicturesContainer.classList.add('hidden');
}
// удаление обработчика по нажатию Escape
function closeUserBigPictureEscape() {
  document.removeEventListener('keydown', onDocumentKeydown) ;
}

// закрывает окно по клику мышки на крестик
closeBigPicture.addEventListener('click', () => {
  bigPicturesContainer.classList.add('hidden');
  bigPicturesContainer.classList.remove('modal-open');
});

export { renderBigPicture };
