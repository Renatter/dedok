import { repeat } from "./repeat.js";
import { slice } from "./slice.js";
import { floatToInt } from "../number-utils/float-to-int.js";
import { checkIsString } from "./common.js";
import { len } from "./len.js";

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = " ") {
  checkIsString(text, " text");
  checkIsString(fillString, " fillString");
  let textLength = len(text);
  let fillStringLength = len(fillString);

  if (typeof maxLength === "undefined" || maxLength === null) {
    return text;
  }
  if (typeof maxLength !== "number") {
    throw new Error("invalid type of maxLength");
  }
  if (maxLength < textLength) {
    return text;
  }

  maxLength = maxLength - textLength;
  let parseRepeat = maxLength / fillStringLength;

  if (maxLength > fillStringLength) {
    fillString += repeat(fillString, floatToInt(parseRepeat));
  }
  return slice(fillString, 0, maxLength) + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = " ") {
  checkIsString(text, " text");
  checkIsString(fillString, " fillString");
  let textLength = len(text);
  let fillStringLength = len(fillString);

  if (typeof maxLength === "undefined" || maxLength === null) {
    return text;
  }
  if (typeof maxLength !== "number") {
    throw new Error("invalid type of maxLength");
  }
  if (maxLength < textLength) {
    return text;
  }

  maxLength = maxLength - text.length; //3
  let pareseRepeat = maxLength / fillString.length; //3

  if (maxLength > fillString.length) {
    fillString += repeat(fillString, floatToInt(pareseRepeat));
  }
  return text + slice(fillString, 0, maxLength);
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = " ") {}
