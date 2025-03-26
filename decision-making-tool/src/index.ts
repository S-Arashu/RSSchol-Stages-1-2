import '../public/styles.css';

import createTitleApp from './builders/app';
import { create } from './builders/mainBlock';
import { createInput } from './builders/inputFields';

function getFromLocalStorage(key: string) {
  const jsonString = localStorage.getItem(key);
  // Convert JSON string back to object
  return jsonString ? JSON.parse(jsonString) : null;
}

// Call the function to retrieve the object
const retrievedObject = getFromLocalStorage('dataFromInputs');

export const objData: { [key: string]: string | number } = retrievedObject || {};

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
  const count = +localStorage.count || 0;
  let valOpt: string | undefined;
  let valW: number | undefined;
  for (let i = count; i > 0; i -= 1) {
    valOpt = '';
    valW = 0;
    for (let key of Object.keys(objData)) {
      if (i === +key.replace(/\D/g, '') && key[0] === 'o') {
        valOpt = String(objData[key]);
        console.log('this' + key);
      } else if (i === +key.replace(/\D/g, '') && key[0] === '#') {
        valW = +objData[key];
        console.log('there' + key[key.length - 1]);
      } else {
        continue;
      }
    }

    // if (valOpt !== undefined && valW !== undefined) {
    createInput(title, i, valOpt, valW);
    // }
  }

  // }
});

const title = createTitleApp();

document.body.append(title);

create(title);
