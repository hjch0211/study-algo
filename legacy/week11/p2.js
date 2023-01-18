/**
 * Time : 10:31 -> 더 빨리 풀고 싶은데 수학에 약하네
 * Title : 최대 공약수와 최소 공배수 by 프로그래머스
 * Approach : 그냥 케이스 구해보면서 식을 구해봄
 * Review : 수학을 모른다면 빠르게 경우의 수 나열해봐야할 듯
 */
// 두 수의 최대공약수와 최소공배수를 반환
// 백만 -> O(n)이하로 풀어야 될 듯
function solution(n, m) {
  var answer = [];
  answer = [최대공약수(n, m), 최소공배수(n, m, 최대공약수(n, m))];
  return answer;
}

const 최대공약수 = (n, m) => {
  const x = Math.min(n, m);
  // 24, 21
  for (let i = x; i >= 1; i--) {
    if (n % i == 0 && m % i == 0) return i;
  }
};

const 최소공배수 = (n, m, 최대공약수) => {
  if (최대공약수 === 1) return n * m;
  // 2 * 2, 2*3 => 2 *
  return (((최대공약수 * n) / 최대공약수) * m) / 최대공약수;
};
