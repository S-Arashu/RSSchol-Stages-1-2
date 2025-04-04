import * as fs from 'fs';

import { getFromLocalStorage, isMusic, objData, SOUNDOFF, SOUNDON } from '..';
import '../../public/styles.css';
import { Buttons } from './buttons';
import { clearList } from './clearList';
import { dialogWrongValue } from './dialog';
import { createInput } from './inputFields';
import { saveToFile } from './saveData';
import { downloadData } from './downloadData';
import { loadOptions } from './loadOptions';
import { createChoosePage, soundButton } from './wheel';
import { createPasteList } from './pasteList';

const NAMES_OF_BUTTONS = [
  'Add Option',
  'Paste list',
  'Clear list',
  'Save list to file',
  'Load list from file',
  'Start',
];

export let startBut: HTMLElement;

const NUM_OF_BUTTONS = 6;

export const container = document.createElement('div');
export const containerForOptions = document.createElement('div');

export function create(parentTag: { after: (arg0: HTMLDivElement) => void }) {
  if (!localStorage.count) {
    localStorage.setItem('count', JSON.stringify([1]));
  }

  // const container = document.createElement('div');
  containerForOptions.classList.add('container');
  container.setAttribute('tabindex', '1');
  container.classList.add('container');
  parentTag.after(containerForOptions);
  parentTag.after(container);

  //   const dialog = document.createElement('dialog');
  //   dialog.setAttribute('aria-label', 'Paste list');
  //   dialog.classList.add('popup');
  //   container.append(dialog);
  //   const dialogWrapper = document.createElement('div');
  //   dialogWrapper.classList.add('dialog-wrapper');
  //   dialog.append(dialogWrapper);
  //   const form = document.createElement('form');
  //   form.setAttribute('method', 'dialog');
  //   form.classList.add('formForDialog');
  //   dialogWrapper.append(form);
  //   const textarea = document.createElement('textarea');
  //   textarea.classList.add('textarea');
  //   textarea.setAttribute('rows', '12');
  //   textarea.setAttribute('cols', '64');
  //   textarea.setAttribute(
  //     'placeholder',
  //     `
  //     Paste a list of new options in a CSV-like format:

  // title,1                 -> | title                 | 1 |
  // title with whitespace,2 -> | title with whitespace | 2 |
  // title , with , commas,3 -> | title , with , commas | 3 |
  // title with "quotes",4   -> | title with "quotes"   | 4 |`,
  //   );
  //   textarea.setAttribute('name', 'table');
  //   form.append(textarea);
  //   const containerForButtons = document.createElement('div');
  //   containerForButtons.classList.add('containerForButtons');
  //   form.append(containerForButtons);
  //   const cancel: Buttons = new Buttons('button', 'Cancel', 'cancelButton');
  //   const confirm: Buttons = new Buttons('button', 'Confirm', 'confirmButton');
  //   const cancelBut = cancel.createButton();
  //   const confirmBut = confirm.createButton();
  //   containerForButtons.append(cancelBut);
  //   containerForButtons.append(confirmBut);

  //   cancelBut.addEventListener('click', () => {
  //     dialog.remove();
  //   });

  //   form.addEventListener('keypress', function (event) {
  //     let key = event.key;
  //     if (key === 'Enter') {
  //       const lastSymbol = +textarea.value[textarea.value.length - 1];
  //       if (isNaN(lastSymbol)) {
  //         dialogWrongValue(container);
  //       }
  //     }
  //   });

  //   document.addEventListener('keypress', function (event) {
  //     let key = event.key;

  //     if (key === 'Escape') {
  //       dialog.remove();
  //     }
  //     console.log(key);
  //   });

  //   dialog.addEventListener('click', closeOnBackDropClick);

  //   function closeOnBackDropClick({ currentTarget, target }: MouseEvent): void {
  //     const dialogElement = currentTarget;

  //     if (dialogElement instanceof HTMLDialogElement) {
  //       const isClickedOnBackDrop = target === dialogElement;
  //       if (isClickedOnBackDrop && dialogElement) {
  //         dialogElement.close();
  //         dialog.remove();
  //       }
  //     }
  //   }

  //   confirmBut.addEventListener('click', event => {
  //     const lastSymbol = +textarea.value[textarea.value.length - 1];
  //     // let objData = getFromLocalStorage('dataFromInputs');
  //     const dataFromTextarea = textarea.value.split('\n');
  //     dataFromTextarea.forEach(arrayElem => {
  //       let data = arrayElem.split(/,[1-9]/);
  //       let dataNum = /,[1-9]/.exec(arrayElem);
  //       let countElem = getFromLocalStorage('count') || [];
  //       console.log(dataNum);
  //       if (dataNum) {
  //         if (countElem.length === 0) {
  //           countElem.push(1);
  //         } else {
  //           countElem.push(countElem[countElem.length - 1] + 1);
  //         }
  //         objData[`#${countElem[countElem.length - 1]}`] = dataNum[0]?.replace(',', '');
  //         objData[`option-#${countElem[countElem.length - 1]}`] = data[0];
  //         // let numOfElem = getFromLocalStorage('count') || [];

  //         createInput(
  //           containerForOptions,
  //           countElem[countElem.length - 1],
  //           data[0],
  //           +dataNum[0]?.replace(',', ''),
  //         );
  //         localStorage.setItem('count', JSON.stringify(countElem));
  //         const jsonString = JSON.stringify(objData);
  //         localStorage.setItem('dataFromInputs', jsonString);
  //         textarea.value = '';
  //       } else if (dataNum == null) {
  //         dialogWrongValue(containerForOptions);
  //         event.preventDefault();
  //       }
  //     });

  //     if (isNaN(lastSymbol)) {
  //       dialogWrongValue(containerForOptions);
  //       event.preventDefault();
  //     }
  //     dialog.remove();
  //   });

  for (let i = 0; i < NUM_OF_BUTTONS; i += 1) {
    const button = new Buttons('button', NAMES_OF_BUTTONS[i], 'buttonList');
    const elementOfContainer = button.createButton();
    container.append(elementOfContainer);

    if (i === 0) {
      elementOfContainer.addEventListener('click', () => {
        let numOfElem = getFromLocalStorage('count') || [];
        console.log(numOfElem);
        if (numOfElem.length === 0) {
          numOfElem.push(1);
        } else {
          numOfElem.push(numOfElem[numOfElem.length - 1] + 1);
        }

        createInput(containerForOptions, numOfElem[numOfElem.length - 1]);

        localStorage.setItem('count', JSON.stringify(numOfElem));
      });
    }
    if (i === 1) {
      elementOfContainer.addEventListener('click', () => {
        // container.classList.add('container');
        // parentTag.after(containerForOptions);
        // parentTag.after(container);

        //         const dialog = document.createElement('dialog');
        //         dialog.setAttribute('aria-label', 'Paste list');
        //         dialog.classList.add('popup');
        //         container.append(dialog);
        //         const dialogWrapper = document.createElement('div');
        //         dialogWrapper.classList.add('dialog-wrapper');
        //         dialog.append(dialogWrapper);
        //         const form = document.createElement('form');
        //         form.setAttribute('method', 'dialog');
        //         form.classList.add('formForDialog');
        //         dialogWrapper.append(form);
        //         const textarea = document.createElement('textarea');
        //         textarea.classList.add('textarea');
        //         textarea.setAttribute('rows', '12');
        //         textarea.setAttribute('cols', '64');
        //         textarea.setAttribute(
        //           'placeholder',
        //           `
        //     Paste a list of new options in a CSV-like format:

        // title,1                 -> | title                 | 1 |
        // title with whitespace,2 -> | title with whitespace | 2 |
        // title , with , commas,3 -> | title , with , commas | 3 |
        // title with "quotes",4   -> | title with "quotes"   | 4 |`,
        //         );
        //         textarea.setAttribute('name', 'table');
        //         form.append(textarea);
        //         const containerForButtons = document.createElement('div');
        //         containerForButtons.classList.add('containerForButtons');
        //         form.append(containerForButtons);
        //         const cancel: Buttons = new Buttons('button', 'Cancel', 'cancelButton');
        //         const confirm: Buttons = new Buttons('button', 'Confirm', 'confirmButton');
        //         const cancelBut = cancel.createButton();
        //         const confirmBut = confirm.createButton();
        //         containerForButtons.append(cancelBut);
        //         containerForButtons.append(confirmBut);

        //         cancelBut.addEventListener('click', () => {
        //           dialog.remove();
        //         });

        //         form.addEventListener('keypress', function (event) {
        //           let key = event.key;
        //           if (key === 'Enter') {
        //             const lastSymbol = +textarea.value[textarea.value.length - 1];
        //             if (isNaN(lastSymbol)) {
        //               dialogWrongValue(container);
        //             }
        //           }
        //         });

        //         document.addEventListener('keypress', function (event) {
        //           let key = event.key;

        //           if (key === 'Escape') {
        //             dialog.remove();
        //           }
        //           console.log(key);
        //         });

        //         dialog.addEventListener('click', closeOnBackDropClick);

        //         function closeOnBackDropClick({ currentTarget, target }: MouseEvent): void {
        //           const dialogElement = currentTarget;

        //           if (dialogElement instanceof HTMLDialogElement) {
        //             const isClickedOnBackDrop = target === dialogElement;
        //             if (isClickedOnBackDrop && dialogElement) {
        //               dialogElement.close();
        //               dialog.remove();
        //             }
        //           }
        //         }

        //         confirmBut.addEventListener('click', event => {
        //           const lastSymbol = +textarea.value[textarea.value.length - 1];
        //           // let objData = getFromLocalStorage('dataFromInputs');
        //           const dataFromTextarea = textarea.value.split('\n');
        //           dataFromTextarea.forEach(arrayElem => {
        //             let data = arrayElem.split(/,[1-9]/);
        //             let dataNum = /,[1-9]/.exec(arrayElem);
        //             let countElem = getFromLocalStorage('count') || [];
        //             console.log(dataNum);
        //             if (dataNum) {
        //               if (countElem.length === 0) {
        //                 countElem.push(1);
        //               } else {
        //                 countElem.push(countElem[countElem.length - 1] + 1);
        //               }
        //               objData[`#${countElem[countElem.length - 1]}`] = dataNum[0]?.replace(',', '');
        //               objData[`option-#${countElem[countElem.length - 1]}`] = data[0];
        //               // let numOfElem = getFromLocalStorage('count') || [];

        //               createInput(
        //                 containerForOptions,
        //                 countElem[countElem.length - 1],
        //                 data[0],
        //                 +dataNum[0]?.replace(',', ''),
        //               );
        //               localStorage.setItem('count', JSON.stringify(countElem));
        //               const jsonString = JSON.stringify(objData);
        //               localStorage.setItem('dataFromInputs', jsonString);
        //               textarea.value = '';
        //             } else if (dataNum == null) {
        //               dialogWrongValue(containerForOptions);
        //               event.preventDefault();
        //             }
        //           });

        //           if (isNaN(lastSymbol)) {
        //             dialogWrongValue(containerForOptions);
        //             event.preventDefault();
        //           } else {
        //             dialog.remove();
        //           }
        //         });

        //         dialog.addEventListener('cancel', event => {
        //           // if (event.key === 'Escape') {
        //           dialog.remove();
        //           // }
        //         });
        //         dialog.showModal();
        createPasteList();
      });
    }
    if (i === 2) {
      elementOfContainer.addEventListener('click', () => {
        clearList(containerForOptions);
      });
    }
    if (i === 3) {
      elementOfContainer.addEventListener('click', () => {
        saveToFile();
      });
    }
    if (i === 4) {
      elementOfContainer.addEventListener('click', () => {
        // clearList(containerForOptions);
        downloadData(elementOfContainer);
      });
    }
    if (i === 5) {
      startBut = elementOfContainer;
      // location.hash = 'main';
      elementOfContainer.addEventListener('click', () => {
        // location.hash = 'main';
        if (
          !localStorage.getItem('dataFromInputs') ||
          Object.keys(getFromLocalStorage('dataFromInputs')).length < 4
        ) {
          createPasteList();
          dialogWrongValue(containerForOptions);
          // location.hash = 'main';
        } else {
          localStorage.page = '1';
          location.hash = 'decision-maker';
          createChoosePage();
          let isSound = Boolean(Number(localStorage.sound));
          if (!localStorage.sound) {
            isSound = true;
            localStorage.sound = '1';
            soundButton.textContent = SOUNDON;
            console.log('No sound');
          }

          if (localStorage.sound === '1') {
            isSound = true;
            soundButton.textContent = SOUNDON;
            console.log('Sound on');
          }

          if (localStorage.sound === '0') {
            isSound = false;
            soundButton.textContent = SOUNDOFF;
            console.log('Sound off');
          }
          // if (!isMusic) {
          //   // audio.setAttribute('autoplay', 'false');
          //   // audio.muted;
          //   // localStorage.sound = '0';
          //   soundButton.textContent = SOUNDOFF;
          // }

          // if (isMusic) {
          //   // audio.setAttribute('autoplay', 'true');
          //   // localStorage.sound = '1';
          //   soundButton.textContent = SOUNDON;
          //   // audio.play();
          // }
        }
        console.log(
          !localStorage.getItem('dataFromInputs') ||
            Object.keys(getFromLocalStorage('dataFromInputs')).length < 4,
        );
      });
    }
  }
}
