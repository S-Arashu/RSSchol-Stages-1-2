import { getFromLocalStorage, objData } from '..';
import '../../public/styles.css';
import { Buttons } from './buttons';
import { dialogWrongValue } from './dialog';
import { createInput } from './inputFields';

const NAMES_OF_BUTTONS = [
  'Add Option',
  'Paste list',
  'Clear list',
  'Save list to file',
  'Load list from file',
  'Start',
];

const NUM_OF_BUTTONS = 6;

export function create(parentTag: { append: (arg0: HTMLDivElement) => void }) {
  if (!localStorage.count) {
    localStorage.setItem('count', JSON.stringify([1]));
  }

  const container = document.createElement('div');
  container.classList.add('container');
  parentTag.append(container);

  const dialog = document.createElement('dialog');
  dialog.setAttribute('aria-label', 'Paste list');
  dialog.classList.add('popup');
  container.append(dialog);
  const form = document.createElement('form');
  form.setAttribute('method', 'dialog');
  form.classList.add('formForDialog');
  dialog.append(form);
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.setAttribute('rows', '12');
  textarea.setAttribute('cols', '64');
  textarea.setAttribute(
    'placeholder',
    `
    Paste a list of new options in a CSV-like format:

title,1                 -> | title                 | 1 |
title with whitespace,2 -> | title with whitespace | 2 |
title , with , commas,3 -> | title , with , commas | 3 |
title with "quotes",4   -> | title with "quotes"   | 4 |`,
  );
  textarea.setAttribute('name', 'table');
  form.append(textarea);
  const containerForButtons = document.createElement('div');
  containerForButtons.classList.add('containerForButtons');
  form.append(containerForButtons);
  const cancel: Buttons = new Buttons('button', 'Cancel', 'cancelButton');
  const confirm: Buttons = new Buttons('button', 'Confirm', 'confirmButton');
  const cancelBut = cancel.createButton();
  const confirmBut = confirm.createButton();
  containerForButtons.append(cancelBut);
  containerForButtons.append(confirmBut);
  form.addEventListener('keypress', function (event) {
    let key = event.key;
    if (key === 'Enter') {
      const lastSymbol = +textarea.value[textarea.value.length - 1];
      // const firstNum =
      if (isNaN(lastSymbol)) {
        dialogWrongValue(container);
      }
    }
    console.log(key);
  });
  confirmBut.addEventListener('click', event => {
    const lastSymbol = +textarea.value[textarea.value.length - 1];

    const dataFromTextarea = textarea.value.split('\n');
    dataFromTextarea.forEach(arrayElem => {
      let data = arrayElem.split(/,[1-9]/);
      let dataNum = /,[1-9]/.exec(arrayElem);
      let countElem = getFromLocalStorage('count') || [];
      console.log(dataNum);
      if (dataNum) {
        objData[`#${countElem[countElem.length - 1] + 1}`] = dataNum[0]?.replace(',', '');
        objData[`option-#${countElem[countElem.length - 1] + 1}`] = data[0];
        // let numOfElem = getFromLocalStorage('count') || [];
        if (countElem.length === 0) {
          countElem.push(1);
        } else {
          countElem.push(countElem[countElem.length - 1] + 1);
        }
        localStorage.setItem('count', JSON.stringify(countElem));
        const jsonString = JSON.stringify(objData);
        localStorage.setItem('dataFromInputs', jsonString);
        createInput(
          container,
          countElem[countElem.length - 1],
          data[0],
          +dataNum[0]?.replace(',', ''),
        );
        textarea.value = '';
      } else if (dataNum == null) {
        dialogWrongValue(container);
        event.preventDefault();
      }
    });

    if (isNaN(lastSymbol)) {
      dialogWrongValue(container);
      event.preventDefault();
    }
  });

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

        createInput(container, numOfElem[numOfElem.length - 1]);

        localStorage.setItem('count', JSON.stringify(numOfElem));
      });
    }
    if (i === 1) {
      elementOfContainer.addEventListener('click', () => {
        dialog.showModal();
      });
    }
  }
}
