// 33분
// 최단 경로에 문제가 있음
// 이 것도 백트래킹?
function solution(numbers, hand) {
    var answer = "";
    const _hand = hand === "right" ? "R" : "L";
    let map = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];

    const alwaysLeft = [1, 4, 7];
    const alwaysRight = [3, 6, 9];

    let leftQ = [[3, 0]]; // y,x
    let rightQ = [[3, 2]];

    for (let i = 0; i < numbers.length; i++) {
        if (alwaysLeft.includes(numbers[i])) {
            leftQ.shift();
            leftQ.push([alwaysLeft.indexOf(numbers[i]), 0]);
            answer += "L";
        } else if (alwaysRight.includes(numbers[i])) {
            rightQ.shift();
            rightQ.push([alwaysRight.indexOf(numbers[i]), 2]);
            answer += "R";
        } else {
            const ld = getDistance(leftQ, map, numbers[i]);
            const rd = getDistance(rightQ, map, numbers[i]);
            answer += ld === rd ? _hand : ld > rd ? "R" : "L";
        }
    }
    //     상하좌우 이동 -> BFS? DFS?
    //     2580은 현 위치 기준 더 가까운 손가락
    //     오른손잡이가 있음
    return answer;
}

const getDistance = (queue, map, target) => {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let level = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let count = 0;
    let minDistance = 100;
    while (queue.length !== 0) {
        const [cy, cx] = queue.shift();
        if (map[cy][cx] === target) {
            queue = [[cy, cx]];
            level[cy][cx] = count;
            console.log(level);
            if (level[cy][cx] < minDistance) minDistance = level[cy][cx];
        }
        map[cy][cx] = "x";

        if (String(map[cy + dy[0]]?.[cx + dx[0]]).match(/[0-9]/)) {
            queue.push([cy + dy[0], cx + dx[0]]);
            level[cy][cx] = count;
        }
        if (String(map[cy + dy[1]]?.[cx + dx[1]]).match(/[0-9]/)) {
            queue.push([cy + dy[1], cx + dx[1]]);
            level[cy][cx] = count;
        }
        if (String(map[cy + dy[2]]?.[cx + dx[2]]).match(/[0-9]/)) {
            queue.push([cy + dy[2], cx + dx[2]]);
            level[cy][cx] = count;
        }
        if (String(map[cy + dy[3]]?.[cx + dx[3]]).match(/[0-9]/)) {
            queue.push([cy + dy[3], cx + dx[3]]);
            level[cy][cx] = count;
        }
        count++;
    }

    map = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];

    return minDistance;
};

module.exports = function p1() {
    console.log(solution([4, 5, 9, 5], "right"));
    // console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
    // console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
};
