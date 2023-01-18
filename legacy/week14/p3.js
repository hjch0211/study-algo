// 힙풀이는 떠올리지 못할 것같음 -> 어떻게 힙을 사용한다는 거지?
// 이진 탐색을 이용해서
function solution(n, k, enemy) {
  let left = 0;
  let right = enemy.length;

  const getSum = (index) =>
    index + 1 - k >= 0
      ? enemy
          .slice(0, index + 1)
          .sort((a, b) => a - b)
          .slice(0, index + 1 - k)
          .reduce((acc, cur) => acc + cur, 0) // 처리해야 되는 enemy 수
      : 0;

  // 이분탐색 짜는 코드도 외워야 할 것같음. 은근 자주 나오는 듯
  // lower bound?
  while (1) {
    if (right - left === 1) return right;

    const mid = parseInt((left + right) / 2);
    const sum = getSum(mid);

    if (n >= sum) left = mid;
    else right = mid;
  }
}
