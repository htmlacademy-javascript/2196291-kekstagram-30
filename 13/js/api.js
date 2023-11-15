const SERVE_URL = 'https://30.javascript.pages.academy/kekstagram';

const ServerRouete = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [HttpMethod.GET]: 'Не удалось загрузить данные. Попробуйте ещё раз',
  [HttpMethod.POST]: 'Не удалось отправить данные формы',
};


async function request(url, method = HttpMethod.GET, body = null) {
  const response = await fetch(url, { method, body });
  if (! response.ok) {
    throw new Error(ErrorText[method]) ;
  }

  return response.json();
}


async function loadPictures() {
  return request(SERVE_URL + ServerRouete.GET_DATA);
}

async function sendPictures(PictureData) {
  return request(
    SERVE_URL + ServerRouete.SEND_DATA,
    HttpMethod.POST,
    PictureData
  );
}

export {loadPictures, sendPictures};
