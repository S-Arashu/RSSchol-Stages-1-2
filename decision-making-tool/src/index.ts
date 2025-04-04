import '../public/styles.css';

import createTitleApp from './builders/app';
import { container, containerForOptions, create, startBut } from './builders/mainBlock';
import { createInput } from './builders/inputFields';
import { loadOptions } from './builders/loadOptions';
import { createChoosePage } from './builders/wheel';
import { dialogWrongValue } from './builders/dialog';
import { createPasteList, dialogElem } from './builders/pasteList';

const retrievedObject = getFromLocalStorage('dataFromInputs');
const countElem = getFromLocalStorage('count');

export const objData: {
  [key: string]: string | number | RegExpExecArray | null | string[] | undefined;
} = retrievedObject || {};

export const title = createTitleApp();

document.body.append(title);

create(title);

// export const containerForOptions = document.createElement('div');
containerForOptions.classList.add('containerForOptions');
title.append(containerForOptions);

export function getFromLocalStorage(key: string) {
  const jsonString = localStorage.getItem(key);
  // Convert JSON string back to object
  return jsonString ? JSON.parse(jsonString) : null;
}

// Call the function to retrieve the object

window.addEventListener('load', event => {
  if (!localStorage.page) {
    containerForOptions.textContent = '';
    container.textContent = '';
    localStorage.page = '0';
    location.hash = 'main';

    document.body.append(title);

    create(title);

    // export const containerForOptions = document.createElement('div');
    containerForOptions.classList.add('containerForOptions');
    title.append(containerForOptions);
    loadOptions(objData);
    console.log('page reload with no data');
  }

  if (localStorage.page === '0') {
    containerForOptions.textContent = '';
    container.textContent = '';
    location.hash = 'main';

    document.body.append(title);

    create(title);

    // export const containerForOptions = document.createElement('div');
    containerForOptions.classList.add('containerForOptions');
    title.append(containerForOptions);
    loadOptions(objData);
    console.log('page reload with main');
  }

  if (localStorage.page === '1') {
    location.hash = 'decision-maker';
    createChoosePage();
    console.log('page reload with decision');
  }
  // if (localStorage.count !== '0') {
  // const count = countElem || [1];
  // let valOpt: string | undefined;
  // let valW: number | undefined;
  // for (let i = 0; i <= count.length - 1; i += 1) {
  //   valOpt = '';
  //   valW = 0;
  //   for (let key of Object.keys(objData)) {
  //     if (count[i] === +key.replace(/\D/g, '') && key[0] === 'o') {
  //       valOpt = String(objData[key]);
  //     } else if (count[i] === +key.replace(/\D/g, '') && key[0] === '#' && objData[key]) {
  //       valW = +objData[key];
  //     } else {
  //       continue;
  //     }
  //   }

  //   // if (valOpt !== undefined && valW !== undefined) {
  //   createInput(containerForOptions, count[i], valOpt, valW);
  //   // }
  // }

  // }
});

function locationHashChanged() {
  if (location.hash === '#main') {
    const dataObj = getFromLocalStorage('dataFromInputs');
    containerForOptions.textContent = '';
    container.textContent = '';
    localStorage.page = '0';

    document.body.append(title);

    create(title);

    // export const containerForOptions = document.createElement('div');
    containerForOptions.classList.add('containerForOptions');
    title.append(containerForOptions);
    loadOptions(dataObj);
    console.log('hash changed to main');
  }

  if (location.hash === '#decision-maker') {
    // location.hash = 'main';
    // localStorage.page = '1';
    startBut.click();
    // document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    console.log('hash changed to decision');
  }
}

window.onhashchange = locationHashChanged;

window.addEventListener('keydown', event => {
  console.log(event.target);
});
