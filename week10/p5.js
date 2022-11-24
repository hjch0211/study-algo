/**
 * Time : 59:38 -> 45.2 시간초과
 * Title : 등산코스 정하기 by 카카오
 * Approach : 딱봤을 때 플루이드 사용할 수 있을 것같았음
 * Review1 : 구현 속도가 너무 느렸음, 시간 초과가 보이고 어떻게 개선할지 막막함을 느낌
 * n개의 지점 출입구, 쉼터, 혹은 산봉우리
 * 양방향 통행이 가능한 등산로
 * 코스 중 간선 제일 긴게 intensity
 * 다시 원래의 출입구로 돌아오는 산봉우리는 한 번만
 * intensity가 최소 -> dp? 배낭 문제? -> 간선
 * 지점 수 n / 2차원 정수 배열 paths <=20만
 * 출입구들의 번호가 담긴 정수 배열 gates /  산봉우리들의 summits
 * 최소가 되는 등산코스가 여러 개라면 그중 산봉우리의 번호가 가장 낮은 등산코스
 * 플루이드 워셜?
 */
function solution(n, paths, gates, summits) {
  var answer = [];
  const links = new Array(gates.length).fill(new Array(n + 1).fill(Infinity));

  paths.forEach((x) => {
    const [s, e, v] = x;
    gates.forEach((j, i) => {
      if (j === s) links[i][e] = v;
      else if (j === e) links[i][s] = v;
    });
  });

  return answer;
}
