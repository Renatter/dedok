import { substring } from "./substring.js";
import { isEqual } from "./compare.js";
import { checkIsString } from "./common.js";
import { len } from "./len.js";
import { isFloat } from "../number-utils/is-float.js";
/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/

export function indexOf(text, searchValue, index = 0) {
  const lenText = len(text);
  if (typeof searchValue !== "string")
    throw Error("invalid searchString string");
  if (
    typeof index !== "number" ||
    index < 0 ||
    isFloat(index) ||
    index > lenText
  )
    throw Error("invalid index");
  if (typeof text === "undefined" || searchValue.length === 0) return -1;
  if (index > lenText || index < 0) throw Error("invalid index");
  const lenSearchStr = len(searchValue);

  for (let i = index; i <= lenText - lenSearchStr; i++) {
    if (isEqual(substring(text, i, i + lenSearchStr), searchValue)) {
      return i;
    }
  }
  return -1;
}
