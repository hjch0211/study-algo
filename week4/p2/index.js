/**
 * N-Queen
 * @param {number} n width, height : n
 * @returns number
 */
// 유명한 예제여서 그냥 대표 풀이봄
const solution = (n) => {
    var answer = 0;

    const dfs = (map, row) => {
        // 재귀를 돌면서 row가 n이 될 때까지 돈다면 answer++
        if (row === n) answer++;
        else {
            for (let i = 1; i <= n; i++) {
                map[row + 1] = i;
                if (isValid(map, row + 1)) dfs(map, row + 1);
            }
        }
    };

    const isValid = (map, row) => {
        for (let i = 1; i < row; i++) {
            if (map[i] === map[row]) return false;
            if (Math.abs(map[i] - map[row]) === Math.abs(i - row)) return false;
        }
        return true;
    };

    for (let i = 1; i <= n; i++) {
        const map = new Array(n + 1).fill(0); // [!] 어차피 한줄에 하나이므로 일차원 배열
        map[1] = i;
        dfs(map, 1);
    }

    return answer;
};

module.exports = function p2() {
    console.log(solution(4));
};
