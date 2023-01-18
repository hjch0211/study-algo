function solution(s) {
  var answer = [];
  s.split("").forEach((x, i) => {
    for (let t = i - 1; t >= 0; t--) if (x === s[t]) return answer.push(i - t);
    answer.push(-1);
  });
  return answer;
}
