import {
    checkNumberForError
} from '../string-utils/common.js';

export function isInteger(value) {
    checkNumberForError(value);
    return value % 1 === 0;
}