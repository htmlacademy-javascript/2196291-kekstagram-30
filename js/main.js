import { getSimilarPictures } from './data.js';
import { addThumbnailsToContainer } from './rendering.js';
export { renderBigPicture } from './big-picture.js';


const pictures = getSimilarPictures();
const pictureContainer = document.querySelector('.pictures');

addThumbnailsToContainer(pictures, pictureContainer);


