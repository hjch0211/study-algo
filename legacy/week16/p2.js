/**
 * Time : 42:16
 * Title : 신규 아이디 추천 by 카카오
 * Approach : 그냥 그대로 구현
 * Review : 근데 너무 오래 걸렸음 -> 아직 함수형 프로그래밍이 익숙하지 않았던 것같음
 */
function solution(new_id) {
  return check(new_id);
}

const check = (new_id) => {
  let hasdot = false;
  return (
    new_id
      //1단계
      .toLowerCase()
      .split("")
      //2단계
      .filter((s) => !!s.match(/[a-z0-9]/) || !!s.match(/[-_.]/))
      //3단계
      .map((s) => {
        if (s == "." && !hasdot) {
          hasdot = true;
          return s;
        } else if (s === "." && hasdot) {
          return "";
        } else {
          hasdot = false;
          return s;
        }
      })
      // //4단계
      .join("")
      .replaceAll(".", " ")
      .trim()
      .replaceAll(" ", ".")
      //5단계
      .split("isEmpty?")
      .map((s) => (s === "" ? "a" : s))
      .join("")
      .split("")
      //6단계
      .filter((s, i) => (i >= 15 ? "" : s))
      //4단계
      .join("")
      .replaceAll(".", " ")
      .trim()
      .replaceAll(" ", ".")
      //7단계
      .split("")
      .map((s, i, arr) => (arr.length <= 2 && i === arr.length - 1 ? s.repeat(4 - arr.length) : s))
      .join("")
  );
};
