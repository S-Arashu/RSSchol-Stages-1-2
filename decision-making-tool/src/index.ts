import '../public/styles.css';

import createTitleApp from './builders/app';
import { create } from './builders/mainBlock';
import { createInput } from './builders/inputFields';

export function getFromLocalStorage(key: string) {
  const jsonString = localStorage.getItem(key);
  // Convert JSON string back to object
  return jsonString ? JSON.parse(jsonString) : null;
}

// Call the function to retrieve the object
const retrievedObject = getFromLocalStorage('dataFromInputs');
const countElem = getFromLocalStorage('count');

export const objData: {
  [key: string]: string | number | RegExpExecArray | null | string[] | undefined;
} = retrievedObject || {};

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
  const count = countElem || [1];
  let valOpt: string | undefined;
  let valW: number | undefined;
  for (let i = count.length - 1; i >= 0; i -= 1) {
    valOpt = '';
    valW = 0;
    for (let key of Object.keys(objData)) {
      if (count[i] === +key.replace(/\D/g, '') && key[0] === 'o') {
        valOpt = String(objData[key]);
        console.log('this' + key);
      } else if (count[i] === +key.replace(/\D/g, '') && key[0] === '#' && objData[key]) {
        valW = +objData[key];
        console.log('there' + key[key.length - 1]);
      } else {
        continue;
      }
    }

    // if (valOpt !== undefined && valW !== undefined) {
    createInput(title, count[i], valOpt, valW);
    // }
  }

  // }
});

const title = createTitleApp();

document.body.append(title);

create(title);
