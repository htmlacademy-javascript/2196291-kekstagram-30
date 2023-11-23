// import { addThumbnailsToContainer } from './rendering.js';
// import { createElementPhotos } from './rendering.js';
import { createUserPicture } from './rendering.js';
import './form-opening.js';
import './form-validation.js';
// export { renderBigPicture } from './big-picture.js';
import { loadPictures } from './api.js';
import { showErrorMessage} from './data.js';
import { initFilter } from './filter.js';


// const pictureContainer = document.querySelector('.pictures');


async function bootstrap() {
  try {
    const pictures = await loadPictures();
    // addThumbnailsToContainer(pictures, pictureContainer);
    createUserPicture(pictures);
    // eslint-disable-next-line no-console
    // console.log('sdfgdf');
    initFilter(pictures);

  } catch(error) {
    showErrorMessage();
  }
}
// debugger;
bootstrap();
