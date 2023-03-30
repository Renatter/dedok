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

  const textLength = len(text);
  const fillStringLength = len(fillString);
  if (typeof maxLength === "undefined" || maxLength === null) {
    return text;
  }
  if (typeof maxLength !== "number") {
    throw new Error("invalid type of maxLength");
  }
  if (maxLength < textLength) {
    return text;
  }

  let repeatLength = maxLength - textLength;
  let parseRepeat = floatToInt(repeatLength / fillStringLength);
  if (repeatLength > fillStringLength) {
    fillString += repeat(fillString, parseRepeat);
  }
  return slice(fillString, 0, repeatLength) + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = " ") {
  checkIsString(text, " text");
  checkIsString(fillString, " fillString");

  const textLength = len(text);
  const fillStringLength = len(fillString);
  if (typeof maxLength === "undefined" || maxLength === null) {
    return text;
  }
  if (typeof maxLength !== "number") {
    throw new Error("invalid type of maxLength");
  }
  if (maxLength < textLength) {
    return text;
  }

  let repeatLength = maxLength - textLength;
  let parseRepeat = floatToInt(repeatLength / fillStringLength);
  if (repeatLength > fillString.length) {
    fillString += repeat(fillString, parseRepeat);
  }
  return text + slice(fillString, 0, repeatLength);
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = " ") {}
