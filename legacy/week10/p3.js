/**
 * Time : 14:45
 * Title : 삼총사
 * Approach : 배열에서 3명씩 뽑으면 된다고 생각은 했음... 어떻게 구현할 지 조금 생각함
 * Review : number작기도 하니까 그냥 for문 3중첩으로 돌림
 * 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사 -> 중복 가능
 * numbers 작음 -> 그냥 탐색?
 * 서로 다른 학생의 정수 번호가 같을 수
 */
function solution(number) {
  var answer = 0;
  let combs = [];
  number.sort((a, b) => a - b);

  // [!] 배열에서 3개씩 뽑기
  for (let a = 0; a < number.length - 2; a++) {
    for (let b = a + 1; b < number.length - 1; b++) {
      for (let c = b + 1; c < number.length; c++) {
        combs.push([number[a], number[b], number[c]]);
      }
    }
  }

  combs.forEach((x) => {
    let sum = 0;
    x.forEach((y) => (sum += y));
    if (sum === 0) answer++;
  });
  return answer;
}
