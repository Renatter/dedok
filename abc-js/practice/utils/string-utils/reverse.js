import { len } from "./len.js"

len
/** Возвращает "развернутую" копию text */
export function reverse(text) {
    if (typeof text !== 'string') {
        throw new Error("argument must be type of string")
    }
    let res = ""
    for (let i = len(text) - 1; i >= 0; i--) {
        res += text[i]
    }
    return res
}