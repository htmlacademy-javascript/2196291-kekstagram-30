import { getSimilarPicture } from './data.js';


// import { similarPicture } from './data.js';
import { addThumbnailsToContainer } from './rendering.js';

const pictures = getSimilarPicture();
const pictureContainer = document.querySelector('.pictures');

addThumbnailsToContainer(pictures, pictureContainer);


console.log (getSimilarPicture());
