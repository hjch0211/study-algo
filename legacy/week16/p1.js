/**
 * Time : 11:15
 * Title : 숫자 문자열과 영단어 by 카카오
 * Approach : 그냥 풀기
 * Review : 좀 더 깔쌈한 풀이가 있을까
 */
function solution(s) {
  var answer = "";

  // split? queue가 맞는 듯
  let queue = [];
  s.split("").forEach((x) => {
    if (!Number.isNaN(Number(x))) return (answer += x);
    queue.push(x);
    if (queue.join("") === "zero") {
      queue = [];
      answer += 0;
    }
    if (queue.join("") === "one") {
      queue = [];
      answer += 1;
    }
    if (queue.join("") === "two") {
      queue = [];
      return (answer += 2);
    }
    if (queue.join("") === "three") {
      queue = [];
      answer += 3;
    }
    if (queue.join("") === "four") {
      queue = [];
      answer += 4;
    }
    if (queue.join("") === "five") {
      queue = [];
      answer += 5;
    }
    if (queue.join("") === "six") {
      queue = [];
      answer += 6;
    }
    if (queue.join("") === "seven") {
      queue = [];
      answer += 7;
    }
    if (queue.join("") === "eight") {
      queue = [];
      answer += 8;
    }
    if (queue.join("") === "nine") {
      queue = [];
      answer += 9;
    }
  });

  return Number(answer);
}
