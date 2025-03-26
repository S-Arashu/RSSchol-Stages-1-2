import '../../public/styles.css';
import { objData } from '..';

export function createInput(
  parentTag: { prepend: (arg0: HTMLLIElement) => void },
  count: string | number,
  valuesOpt?: string,
  valuesWeight?: number,
) {
  const liElem = document.createElement('li');
  liElem.classList.add('item');
  parentTag.prepend(liElem);

  const label = document.createElement('label');
  label.setAttribute('for', `option-#${count}`);
  label.textContent = `#${count}`;
  label.classList.add('label-item');
  liElem.append(label);

  const inputElem = document.createElement('input');
  inputElem.setAttribute('id', `option-#${count}`);
  inputElem.setAttribute('value', `${valuesOpt || ''}`);
  inputElem.setAttribute('placeholder', 'Title');
  inputElem.setAttribute('name', 'title');
  inputElem.classList.add('input-item');
  label.append(inputElem);

  const inputSecondElem = document.createElement('input');
  inputSecondElem.setAttribute('type', 'number');
  inputSecondElem.setAttribute('value', `${valuesWeight || ''}`);
  inputSecondElem.setAttribute('placeholder', 'Weight');
  inputSecondElem.setAttribute('name', 'weight');
  inputSecondElem.classList.add('input-item');
  label.append(inputSecondElem);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('button-item');
  button.textContent = 'Delete';
  label.append(button);

  button.addEventListener('click', () => {
    let previous: Element | null = button.previousElementSibling;

    if (previous instanceof HTMLInputElement) {
      let doublePrevious: Element | null = previous.previousElementSibling;

      if (doublePrevious instanceof HTMLInputElement) {
        let nameOfOption: string = doublePrevious.value;
        let weightOfOption: string = previous.value;
      }
    }
  });

  inputElem.oninput = saveData;
  inputSecondElem.oninput = saveData;

  function saveData(event: Event): void {
    const current = event.target;
    if (current instanceof HTMLInputElement) {
      if (current.id) {
        objData[current.id] = current.value;
        console.log(objData);
      } else if (
        !current.id &&
        current.previousSibling &&
        current.previousSibling.previousSibling?.nodeValue
      ) {
        objData[current.previousSibling.previousSibling?.nodeValue] = current.value;
        console.log(objData);
      }
    }

    const jsonString = JSON.stringify(objData);
    localStorage.setItem('dataFromInputs', jsonString);
  }

  return liElem;
}
