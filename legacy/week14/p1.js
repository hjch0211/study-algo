//  "aya", "ye", "woo", "ma"
function solution(babbling) {
  var answer = 0;
  // 조합을 미리 만들어 놓은 dp? -> x
  babbling.forEach((x) => {
    let str = x;
    let tmp = "";
    while (str.length !== 0) {
      if (str.slice(0, 3) === "aya" || str.slice(0, 3) === "woo") {
        if (tmp === str.slice(0, 3) && str.slice(0, 3) !== "") return;
        tmp = str.slice(0, 3);
        str = str.slice(3);
      } else if (str.slice(0, 2) === "ye" || str.slice(0, 2) === "ma") {
        if (tmp === str.slice(0, 2) && str.slice(0, 2) !== "") return;
        tmp = str.slice(0, 2);
        str = str.slice(2);
      } else return;
    }
    answer++;
  }); // 연속해서 발음 못하는 것을 놓침...
  return answer;
}
