/**
 * Time : 12:48 -> 중간에 forEach의 i 변수를 for문에서 또 써서 틀렸었음
 * Title : 푸드 파이트 대회
 * Approach : 딱 어떻게 풀지 생각이 남. 빨리 푸는게 관건같았음
 * Review : 실수를 줄여야 할듯.
 * 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로,
 * 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽
 * 중앙에는 물 -> 승리
 * 음식의 종류와 양이 같아야 하며, 음식을 먹는 순서도 같아야 합니다
 * 칼로리가 낮은 음식을 먼저
 */
function solution(food) {
  var answer = "";

  food.forEach((x, i) => {
    if (i === 0) return;
    if (x === 1) return;
    else {
      if (x % 2 === 0) for (let t = 1; t <= x / 2; t++) answer += i;
      else for (let t = 1; t <= (x - 1) / 2; t++) answer += i;
    }
  });
  answer = answer + "0" + answer.split("").reverse().join("");

  return answer;
}
