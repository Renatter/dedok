import {
    repeat
} from "./repeat.js";
import {
    slice
} from "./slice.js";
import {
    floatToInt
} from "../number-utils/float-to-int.js";
import {
    checkIsString
} from "./common.js";
import {
    len
} from "./len.js";

import {
    floor
} from "../number-utils/floor.js";

import {
    ceil
} from "../number-utils/ceil.js";

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */

function construcorPad(text, maxLength, fillString = " ") {


    const textLength = len(text);
    const fillStringLength = len(fillString);
    let result = ""
    let repeatLength = maxLength - textLength;
    let parseRepeat = floatToInt(repeatLength / fillStringLength);
    if (repeatLength > fillStringLength) {
        fillString += repeat(fillString, parseRepeat);
    }
    return result = slice(fillString, 0, repeatLength)


}
export function padStart(text, maxLength, fillString = " ") {
    checkIsString(text, " text");
    checkIsString(fillString, " fillString");

    const textLength = len(text);
    if (typeof maxLength === "undefined" || maxLength === null) {
        return text;
    }
    if (typeof maxLength !== "number") {
        throw new Error("invalid type of maxLength");
    }
    if (maxLength < textLength) {
        return text;
    }

    const result = construcorPad(text, maxLength, fillString);

    return result + text;
}


/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = " ") {
    checkIsString(text, " text");
    checkIsString(fillString, " fillString");

    const textLength = len(text);
    if (typeof maxLength === "undefined" || maxLength === null) {
        return text;
    }
    if (typeof maxLength !== "number") {
        throw new Error("invalid type of maxLength");
    }
    if (maxLength < textLength) {
        return text;
    }

    const result = construcorPad(text, maxLength, fillString);
    return text + result;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = " ") {
    checkIsString(text, " text");
    if (typeof (maxLength ?? 0) !== "number") throw Error("invalid type of maxLength");
    if (typeof maxLength === "undefined" || maxLength === null) {
        return text;
    }

    const lenText = len(text)
    const fillNum = maxLength - lenText
    const leftFill = floor(fillNum / 2);
    const rightFill = ceil(fillNum / 2);
    const start = padStart(text, rightFill + lenText, fillString);
    const end = padEnd(start, leftFill + len(start), fillString);
    return end;
}