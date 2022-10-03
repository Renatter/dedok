import { assertToBe, assertThrow } from '../../../dependencies/asserts/assert.js';
import { testsForHtml } from '../../../dependencies/asserts/assert2html.js';
import { repeat, substring } from './string-utils.js';

const complexText = "Hello world!!! It's terminator";

export function repeatTests() {
  assertToBe('повторено несколько раз - простой текст', repeat('a', 3), 'aaa');
  // let resultValue = repeat(complexText, 3);
  // let expectValue = complexText + complexText + complexText;
  // assertToBe('повторено несколько раз - сложный текст', resultValue, expectValue);
  // assertToBe('повторено несколько раз - пустой текст', repeat('', 3), '');

  // assertToBe('повторено один раз - простой текст', repeat('a', 1), 'a');
  // resultValue = repeat(complexText, 1);
  // assertToBe('повторено один раз - сложный текст', resultValue, "Hello world!!! It's terminator");
  // assertToBe('повторено один раз - пустой текст', repeat('', 1), "");

  // assertToBe('повторено ни один раз - простой текст', repeat('a', 0), '');
  // assertToBe('повторено ни один раз - сложный текст', repeat(complexText, 0), '');
  // assertToBe('повторено ни один раз - пустой текст', repeat('', 0), '');

  // assertToBe('пропущенное число повторении возвращает ту же строку', repeat('abc'), 'abc');
  // assertToBe('в дробном числе повторении, дробная часть отбрасывается', repeat('abc', 3.85), 'abcabcabc');
  // assertToBe('второй параметр приводится в число', repeat('a', '3'), 'aaa');
  // assertToBe('второй параметр приводится в число', repeat('a', false), '');

  // let errCb = () => repeat('a', -1);
  // assertThrow('отрицательное число повторении вызывает исключение', errCb, 'repeat count must be positive value or zero');
  // errCb = () => repeat();
  // assertThrow('пропущеный текст вызывает исключение', errCb, 'text must not be of undefined');
  // errCb = () => repeat(true);
  // assertThrow('первый тип не строка вызывает исключение', errCb, 'text must be of type string');

  return 'repeatTests - success runned';
}

export function substringTests() {
  assertToBe('получить два первых символа', substring(complexText, 0, 2), 'He');
  // assertToBe('если индексы лежат за пределами, то возвзращается пустая строка', substring('a', 2, 5), '');
  // assertToBe('получить с индекса 2 по 5 индекс', substring(complexText, 2, 5), 'llo');
  // assertToBe('если передать одинаковый индекс, то возвращается пустая строка', substring(complexText, 5, 5), '');
  // assertToBe('если не передавать индексы, то возвращается копия строки', substring(complexText), complexText);
  // assertToBe('если не передавать второй индекс, то возвращается до конца текста', substring(complexText, 20), 'terminator');
  // assertToBe('если второй индекс больше длины, то возвращается до конца текста', substring(complexText, 20, 60), 'terminator');
  // assertToBe('если второй индекс больше первого, то индексы меняются местами', substring(complexText, 5, 2), 'llo');
  // assertToBe('если второй индекс отрицательный, то возвращается с 0 индекса по значение первого аргумента',
  //     substring(complexText, 5, -2), 'Hello');
  // assertToBe('если первый индекс отрицательный, то он равен 0', substring(complexText, -5, 2), 'He');
  // assertToBe('если оба индексы отрицательные, то они равны 0', substring(complexText, -5, -2), '');
  // assertToBe('индексы приводятся в тип числа', substring(complexText, true, '5'), 'ello');

  // let errCb = () => substring();
  // assertThrow('если не передать первый аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // assertThrow('если тип первого аргумента на строка, то будет исключение', substring(true, 2), 'text must be of type string');

  return 'substringTests - success runned';
}
//substring
//indexOf
//trim
//trimEnd
//trimStart
//padEnd
//padStart
//reverse
//replace
//replaceAll
//slice
//endsWith
//startsWith
//includes
//upperCase
//lowerCase
//title
//iTitle
//charIsLowerCase
//charIsUpperCase
//charToUpperCase
//charToLowerCase
//

/** функции которые необходимо запустить */
const allTestCallBacks = [
  repeatTests,
  substringTests,
];

testsForHtml(allTestCallBacks);