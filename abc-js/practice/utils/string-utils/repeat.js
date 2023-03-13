/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    if (count < 0 || count % 1 !== 0) throw Error('invalid count');
    if (typeof text !== 'string') throw Error('argument must be type of string');
    if (typeof count !== 'number') throw Error("invalid count")

    let res = '';
    let nwCount = count == true ? 1 : parseInt(count);
    for (let i = 0; i < nwCount; i += 1) {
        res += text;
    }
    return res;
}
