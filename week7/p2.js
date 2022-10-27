/**
 * time : 32:29 실패 -> 문자열 다루기 아직 연습 부족
 * @param {string} dartResult
 * @returns
 * 다트 세 차례
 * point : 0 ~ 10 -> 10이 두자리라 이걸 해결 못함...
 * pow : SDT
 * opt : *, # 없으면 공백 -> 공백 처리 어떻게 하면 효율적일까
 * opt는 중복 가능
 * test case 빡세게 돌려볼 필요있었음
 * [!] 숫자와 문자열로 나누기만 하고, 굳이 배열에 저장할 필요없이, 문자열을 받으면 바로 answer에 넣어보자
 * -> 이렇게 하면 굳이 인덱스를 맞추기 위해 고생할 필요없음
 * -> [!] 인덱스, 순서맞추기 편하고, 처리가 편할 때만 배열로 나눠서 처리해보자. 아니면 인덱스 맞추느라 오히려 오래 걸림
 */
function solution(dartResult) {
    var answer = 0;
    let points = [];
    let temp = 0; // 제곱 등의 처리를 위해 temp 필요

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i].match(/[0-9]/)) {
            // Strict euqal operator이므로, 1,0이라고 하면 안됨
            if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
                temp = 10;
                i++;
            } else temp = dartResult[i];
        } else if (dartResult[i] === "S") points.push(temp);
        else if (dartResult[i] === "D") points.push(Math.pow(temp, 2)); // Math.pow
        else if (dartResult[i] === "T") points.push(Math.pow(temp, 3));
        else if (dartResult[i] === "*") {
            points[points.length - 1] *= 2;
            points[points.length - 2] *= 2;
        } else if (dartResult[i] === "#") points[points.length - 1] *= -1;
    }

    points.forEach((x) => (answer += Number(x)));

    return answer;
}
