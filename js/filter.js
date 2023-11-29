import { debounce, getRandomIndex } from './util.js';
import { createUserPicture } from './rendering.js';

const MAX_RANDOM_FILTER = 10; // колличество элементов в фильтре "случайные"

const filtersEl = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');


const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};


const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,

  [FilterEnum.RANDOM]: (data) => {
    const listRandomPictures = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while (listRandomPictures.length < max) {
      const index = getRandomIndex (0, data.length);
      if (!listRandomPictures.includes(index)) {
        listRandomPictures.push(index);
      }
    }
    return listRandomPictures.map((index) => data[index]);
  },
  [FilterEnum.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length),

};

const repaint = (event, filter, data) => {
  const filterData = filterHandlers[filter](data);
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
  createUserPicture(filterData);
  const currentActiveFilter = filterForm.querySelector('.img-filters__button--active');
  currentActiveFilter.classList.remove('img-filters__button--active');
  event.target.classList.add('img-filters__button--active');
};

const debouncedRepaint = debounce(repaint);

const initFilter = (data) => {
  filtersEl.classList.remove('img-filters--inactive');

  defaultButton.addEventListener('click', (event) => {
    debouncedRepaint(event, FilterEnum.DEFAULT, data);
  });
  randomButton.addEventListener('click', (event) => {
    debouncedRepaint(event, FilterEnum.RANDOM, data);

  });
  discussedButton.addEventListener('click', (event) => {
    debouncedRepaint(event, FilterEnum.DISCUSSED, data);

  });

};

export { initFilter };
