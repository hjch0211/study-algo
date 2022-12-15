/**
 * Time : 21:28
 * Title : 신고 결과 받기 by 카카오
 * Approach : 문자열 자르고, reporters와 targets로 일단 나눔
 * Review : 하다가 헷갈릴까봐 메모리 안따지고 계속 상수 선언하면서 진행
 */
function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  report = Array.from(new Set(report));
  const reporters = {};
  const targets = {};

  id_list.forEach((x) => (targets[x] = 0));

  report.forEach((x) => {
    const reporter = x.split(" ")[0];
    const target = x.split(" ")[1];
    if (!!reporters[reporter]) reporters[reporter] = [...reporters[reporter], target];
    else reporters[reporter] = [target];

    targets[target]++;
  });

  for (let i = 0; i < id_list.length; i++) {
    const cur = id_list[i];
    if (targets[cur] >= k) {
      for (let j = 0; j < id_list.length; j++) {
        if (reporters[id_list[j]]?.includes(cur)) answer[j]++;
      }
    }
  }

  return answer;
}
