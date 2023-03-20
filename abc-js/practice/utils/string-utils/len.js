import { checkIsString } from "./common.js"
export function len(text) {
    checkIsString(text)
    for (let i = 0; true; i++) { if (!text[i]) return i}
}
