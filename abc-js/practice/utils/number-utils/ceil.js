import { isFloat } from "./is-float.js";
import { floatToInt } from "./float-to-int.js";

/** возвращает целую часть числа увеличенную в большую сторону */
export function ceil(value) {
  if (isFloat(value)) {
    if (value > 0) {
      return floatToInt(value) + 1;
    }
    return floatToInt(value);
  }
  return value;
}
