function solution(line) {
  var answer = [];
  let stars = [];
  line.forEach((_x, i) => {
    const [a1, b1, c1] = _x;
    line.slice(i + 1).forEach((__x) => {
      const [a2, b2, c2] = __x;
      const 기울기 = a1 * b2 - a2 * b1;
      if (!기울기) return; // 평행하거나 일치할 때
      const x = (b1 * c2 - b2 * c1) / 기울기;
      const y = (c1 * a2 - a1 * c2) / 기울기; // 인터넷 수학 식이 틀렸었음
      // 정수만
      // if (Number.isInteger(x) && Number.isInteger(y)) stars.push([x, y]); // 이 코드 통과
      // 정수인지를 number === ~~number로 비교할 때는 안 됐음..
      // 하지만 parseInt는 통과
      // Math.floor도 통과
      if (x === Math.floor(x) && y === Math.floor(y)) stars.push([x, y]); // 중복되는 좌표가 있긴 함
    });
  });
  const maxX = Math.max(...stars.map((x) => x[0]));
  const minX = Math.min(...stars.map((x) => x[0]));
  const maxY = Math.max(...stars.map((x) => x[1]));
  const minY = Math.min(...stars.map((x) => x[1]));
  const xw = maxX - minX + 1;
  const yw = maxY - minY + 1;
  // 좌표 영점 옮기기
  stars = stars.map((x) => [Math.abs(x[0] - minX), Math.abs(x[1] - maxY)]);
  answer = new Array(yw).fill(0).map((x) => new Array(xw).fill("."));
  stars.forEach((x) => {
    const [c, r] = x;
    answer[r][c] = "*";
  });
  answer = answer.map((x) => x.join(""));

  return answer;
}
