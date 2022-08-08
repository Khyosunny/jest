// function solution(a, b, c) {
//   let answer;
//   if (a > b) answer = b;
//   else answer = a;
//   if (answer > c) return c;
//   else return answer;
// }
export function solution(...params: number[]) {
  return Math.min(...params);
}

export function solution2(n: number) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

export function solution3(s: string) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      answer += '#';
    } else {
      answer += s[i];
    }
  }
  return answer;
}

export function solution4(arr: number[]) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}
