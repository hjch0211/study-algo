/**
 * Time : 10:53
 * Title : 문자열 나누기
 * Approach : 그냥 풀기
 */
function solution(s) {
  var answer = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  let tmp = "";
  s.split("").forEach((x, i) => {
    if (tmp == "") {
      cnt1 = 1;
      tmp = x;
    } else {
      if (tmp == x) cnt1++;
      else cnt2++;

      if (cnt1 == cnt2) {
        tmp = "";
        cnt1 = 0;
        cnt2 = 0;
        answer++;
      }
    }
  });

  if (!!tmp) answer++;
  return answer;
}
