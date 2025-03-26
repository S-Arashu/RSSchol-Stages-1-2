import '../public/styles.css';

import createTitleApp from './builders/app';
import { create } from './builders/mainBlock';
import { createInput } from './builders/inputFields';

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

  // if (localStorage.count !== '0') {
  const count = +localStorage.count;
  for (let i = count; i > 0; i -= 1) {
    createInput(title, i);
  }
  // }
});

const title = createTitleApp();

document.body.append(title);

create(title);
