// 체격순 번호, 바로 앞 뒤번호에게만 체육복 빌려줄 수 있음
// 여벌 체육복 가져온 애가 도난당할 수 있음 -> 못 빌려줌
/**
 * 3. 체육복 by 프로그래머스
 * @param {number} n 학생수
 * @param {number[]} lost
 * @param {number[]} reserve
 * @returns
 */
function solution(n, lost, reserve) {
    var answer = 0;
    // 0은 제외
    let student = new Array(n + 1).fill(0);
    lost.sort();
    reserve.sort();

    // 두 배열이 같은 요소를 가질 때 처리
    // [!] filter 새로운 배열 반환
    const tmp = reserve;
    reserve = reserve.filter((x) => !lost.includes(x));
    lost = lost.filter((x) => !tmp.includes(x));

    for (let i = 1; i < student.length; i++) {
        student[i] = lost.includes(i) ? 0 : 1;
    }

    for (let i = 0; i < reserve.length; i++) {
        if (student[reserve[i] - 1] === 0 && reserve[i] - 1 !== 0) {
            student[reserve[i] - 1]++;
            continue;
        } else if (student[reserve[i] + 1] === 0) {
            student[reserve[i] + 1]++;
            continue;
        }
    }

    student.forEach((x) => x && answer++);

    return answer;
}
