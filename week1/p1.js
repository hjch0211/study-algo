/**
 ⏰ Time : 40분 실패
 ✍️ Title : 테트로미노 BOJ 14500
 🤔 Approach : 각각의 테트로미노를 돌리고 회전시킨 후 완탐하려 했음
 🚬 Review : 아직 테트리스에 미숙했음
 */

const [n, m, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const board = [];
let tmp = [];
arr.forEach((x, i) => {
  if (i % m === 0) {
    board.push([...tmp]);
    tmp = [];
  } else tmp.push(x);
});

// 좌표를 저장
const type1 = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
];
const type2 = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
const type3 = [
  [0, 0],
  [1, 0],
  [2, 0],
  [2, 1],
];
const type4 = [
  [0, 0],
  [1, 0],
  [1, 1],
  [2, 1],
];
const type5 = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 1],
];

const sol = () => {
  let answer = 0;
  // 모든 경우의 수를 완탐

  return answer;
};

console.log(sol());

// 여기 구현에서 막힘 -> 돌릴 때 기준점?을 어디로 두어야 좋을까
const rotate = () => {};

const reverse = () => {};

const isValid = () => {};
