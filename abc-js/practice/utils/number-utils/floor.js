import { floatToInt } from "./float-to-int.js";
import { isFloat } from "./is-float.js";

/** возвращает целую часть числа уменьшенную в меньшую сторону */
export function floor(value) {
  if (value < 0 && isFloat(value)) {
    return floatToInt(value) - 1;
  }
  return floatToInt(value);
}
