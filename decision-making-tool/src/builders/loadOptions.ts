import { getFromLocalStorage } from '..';
import { createInput } from './inputFields';
import { containerForOptions } from './mainBlock';

export function loadOptions(object: {
  [x: string]: string | number | RegExpExecArray | null | string[] | undefined;
}) {
  const count = getFromLocalStorage('count') || [1];
  let valOpt: string | undefined;
  let valW: number | undefined;
  for (let i = 0; i < count.length; i += 1) {
    valOpt = '';
    valW = 0;
    for (let key of Object.keys(object)) {
      console.log(key);
      if (count[i] === +key.replace(/\D/g, '') && key[0] === 'o') {
        valOpt = String(object[key]);
      } else if (count[i] === +key.replace(/\D/g, '') && key[0] === '#' && object[key]) {
        valW = +object[key];
      } else {
        continue;
      }
    }

    // if (valOpt !== undefined && valW !== undefined) {
    createInput(containerForOptions, count[i], valOpt, valW);
  }
}
