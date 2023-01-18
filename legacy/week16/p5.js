/**
 * Time : 49:18
 * Title : 양과 늑대 by 카카오
 * Approach : 양은 그냥 보이는대로 세주고, 늑대는 양과의 거리가 짧은 곳부터 가줌
 * Review : 근데 구현 삑사리
 */
// 의 수보다 늑대의 수가 같거나 더 많아지면 안됨
// 최대한 많은 수의 양을 모아서 다시 루트 노드 -> 완탐?
// 2 ≤ info의 길이 ≤ 17
function solution(info, edges) {
  var answer = 0;
  edges.sort((a, b) => a[0] - b[0]); // edges 정렬
  const link = {}; // 부모 자식 정보
  const cnt = { 양: 0, 늑: 0 };

  edges.forEach((x) => {
    const [p, c] = x;
    if (link[p] === undefined) link[p] = [c];
    else link[p] = [...link[p], c];
  });

  const list = [...link[0]];
  cnt.양++; // 넣을 때 양 추가
  while (list.length !== 0) {
    // if 양이 늑대와 같이 질 경우
    const _list = [...list];
    _list.forEach((n) => {
      delete list[n];
      if (info[n] === 0) {
        cnt.양++;
        if (list[n] !== undefined) list.push(...link[n]);
      }
    });

    const __list = [...list];
    __list.forEach((n) => {
      const dist = get양까지의거리(n, link, info);
      console.log(dist);
    });
  }

  return answer;
}

// 자식 노드 중의 양까지의 최단 거리 구하기
const get양까지의거리 = (node, link, info) => {
  let distance = 0;
  if (link[node] === undefined) return distance;

  const list = [...link[node]];
  while (list.length !== 0) {
    distance++;
    let res = 0;
    [...list].forEach((n) => {
      if (info[n] === 0 || res) {
        res = distance;
        return;
      } else list.push(...link[n]);
    });
    if (res) return res;
  }
};
