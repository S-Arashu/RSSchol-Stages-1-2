import '../../public/styles.css';
import { Buttons } from './buttons';
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
    localStorage.count = '1';
  }

  const container = document.createElement('div');
  container.classList.add('container');
  parentTag.append(container);

  for (let i = 0; i < NUM_OF_BUTTONS; i += 1) {
    const button = new Buttons('button', NAMES_OF_BUTTONS[i], 'buttonList');
    const elementOfContainer = button.createButton();
    container.append(elementOfContainer);

    if (i === 0) {
      elementOfContainer.addEventListener('click', () => {
        let numOfElem = localStorage.count;
        numOfElem = +numOfElem + 1;
        createInput(container, numOfElem);

        localStorage.count = numOfElem;
      });
    }
  }
}
