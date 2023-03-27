import { substring } from "./substring.js";
import { isEqual } from "./compare.js";
import { checkIsString } from "./common.js";
import { len } from "./len.js";
/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/

export function indexOf(text, searchValue, index = 0) {
  checkIsString(text);
  if (typeof searchValue !== "string")
    throw Error("invalid searchString string");
  if (
    index < 0 ||
    !(index % 1 === 0) ||
    typeof index !== "number" ||
    index > text.length
  )
    throw Error("invalid index");
  if (typeof text === "undefined" || searchValue.length === 0) return -1;
  const lenText = len(text);
  const lenSearchStr = len(searchValue);

  if (lenSearchStr === 0) return -1;
  if (index > lenText || index < 0) throw Error("invalid index");

  for (let i = index; i <= lenText - lenSearchStr; i++) {
    if (isEqual(substring(text, i, i + lenSearchStr), searchValue)) {
      return i;
    }
  }
  return -1;
}
