// [!] 시간 초과남
// 두 정수 X, Y
/**
 * time : 42:11
 * 1. 숫자 짝꿍
 * @param {string} X
 * @param {string} Y
 * @returns
 * [!] X와Y가 매우 큰 값이다 -> 시간 초과 조심
 */
function solution(X, Y) {
    var answer = "";
    // 0 ~ 9의 개수를 배열에 넣어줌
    let xArr = new Array(10).fill(0);
    let yArr = new Array(10).fill(0);
    // xArr와 yArr 공통된 개수
    let commonArr = new Array(10).fill(0);

    // c++로 대충 짜는게 익숙해져서 부수효과있게 짜버렸음
    count(X, xArr);
    count(Y, yArr);
    getCommnonArr(xArr, yArr, commonArr);

    for (let i = 9; i >= 0; i--) {
        if (commonArr[i] === 0) continue;
        let tmpCnt = commonArr[i];
        while (tmpCnt !== 0) {
            answer += String(i);

            tmpCnt--;
        }
    }

    // 00의 경우
    if (answer[0] === "0" && answer.length > 1) answer = "0";
    return answer === "" ? "-1" : answer;
}

const count = (num, arr) => {
    num = num.split("");
    while (num.length !== 0) {
        const tmp = num.pop();
        arr[tmp]++;
    }
};

const getCommnonArr = (xArr, yArr, commonArr) => {
    for (let i = 0; i < 10; i++) {
        commonArr[i] = xArr[i] <= yArr[i] ? xArr[i] : yArr[i];
    }
};
