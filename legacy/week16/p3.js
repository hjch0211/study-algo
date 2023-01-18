/**
 * Time : 1시간
 * Title : 주차 요금 계산 by 카카오
 * Approach : 빡 구현?
 * Review : string 연산을 생각하지 못했음... JS의 약한 타입에 익숙해져 버린 것같다.
 */
// 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return
// 자료구조를 어떻게 짤까
// 23:59에 출차된 것으로 간주
function solution(fees, records) {
  var answer = [];
  // 중복된 차량이 있을 수 있음
  const obj = {}; // id : { time : 0, startAt : 0 }

  records.forEach((record) => {
    const [atTime, id, type] = record.split(" ");
    if (type === "OUT") {
      const startAt = obj[id].startAt;
      obj[id].time += getTime(startAt, atTime);
      obj[id].startAt = 0; // 나가면 0으로 초기화
    } else {
      // 처음 방문
      if (!obj[id]) obj[id] = { time: 0, startAt: atTime };
      else obj[id].startAt = atTime;
    }
  });

  for (let entry of Object.entries(obj)) {
    const [key, val] = entry;
    if (val.startAt !== 0) {
      obj[key].time += getTime(val.startAt, "23:59");
      obj[key].startAt = 0;
    }
  }

  for (let entry of Object.entries(obj)) {
    const [key, val] = entry;
    obj[key].fee = getFee(val.time, fees);
  }

  const test = Object.keys(obj).sort((a, b) => a - b);
  answer = test.map((key) => obj[key].fee);

  return answer;
}

const getTime = (startAt, endAt) => {
  // 여기서 시간 다 씀... 덧셈 연산 때 문자열 연산으로 이루어졌었음
  const [sh, sm] = startAt.split(":").map((x) => Number(x));
  const [eh, em] = endAt.split(":").map((x) => Number(x));
  return eh * 60 + em - (sh * 60 + sm);
};

// time은 누적 시간
const getFee = (time, fees) => {
  const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
  return time <= 기본시간
    ? 기본요금
    : 기본요금 + Math.ceil((time - 기본시간) / 단위시간) * 단위요금;
};
