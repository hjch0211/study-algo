// 단품 최소 2가지 메뉴 조합, 코스요리
// 종류 중 가장 많은... -> 이거 빼먹음
// course로 필터하기
// input크지 않음
/**
 * Time : 1:18:30
 * Title : 메뉴 리뉴얼 by 카카오
 * Approach : 중간에 놓친 것도 있다보니, 중간에 생각나는대로 풀었음
 * Review1 : 테스트 케이스 다 맞음. 틀릴 때마다 돌아가려니 시간이 더 걸리는 듯
 * @param {string[]} orders
 * @param {number[]} course
 * @returns
 */
function solution(orders, course) {
    var answer = [];
    let tmpArr = [];
    let cntArr = []; //[tmp, cnt]

    orders.forEach((x) => tmpArr.push(...combs(x)));
    tmpArr = tmpArr.map((x) => x.split("").sort().join(""));

    let tmp = "";
    let cnt = 0;
    tmpArr.sort().forEach((x, i) => {
        if (x === tmp) {
            cnt++;
            i === tmpArr.length - 1 && cntArr.push([tmp, cnt]);
        } else {
            tmp !== "" && cntArr.push([tmp, cnt]);
            i === tmpArr.length - 1 && cntArr.push([x, 1]);
            tmp = x;
            cnt = 1;
        }
    });

    let _tmp = "";
    let _cnt = 0;
    cntArr = cntArr
        .filter((x) => course.includes(x[0].length))
        .filter((x) => x[1] !== 1)
        .sort((a, b) => b[1] - a[1])
        .sort((a, b) => a[0].length - b[0].length)
        .forEach((x) => {
            if (_tmp === "") {
                _tmp = x[0];
                _cnt = x[1];
                answer.push(x[0]);
                return;
            }
            if (_cnt === x[1] && _tmp.length === x[0].length) answer.push(x[0]);
            else if (_tmp.length !== x[0].length) {
                _tmp = x[0];
                _cnt = x[1];
                answer.push(x[0]);
            }
        });
    answer.sort();
    return answer;
}

// 3글자 이상일 때 가능한 조합들
// ASDFG라면 _SDFG, A_DFG ...
const combs = (str) => {
    if (str.length === 2) return [str];
    const next = [];
    str.split("")
        .map((x) =>
            str
                .split("")
                .filter((y) => y !== x)
                .join("")
        )
        .forEach((x) => next.push(...combs(x)));

    return [str, ...next];
};
