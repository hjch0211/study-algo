/**
 * Time : 24:28
 * Title : 성격 유형 검사 by 카카오
 * Approach : 그냥 풀었음
 * Review : 자료구조 하나 만들 때 어떻게 효율적으로 처리할 지 모르겠었음
 * 푼거 였음
 */
// 점수 같으면 사전순
// RT면 R이 비동의 T가 동의
// 초이스 1 - 7
function solution(survey, choices) {
  var answer = "";
  const mbti = { R: 0, C: 0, J: 0, A: 0, T: 0, F: 0, M: 0, N: 0 };
  survey.forEach((x, i) => {
    if (mbti[x[0]] !== undefined) {
      // 첫글자가  mbti에 속할때\
      // 동의면 둘째글자가 점수얻음
      if (choices[i] - 4 > 0) mbti[x[1]] += Math.abs(choices[i] - 4);
      else if (choices[i] - 4 < 0) mbti[x[0]] += Math.abs(choices[i] - 4);
    } else {
      if (choices[i] - 4 > 0) mbti[x[0]] += Math.abs(choices[i] - 4);
      else if (choices[i] - 4 < 0) mbti[x[1]] += Math.abs(choices[i] - 4);
    }
  });
  if (mbti.R >= mbti.T) answer += "R";
  else answer += "T";
  if (mbti.C >= mbti.F) answer += "C";
  else answer += "F";
  if (mbti.J >= mbti.M) answer += "J";
  else answer += "M";
  if (mbti.A >= mbti.N) answer += "A";
  else answer += "N";

  return answer;
}
