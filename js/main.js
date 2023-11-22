import { addThumbnailsToContainer } from './rendering.js';
import './form-opening.js';
import './form-validation.js';
// export { renderBigPicture } from './big-picture.js';
import { loadPictures } from './api.js';
import { showErrorMessage} from './data.js';


const pictureContainer = document.querySelector('.pictures');


async function bootstrap() {
  try {
    const pictures = await loadPictures();
    addThumbnailsToContainer(pictures, pictureContainer);
  } catch(error) {
    showErrorMessage();
  }

}
bootstrap();
