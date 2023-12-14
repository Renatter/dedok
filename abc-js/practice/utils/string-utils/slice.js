import { substring } from "./substring.js";
import { len } from "./len.js";
/** Возвращает часть строки указанной между индексами startIndex, finishIndex.
  Отличается от substring тем, что позволяет указывать отрицательные индексы
  которые отсчитываются с конца строки. */
export function slice(text, startIndex, finishIndex) {
  if (
    (startIndex < 0 && finishIndex >= 0) ||
    (startIndex >= 0 && finishIndex < 0)
  ) {
    throw Error("indexes must be only positive or negative");
  }
  const textLen = len(text);
  if (startIndex < 0 && finishIndex < 0) {
    startIndex = textLen + startIndex;
    finishIndex = textLen + finishIndex;
  } else if (typeof finishIndex === "undefined" && startIndex < 0) {
    startIndex = textLen + startIndex;
    finishIndex = textLen;
  }

  return substring(text, startIndex, finishIndex);
}
