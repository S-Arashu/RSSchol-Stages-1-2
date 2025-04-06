import { clearList } from './clearList';
import { loadOptions } from './loadOptions';
import { containerForOptions } from './mainBlock';

export function downloadData(elem: {
  setAttribute: (arg0: string, arg1: string) => void;
  after: (arg0: HTMLInputElement) => void;
  addEventListener: (arg0: string, arg1: () => void) => void;
}) {
  elem.setAttribute('id', 'loadButton');
  const fileInput = document.createElement('input');

  fileInput.setAttribute('type', 'file');
  fileInput.setAttribute('id', 'fileInput');
  fileInput.setAttribute('accept', '.json');
  fileInput.setAttribute('style', 'display: none;');
  elem.after(fileInput);
  elem.addEventListener('click', function () {
    fileInput.click();
  });
  fileInput.addEventListener('change', event => {
    if (event.target && event.target instanceof HTMLInputElement) {
      if (event.target.files) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader(); // Create a FileReader to read the file
          reader.onload = e => {
            try {
              console.log(typeof e.target?.result === 'string');
              if (e.target && typeof e.target?.result === 'string') {
                const jsonObject = JSON.parse(e.target.result); // Parse the JSON data
                console.log(jsonObject); // Log the resulting object to the console
                clearList(containerForOptions);
                let objLength;
                let weightLength = [];
                let titleLength = [];
                let objCount;
                for (let key of Object.keys(jsonObject)) {
                  // objLength = Math.max(weightLength, titleLength);
                  console.log(key[0] === 'o');
                  if (key[0] === 'o') {
                    titleLength.push(+key.replace(/\D/g, ''));
                  } else if (key[0] === '#') {
                    weightLength.push(+key.replace(/\D/g, ''));
                  }

                  if (weightLength.length > titleLength.length) {
                    objCount = weightLength.slice(0);
                  } else {
                    objCount = titleLength.slice(0);
                  }
                }
                // const objLength = Object.keys(jsonObject).length;
                const objData = jsonObject;
                // let objCount = [];
                if (objCount) {
                  // for (let i = 1; i <= objLength; i += 1) {
                  //   objCount.push(i);
                  // }
                  localStorage.setItem('count', JSON.stringify(objCount));
                  loadOptions(objData);
                  localStorage.setItem('dataFromInputs', JSON.stringify(objData));
                }
              }
            } catch (error) {
              console.error('Error parsing JSON:', error); // Handle JSON parsing errors
            }
          };

          reader.onerror = error => {
            console.error('Error reading file:', error); // Handle file reading errors
          };

          reader.readAsText(file); // Read the file as text
        } else {
          console.error('No file selected'); // Handle case where no file is selected
        }
      }
    }
  });
}
