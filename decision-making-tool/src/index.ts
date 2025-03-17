import '../public/styles.css';

import createTitleApp from './builders/app';
import { create } from './builders/mainBlock';

window.addEventListener('load', event => {
  if (!localStorage.page) {
    localStorage.page = '0';
    location.hash = 'main';
  }

  if (localStorage.page === '0') {
    location.hash = 'main';
  }

  if (localStorage.page === '1') {
    location.hash = 'decision-maker';
  }
});

const title = createTitleApp();

document.body.append(title);

create(title);
