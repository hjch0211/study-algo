const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split(" ").map(Number));
// visited 배열 생성
const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
// ㅜ의 경우의 수를 모두 구함
const ddx = [
  [0, 0, 0, 1],
  [0, 1, 2, 1],
  [0, 0, 0, -1],
  [0, -1, 0, 1],
];
const ddy = [
  [0, 1, 2, 1],
  [0, 0, 0, 1],
  [0, 1, 2, 1],
  [0, 1, 1, 1],
];

let ans = 0;

// [!] ㅜ 모양을 제외하면 그냥 DFS로 풀 수 있음
const dfs = (x, y, sum, cnt) => {
  if (cnt === 4) {
    ans = Math.max(ans, sum);
    return;
  }
  for (let i = 0; i < 4; i++) {
    let [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;

    visited[nx][ny] = true;
    dfs(nx, ny, sum + board[nx][ny], cnt + 1);
    visited[nx][ny] = false; // 백트래킹
  }
};

const checkNoDfs = (x, y) => {
  // 기준점 0,0으로 시작해서 ddx,ddy를 이용해 순회 -> 이 부분만 정확하게 구현했으면 풀었을 듯
  for (let i = 0; i < 4; i++) {
    let isValid = true;
    let sum = 0;
    for (let j = 0; j < 4; j++) {
      let nx = x + ddx[i][j];
      let ny = y + ddy[i][j];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        isValid = false;
        break;
      } else sum += board[nx][ny];
    }
    if (isValid) ans = Math.max(ans, sum);
  }
};

// 좌표 (i,j)를 중심으로 DFS, noDFS
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = true;
    dfs(i, j, board[i][j], 1);
    visited[i][j] = false;
    checkNoDfs(i, j);
  }
}

console.log(ans);
