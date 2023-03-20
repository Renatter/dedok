import { len } from "./len.js"
import { checkIsString } from "./common.js"

/** Возвращает "развернутую" копию text */
export function reverse(text) {
    checkIsString(text)
    let res = ""
    for (let i = len(text) - 1; i >= 0; i--) {
        res += text[i]
    }
    return res
}