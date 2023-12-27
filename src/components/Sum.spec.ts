import { describe, expect, test } from '@jest/globals';
import { sum } from './Sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    const num: number = 5;
    expect(num).toBe(5);
  });
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
});
