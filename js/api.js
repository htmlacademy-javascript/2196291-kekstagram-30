const SERVE_URL = 'https://30.javascript.pages.academy/kekstagram';

const Route = {
  GET: '/data',
  POST: '/'
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные. Попробуйте ещё раз',
  [Method.POST]: 'Не удалось отправить данные формы',
};


const request = async (url, method = Method.GET, body = null) => {
  const response = await fetch(url, { method, body });
  if (! response.ok) {
    throw new Error(ErrorText[method]);
  }
  return response.json();
};


const loadPictures = () => request(SERVE_URL + Route.GET);

const sendPictures = (PictureData) => request(
  `${SERVE_URL + Route.POST}`,
  Method.POST,
  PictureData
);


export {loadPictures, sendPictures};
