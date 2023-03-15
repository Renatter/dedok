import { len } from "./len.js";
export function isEqual(firstText, secondText) {
    if (typeof secondText !== 'string' || typeof firstText !== 'string') {
        throw new Error("argument must be type of string")
    }

    if (len(firstText) !== len(secondText)) return false;

    for (let i = 0; i < len(firstText); i += 1) {
        if (firstText[i] !== secondText[i]) return false;
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !isEqual(firstText, secondText)
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    if (typeof secondText !== 'string' || typeof firstText !== 'string') {
        throw new Error("argument must be type of string")
    }

    const cycleLength = len(firstText)< len(secondText) ? len(secondText) : len(firstText);
    for (let i = 0; i < cycleLength; i += 1) {
        if (firstText[i] > secondText[i]) return true;
        if (firstText[i] < secondText[i]) return false;
    }
    return len(firstText) > len(secondText)? true : false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    if (typeof secondText !== 'string') {
        throw new Error("argument must be type of string")
    }
    if (typeof firstText !== 'string') {
        throw new Error("argument must be type of string")
    }


    return (!isMore(firstText, secondText) && !isEqual(firstText, secondText));
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    return (isMore(firstText, secondText) || isEqual(firstText, secondText));
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    return (isLess(firstText, secondText) || isEqual(firstText, secondText));
}