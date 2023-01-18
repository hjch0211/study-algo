// 가중치 모두 1
// sources의 원소 순서대로
function solution(n, roads, sources, destination) {
  var answer = new Array(sources.length).fill(0);
  const links = {};
  roads.forEach((x) => {
    if (!!links[x[0]]) links[x[0]] = [...links[x[0]], x[1]];
    else links[x[0]] = [x[1]];
    if (!!links[x[1]]) links[x[1]] = [...links[x[1]], x[0]];
    else links[x[1]] = [x[0]];
  }); // 일단 links 구현
  // 다익스트라 -> bfs

  // bfs
  sources.forEach((x, i) => {
    const Q = [];
    const v = new Array(n + 1);
    let cnt = 0;
    Q.push(destination);
    v[destination] = 1;

    while (Q.length !== 0) {
      const cur = Q.shift();
      v[cur] = 1;

      if (cur === x) {
        answer[i] = cnt;
        break;
      }

      for (let j = 0; j < links[cur].length; j++) {
        if (!links[cur][j]) Q.push(links[cur][j]);
      }
      cnt++;
      console.log(cnt);
    }
  });

  return answer;
}
