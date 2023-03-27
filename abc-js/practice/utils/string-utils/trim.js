import { indexOf } from "./index-of.js";
import { len } from "./len.js";
import { slice } from "./slice.js";
import { checkIsString } from "./common.js";
const TRIM_SYMBOLS = " \n\t\v";
/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols = TRIM_SYMBOLS) {
  checkIsString(text, " text");
  checkIsString(trimSymbols, " trimSymbols");
  let startIndex = 0;
  let lenG = len(text);

  while (startIndex < lenG && indexOf(trimSymbols, text[startIndex]) !== -1) {
    startIndex++;
  }

  return slice(text, startIndex);
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/

export function trimEnd(text, trimSymbols = TRIM_SYMBOLS) {
  checkIsString(text, " text");
  checkIsString(trimSymbols, " trimSymbols");
  var endIndex = len(text) - 1;

  while (endIndex >= 0 && indexOf(trimSymbols, text[endIndex]) !== -1) {
    endIndex--;
  }

  return slice(text, 0, endIndex + 1);
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols = TRIM_SYMBOLS) {
  return trimEnd(trimStart(text, trimSymbols), trimSymbols);
}
