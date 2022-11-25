/**
 * Time : 44:37 정렬 검색해서 맞춤
 * Title : 파일명 정렬 by 카카오
 * Approach : head, number, tail로 나누고, sort 차례대로 하려고 함. stable sort라 가능하다고 생각
 * Review : 근데 대소문자 구분없는 sort가 생각이 나지 않았음
 * 일단 files의 문자열들을 배열로 나누자
 */
// 헤드가 같으면 Number이 숫자순으로
// 그래도 갔다면, 원래 들어온 순서대로 -> stable sort?
function solution(files) {
  var answer = [];
  files = files.map((s) => {
    const n = getNumIdx(s);
    const t = getTailIdx(s.slice(n)) + n; // t가 없을 수 있음
    if (n !== t) return [s.slice(0, n), s.slice(n, t), s.slice(t)];
    else return [s.slice(0, n), s.slice(n)];
  });

  files.sort((a, b) => Number(a[1]) - Number(b[1]));
  files.sort((a, b) => compare(a[0], b[0]));
  answer = files.map((x) => x.join(""));
  return answer;
}

const getNumIdx = (s) => s.match(/[0-9]/).index;
const getTailIdx = (s) => {
  for (let i = 0; i < s.length; i++)
    if (isNaN(Number(s[i])) || s[i] === " " || s[i] === "-" || s[i] === ".") return i;
  return 0;
};
// [!] 대소문자 구별없이 sort ->  toUpperCase() 와 toLowerCase() 이용
const compare = (a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (b.toLowerCase() < a.toLowerCase()) return 1;
  return 0;
};
