/**
 * time : 32:22 성공 -> 생각보다 너무 오래걸렸음. 아직 문자열 처리가 능숙하지 못함
 * title : 실패율 by kakao
 * @param {*} N 전체 스테이지 N개 <= 500
 * @param {*} stages 스테이지 정보 stages <= 200000
 * @returns 실패율이 높은 스테이지부터 리턴
 * 실패율 = 클리어x 명수 / 스테이지 도달 명수
 * N + 1은 올 클리어
 * 도달한 사람없으면 0
 * [!] sort와 reverse 체화되어있지 않았음
 */
function solution(N, stages) {
    var answer = [];
    // 0이 stage1
    const stageNums = new Array(N).fill(0);
    const failStageNums = new Array(N).fill(0);
    const failRate = new Array(N).fill(0);
    const temp = []; // 정렬할 때 stage를 넣어주어야 됨을 늦게 알고 추가해주었음

    stages.forEach((x) => {
        // x == 3? 1 2 3
        for (let i = 0; i < x; i++) stageNums[i]++;
        failStageNums[x - 1]++;
    });
    // stageNums[i] === 0이면 실패율 0
    for (let i = 0; i < N; i++) {
        if (stageNums[i] === 0) failRate[i] = 0;
        else failRate[i] = failStageNums[i] / stageNums[i];
    }

    let i = 1;
    failRate.forEach((x) => temp.push([x, i++]));

    // stable해야 함
    temp.sort((a, b) => b[0] - a[0]).forEach((x) => answer.push(x[1]));

    return answer;
}
