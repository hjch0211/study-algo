// n 등대, 뱃길이 n-1
// 행렬 가능? -> link?
function solution(n, lighthouse) {
  var answer = 0;
  let link = Array.from(Array(n), (_, i) => [i + 1]);
  let v = new Array(n + 1).fill(0);
  // link 배열 생성. 처 인덱스는 자기 자신
  lighthouse.forEach(([a, b]) => {
    link[a - 1].push(b);
    link[b - 1].push(a);
  });
  link.sort((a, b) => b.length - a.length);
  // 최소 신장 트리? 다익스트라? x
  for (let i = 0; i < n; i++) {
    if (link[i].length === 2) return answer;
    if (v.filter((x) => !x) === 1) return answer;
    link[i].forEach((x) => (v[x] = 1));
    // console.log(link[i][0])
    answer++;
  }
}
