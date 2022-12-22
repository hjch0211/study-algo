/**
 * Time : 46:07 90점 실패
 * Title : 두 큐 합 같게 만들기 by 카카오
 * Approach : 문제는 -1을 리턴 해주는 것이었음 여러가지 시도
 * Review : 최대값이 다른 모든 값의 합보다 클때
 */
// 작업의 최소 횟수
// 길이 30만, 원소 10^9
function solution(queue1, queue2) {
  var answer = 0;
  const copyQ1 = [...queue1];
  const copyQ2 = [...queue2];
  const sum1 = queue1.reduce((a, b) => a + b, 0);
  const sum2 = queue2.reduce((a, b) => a + b, 0);
  // 일단 모든 합 구하고 나눠서 비교 생각?
  // 그러면 하나의 배열만 연산하면 되지 않나?
  const target = (sum1 + sum2) / 2;

  // 두 큐 최솟값을 구하고 두 값의 최소를 리턴 ㄱㄱ
  let tmp1 = sum1;
  while (tmp1 !== target) {
    // 아니면 while(1)?
    if (tmp1 < target) {
      const pop = copyQ2.shift();
      copyQ1.push(pop);
      tmp1 += pop;
    } else {
      const pop = copyQ1.shift();
      copyQ2.push(pop);
      tmp1 -= pop;
    }
    answer++;
    if (copyQ1.every((x, i) => x === queue1[i])) break; // 90점 시초
    // if(tmp1 === sum1) break; // 80점 시초
  }

  if (tmp1 === target) return answer;
  else return -1;
}
