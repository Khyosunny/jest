import { solution, solution2, solution3, solution4 } from './algorithm';

test('최솟값 구하기', () => {
  expect(solution(1, 3, 2)).toBe(1);
  expect(solution(5, 3, 2)).toBe(2);
  expect(solution(7, 1, 7)).toBe(1);
  expect(solution(7, 1, 1)).toBe(1);
});

test('1 ~ n 까지 합', () => {
  expect(solution2(2)).toBe(3);
  expect(solution2(6)).toBe(21);
  expect(solution2(10)).toBe(55);
});

test('A를 #으로', () => {
  expect(solution3('BANANA')).toBe('B#N#N#');
  expect(solution3('ABCABCD')).toBe('#BC#BCD');
  expect(solution3('AAAAA')).toBe('#####');
});

test('버블 정렬', () => {
  expect(solution4([13, 5, 11, 7, 23, 15])).toEqual([5, 7, 11, 13, 15, 23]);
  expect(solution4([2, 10, 3, 4, 22, 7, 15, 29])).toEqual([
    2, 3, 4, 7, 10, 15, 22, 29,
  ]);
});
