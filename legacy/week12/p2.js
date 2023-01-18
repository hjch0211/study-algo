/**
 * Time : 15:39
 * Title : [1차] 비밀 지도 by 카카오
 * Approach : 비트 연산 삘이 나긴 했음
 * Review : 비트 연산을 자주 하지 않아서 버벅였고, 문제 읽느라 시간을 많이 소비
 */
// 어느 하나라도 벽인 부분은 벽이다. 모두 공백인 부분은 전체 지도에서도 공백
function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    const c1 = arr1[i];
    const c2 = arr2[i];
    const merge = c1 | c2;
    answer.push(merge);
  }
  answer = func(answer, n);
  return answer;
}

const func = (arr, n) => {
  return arr.map((x) => {
    let tmp = "";
    for (let i = 2 ** (n - 1); i >= 1; i /= 2) {
      if (x & i) tmp += "#";
      else tmp += " ";
    }
    return tmp;
  });
};
