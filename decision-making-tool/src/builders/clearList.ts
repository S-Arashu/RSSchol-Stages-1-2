import { objData } from '..';

export function clearList(elemForClear: HTMLDivElement) {
  localStorage.setItem('dataFromInputs', JSON.stringify({}));
  localStorage.setItem('count', JSON.stringify([]));

  // if (objData){
  Object.keys(objData).forEach(key => delete objData[key]);
  // }

  elemForClear.textContent = '';
}
