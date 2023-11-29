import { createUserPicture } from './rendering.js';
import './form-validation.js';
import { loadPictures } from './api.js';
import { showErrorMessage} from './util.js';
import { initFilter } from './filter.js';


async function bootstrap() {
  try {
    const pictures = await loadPictures();
    createUserPicture(pictures);
    initFilter(pictures);

  } catch(error) {
    showErrorMessage();
  }
}
bootstrap();
