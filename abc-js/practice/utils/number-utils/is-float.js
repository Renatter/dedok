import {
    checkNumberForError
} from '../string-utils/common.js';
export function isFloat(value) {
    checkNumberForError(value);
    return value % 1 !== 0;
}
