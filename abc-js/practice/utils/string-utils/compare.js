import {checkIsString} from './common.js'
import { len } from "./len.js";
export function isEqual(firstText, secondText) {
    checkIsString(firstText)
    checkIsString(secondText)
    let lenFirstText = len(firstText)
    let lenSecondText = len(secondText)
    if (lenFirstText !== lenSecondText) return false;

    for (let i = 0; i < lenFirstText; i += 1) {
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
    let lenFirstText = len(firstText)
    let lenSecondText = len(secondText)

    const cycleLength = lenFirstText< lenSecondText ? lenSecondText : lenFirstText;
    for (let i = 0; i < cycleLength; i += 1) {
        if (firstText[i] > secondText[i]) return true;
        if (firstText[i] < secondText[i]) return false;
    }
    return lenFirstText > lenSecondText? true : false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    


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