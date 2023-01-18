/**
 * time : 1:01:02 실패 -> 효율성 시간 초과
 * title : 순위 검색 by kakao
 * @param {string[]} info  <= 5만, "개발언어 직군 경력 소울푸드 점수"
 * @param {string[]} query  <= 10만,  "개발언어 and 직군 and 경력 and 소울푸드 점수" - 면 고려 x
 * @returns
 * [!] 효율성이 문제
 * 언어, 직군, 경력, 푸드, 점수로 나눔 -> 처음엔 싹 다 배열로 나눴는데, 이게 더 편한 걸 느낌
 * 자료구조를 하나 만들어야 되는 줄 알았음
 */
function solution(info, query) {
    var answer = [];
    // 언어, 직군, 경력, 푸드, 점수 + 점수만 일단 정렬
    const slicedI = info.map((x) => x.split(" ")).sort((a, b) => Number(a[4]) - Number(b[4]));
    const slicedQ = query.map((x) => x.split(" ")).map((x) => x.filter((t) => t !== "and"));

    // i를 16가지로 나눔

    slicedQ.forEach((x) => {
        // 질문을 돌면서, info 모두 검사
        let cnt = 0;
        const lb = lowerBound(
            0,
            slicedI.length - 1,
            slicedI.map((v) => v[4]),
            x[4]
        );
        console.log(x[4]);

        slicedI.forEach((t) => {
            let isFit = 1;

            if (x[4] !== "-" && Number(x[4]) > Number(t[4])) return;

            for (let i = 0; i < 4; i++) {
                if (x[i] === "-") continue;
                if (x[i] === t[i]) continue;
                else {
                    isFit = 0;
                    break;
                }
            }
            if (isFit) cnt++;
        });
        answer.push(cnt);
    });
    return answer;
}

// lowerbound가 안구해짐
const lowerBound = (start, end, nums, target, res = Infinity) => {
    if (start > end) return res;

    const mid = parseInt((start + end) / 2);
    if (nums[mid] < target) return lowerBound(mid + 1, end, nums, target, res);
    res = Math.min(res, mid);
    return lowerBound(start, mid - 1, nums, target, res);
};
