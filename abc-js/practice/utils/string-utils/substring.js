import { checkIsString } from "./common.js";
import { len } from "./len.js";
/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
    checkIsString(text)
    if (typeof start === 'undefined' && typeof end === 'undefined') return text;

    let lenText = len(text)
    start = start ?? 0;
    end = end ?? lenText;

    if ((typeof start !== 'number')|| (start < 0 || !(start % 1 == 0))) throw Error('invalid start index');
    if ((typeof end !== 'number') ||(end < 0 || !(end % 1 == 0))) throw Error('invalid end index');
    if (start > end) throw Error('invalid start and end index');
    if ( end > lenText) throw Error('invalid end index');

    let res = '';
    for (let i = start; i < end; i += 1) {
        res += text[i];
    }
    return res;
}
