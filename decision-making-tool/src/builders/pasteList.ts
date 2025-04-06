import { getFromLocalStorage, objData } from '..';
import { Buttons } from './buttons';
import { dialogWrongValue } from './dialog';
import { createInput } from './inputFields';
import { container, containerForOptions } from './mainBlock';

export let dialogElem: HTMLElement;

export function createPasteList() {
  const dialog = document.createElement('dialog');
  dialog.setAttribute('aria-label', 'Paste list');
  dialog.classList.add('popup');
  container.append(dialog);
  const dialogWrapper = document.createElement('div');
  dialogWrapper.classList.add('dialog-wrapper');
  dialog.append(dialogWrapper);
  const form = document.createElement('form');
  form.setAttribute('method', 'dialog');
  form.classList.add('formForDialog');
  dialogWrapper.append(form);
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

  dialogElem = dialog;

  dialog.showModal();

  cancelBut.addEventListener('click', () => {
    dialog.remove();
    location.hash = 'main';
  });

  form.addEventListener('keypress', function (event) {
    let key = event.key;
    if (key === 'Enter') {
      const lastSymbol = +textarea.value[textarea.value.length - 1];
      if (isNaN(lastSymbol)) {
        dialogWrongValue(container);
      }
    }
  });

  // dialog.addEventListener('keypress', function (event) {
  //   let key = event.key;

  //   if (key === 'Escape') {
  //     dialog.remove();
  //   }
  //   console.log(key);
  //   location.hash = 'main';
  // });

  const handleModalClick = (event: { clientX: number; clientY: number }) => {
    const modalRect = dialog.getBoundingClientRect();

    if (
      event.clientX < modalRect.left ||
      event.clientX > modalRect.right ||
      event.clientY < modalRect.top ||
      event.clientY > modalRect.bottom
    ) {
      dialog.remove();
      location.hash = 'main';
    }
  };

  dialog.addEventListener('click', handleModalClick);

  // dialog.addEventListener('click', closeOnBackDropClick);

  // function closeOnBackDropClick({ currentTarget, target }: MouseEvent): void {
  //   const dialogElement = currentTarget;

  //   if (dialogElement instanceof HTMLDialogElement) {
  //     const isClickedOnBackDrop = target === dialogElement;
  //     if (isClickedOnBackDrop && dialogElement) {
  //       dialogElement.close();
  //       dialog.remove();
  //       location.hash = 'main';
  //     }
  //   }
  // }

  confirmBut.addEventListener('click', event => {
    const lastSymbol = +textarea.value[textarea.value.length - 1];
    // let objData = getFromLocalStorage('dataFromInputs');
    const dataFromTextarea = textarea.value.split('\n');
    dataFromTextarea.forEach(arrayElem => {
      let data = arrayElem.split(/,[1-9]/);
      let dataNum = /,[1-9]/.exec(arrayElem);
      let countElem = getFromLocalStorage('count') || [];
      console.log(dataNum);
      if (dataNum) {
        if (countElem.length === 0) {
          countElem.push(1);
        } else {
          countElem.push(countElem[countElem.length - 1] + 1);
        }
        objData[`#${countElem[countElem.length - 1]}`] = dataNum[0]?.replace(',', '');
        objData[`option-#${countElem[countElem.length - 1]}`] = data[0];
        // let numOfElem = getFromLocalStorage('count') || [];

        createInput(
          containerForOptions,
          countElem[countElem.length - 1],
          data[0],
          +dataNum[0]?.replace(',', ''),
        );
        localStorage.setItem('count', JSON.stringify(countElem));
        const jsonString = JSON.stringify(objData);
        localStorage.setItem('dataFromInputs', jsonString);
        textarea.value = '';
      } else if (dataNum == null) {
        dialogWrongValue(containerForOptions);
        event.preventDefault();
      }
    });

    if (isNaN(lastSymbol)) {
      dialogWrongValue(containerForOptions);
      event.preventDefault();
    } else {
      dialog.remove();
      location.hash = 'main';
    }
  });

  dialog.addEventListener('cancel', event => {
    // if (event.key === 'Escape') {
    // if (dialog.open) {
    dialog.remove();
    location.hash = 'main';
    // }
    // dialog.remove();

    // function simulateClick() {
    //   const event = new MouseEvent('click');
    //   container.dispatchEvent(event); // Dispatch click on the 'start' button
    // }

    // // Adding event listener to start button
    // container.addEventListener('click', () => {
    //   console.log('click');
    // });

    // // Run simulateClick() to click the button programmatically (optional).
    // // Uncomment to simulate click immediately when the page loads.
    // simulateClick();
    // Step 1: Create a new event using the Event constructor
    // let eventMouse = new Event('keyup', {
    //   bubbles: true,
    //   cancelable: true,
    // });

    // // Step 2: Get the container element (make sure to define it)
    // const container = document.getElementById('your-container-id'); // Replace with your container ID

    // // Step 3: Attach the event listener to the container
    // if (container) {
    //   container.addEventListener(
    //     'keyup',
    //     function () {
    //       console.log('keyup event triggered'); // Changed 'click' to 'keyup'
    //     },
    //     false,
    //   );

    //   // Step 4: Dispatch the event
    //   container.dispatchEvent(eventMouse);
    // } else {
    //   console.error('Container element not found'); // Error handling if container is not found
    // }
    // window.setTimeout(() => {
    // container.blur;
    // }, 100);
    // location.hash = 'main';
    console.log('Remove dialog');
    // container.click();
    // }
  });

  // dialog.focus();
}
