/**
 * Time : 36:36 풀이는 금방 알아차렸는데, 구현 속도가 느렸음
 * Title : 우박수열 정적분
 * Approach : 정적분이라길래 놀랐다가 사각형에서 삼각형 빼면 되는거 알아차림
 * Review : 구현 속도가 느렸음. 중간 중간 실수도 있었음
 * [0,0] 구간에 대해 정적분 한다면 전체 구간에 대한 정적분
 * [1,-2] 구간에 대해 정적분 한다면 1 ≤ x ≤ 3
 * 정적분을 할줄 알아야되나? -> 식을 알 수 없음
 * 큰 사각형에서 삼각형 빼면 되네
 */
function solution(k, ranges) {
  var answer = [];
  let hails = []; // [x,y]
  getHails(hails, 0, k);

  ranges.forEach((x) => answer.push(getSize(hails, x)));

  return answer;
}

const getHails = (hails, i, k) => {
  hails.push([i, k]);
  if (k === 1) return;
  else if (k % 2 === 0) getHails(hails, i + 1, k / 2);
  else getHails(hails, i + 1, k * 3 + 1);
};

const getSize = (hails, range) => {
  const [a, b] = range;
  let sum = 0;
  if (a === hails.length - 1 + b) return 0;
  else if (a > hails.length - 1 + b) return -1;
  else {
    for (let i = a; i < hails.length - 1 + b; i++) {
      const [cx, cy] = hails[i];
      const [nx, ny] = hails[i + 1];

      if (cy > ny) sum += cy - (cy - ny) / 2;
      else sum += ny - (ny - cy) / 2;
    }
  }
  return sum;
};
