/**
 * time : 40분 실패
 * 양궁 대회 by kakao
 * @param {number} n 총 화살
 * @param {number[]} info apeach가 쏜 과녁들
 * @returns
 */
function solution(n, info) {
    const apeach = info;
    var answer = [];
    let lionInfo = new Array(11).fill(0);
    let maxDiff = 0;

    // [!] lion은 k점에 대하여, apeach보다 하나 더 맞추었거나, 0개를 맞춰야 됨
    // 이 생각 아예 못했음
    function recur(lion, count, i) {
        if (n < count) return;

        //base condition
        if (i === 11) {
            const diff = diffPoint(lion, apeach);
            // [?] 낮은 점수부터 시작해서 올라가므로, 가장 낮은 점수를 더 많이 맞힌 경우를 return
            if (diff > maxDiff) {
                // 문제 이해... 이렇게 해도 되는줄 몰랐음
                lion[10] += n - count;
                maxDiff = diff;
                lionInfo = lion;
            }
            return;
        }
        // 아직 이걸 떠올리기 너무 힘듦
        if (n > count) {
            let _lion = [...lion];
            _lion[10 - i] = apeach[10 - i] + 1;
            recur(_lion, count + apeach[10 - i] + 1, i + 1);
        }
        // [!] 역추적 -> 역 추적이라고 할 수 있을라나?
        // 보면 _lion이 아닌 lion을 해줌
        recur(lion, count, i + 1);
    }

    recur(lionInfo, 0, 0);
    answer = lionInfo;
    return maxDiff > 0 ? answer : [-1];
}

// // 양수여야 lion이 이기는 case
const diffPoint = (lion, apeach) => {
    let aScore = 0;
    let lScore = 0;

    for (let i = 0; i < 10; i++) {
        if (apeach[i] == 0 && lion[i] == 0) continue;
        if (apeach[i] >= lion[i]) aScore += 10 - i;
        else lScore += 10 - i;
    }

    return lScore - aScore;
};

module.exports = function p2() {
    console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
};
