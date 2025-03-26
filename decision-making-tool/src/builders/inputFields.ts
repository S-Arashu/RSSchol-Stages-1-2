import '../../public/styles.css';

export function createInput(
  parentTag: { prepend: (arg0: HTMLLIElement) => void },
  count: string | number,
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
  inputElem.setAttribute('value', '');
  inputElem.setAttribute('placeholder', 'Title');
  inputElem.setAttribute('name', 'title');
  inputElem.classList.add('input-item');
  label.append(inputElem);

  const inputSecondElem = document.createElement('input');
  inputSecondElem.setAttribute('type', 'number');
  inputSecondElem.setAttribute('value', '');
  inputSecondElem.setAttribute('placeholder', 'Weight');
  inputSecondElem.setAttribute('name', 'weight');
  inputSecondElem.classList.add('input-item');
  label.append(inputSecondElem);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('button-item');
  button.textContent = 'Delete';
  label.append(button);

  return liElem;
}
