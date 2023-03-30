import { checkNumberForError } from "../string-utils/common.js";

/** возвращает целую часть дробного числа. -56.78 -> -56*/
export function floatToInt(value) {
  checkNumberForError(value);

  return value - (value % 1);
}
