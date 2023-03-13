import {
    substring
} from "./substring.js";
import {
    isEqual
} from "./compare.js"







export function indexOf(text, searchValue, index = 0) {
    if (typeof text !== 'string') throw Error('argument must be type of string')
    if (typeof searchValue !== 'string') throw Error('invalid searchString string');
    if (index < 0 || !(index % 1 === 0) || typeof index !== 'number' || index > text.length) throw Error('invalid index');
    if (typeof text === "undefined" || searchValue.length === 0) return -1

    const lenText = text.length;
    const lenSearchStr = searchValue.length;

    if (lenSearchStr === 0) return -1;
    if (index > lenText || index < 0) throw Error("invalid index");


    for (let i = index; i <= lenText - lenSearchStr; i++) {
        if (isEqual(substring(text, i, i + lenSearchStr), searchValue)) {
            return i;
        }
    }
    return -1
}