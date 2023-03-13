export function len(text) {
    if (typeof text !== 'string') throw Error('argument must be type of string')
    let count = 0;
    for (let i = 0; text[i] !== undefined; i++) {
        count++;
    }
    return count;
}
