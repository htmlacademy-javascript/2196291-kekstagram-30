import { getSimilarPictures } from './data.js';
import { addThumbnailsToContainer } from './rendering.js';

const pictures = getSimilarPictures();
const pictureContainer = document.querySelector('.pictures');

addThumbnailsToContainer(pictures, pictureContainer);
