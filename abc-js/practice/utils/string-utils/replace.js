import { indexOf } from "./index-of.js";
import { substring } from "./substring.js";
import { checkIsString } from "./common.js";
import { len } from "./len.js";
/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replace(str, searchValue, replaceValue) {
  checkIsString(str, " text");
  checkIsString(searchValue, " search");
  checkIsString(replaceValue, " target");

  const index = indexOf(str, searchValue);
  if (index !== -1) {
    const leftPart = substring(str, 0, index);
    const rightPart = substring(str, index + searchValue.length);
    const replaced = leftPart + replaceValue + rightPart;
    return replaced;
  }
  return str;
}

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {}
