import { checkIsString } from "./common.js";

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    if (typeof count !== 'number' || count < 0 || count % 1 !== 0) throw Error('invalid count');
    checkIsString(text)


    let res = '';
   
    for (let i = 0; i < count; i += 1) {
        res += text;
    }
    return res;
}
