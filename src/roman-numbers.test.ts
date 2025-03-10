import {describe, expect, test} from '@jest/globals';
import { numberToRoman } from './roman-numbers';

describe('numberToRoman', () => {
  [
    { input: 1, expected: 'I' },
    { input: 2, expected: 'II' },
    { input: 3, expected: 'III' },
    { input: 5, expected: 'V' },
    { input: 8, expected: 'VIII' },
    { input: 9, expected: 'IX' },
    { input: 10, expected: 'X' },
    { input: 11, expected: 'XI' },
    { input: 19, expected: 'XIX' },
    { input: 22, expected: 'XXII' },
    { input: 15, expected: 'XV' },
    { input: 1000, expected: 'M' },
    { input: 1001, expected: 'MI' },
    { input: 1990, expected: 'MCMXC' },
    { input: 2007, expected: 'MMVII' },
    { input: 2008, expected: 'MMVIII' },
    { input: 2456, expected: 'MMCDLVI' },
  ].forEach(({ input, expected }) => {
    test(`should convert ${input} to ${expected}`, () => {
      expect(numberToRoman(input)).toBe(expected);
    });
  });
});