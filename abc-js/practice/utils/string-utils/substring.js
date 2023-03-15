import { len } from "./len.js";
/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
    if (typeof text !== 'string') throw Error('argument must be type of string');
    if (typeof start === 'undefined' && typeof end === 'undefined') return text;

    start = start ?? 0;
    end = end ?? len(text);

    if ((start < 0 || !(start % 1 == 0)) || (typeof start !== 'number')) throw Error('invalid start index');
    if ((end < 0 || !(end % 1 == 0)) || (typeof end !== 'number')) throw Error('invalid end index');
    if (start > end) throw Error('invalid start and end index');
    if (start > end || end > len(text)) throw Error('invalid end index');

    let res = '';
    for (let i = start; i < end; i += 1) {
        res += text[i];
    }
    return res;
}
