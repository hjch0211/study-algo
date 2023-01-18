/**
 * 빛의 경로 사이클 [오픈북] -> [?] 이 문제도 완전탐색 문제 -> 모든 경우의 수를 탐색해야하므로 DFS?
 * @param {string[]} grid 'L', 'R', 'S'로 이루어진 격자 정보
 * @returns
 */
const DIRECTION = ["up", "right", "down", "left"]; // up ,right ,down, left 일부러 시계

const solution = (grid) => {
    var answer = [];
    // 그리드 첫 블록에서, 사방향에서 빛이 쏘여질 때 케이스들을 정리 -> 1,1 -> 1,2, 1,1 -> 2,1 ...
    let cases = [0, 0, 0, 0];

    let stack = []; //DFS이므로 일단 stack 만들기

    for (let i = 0; i < cases.length; i++) {
        getCicle(grid, DIRECTION[i]);
    }

    // answer 오름차순으로 반환하기

    // 중복된 사이클은 지워져야함

    // cases에서 0빼주기
    return answer;
};

/**
 * @param {'S'|"L"|"R"} block
 * @param {'up'| 'right'| 'down'| 'left'} prevDirection
 * @returns
 */
const getNextDirection = (block, prevDirection) => {
    if (block === "S") return prevDirection;
    else if (block === "L") return DIRECTION[DIRECTION.indexOf(prevDirection) - 1 || "left"];
    else if (block === "S") return DIRECTION[DIRECTION.indexOf(prevDirection) + 1 || "up"];
};

const getCicle = (grid, startDirection) => {
    const startBlock = grid[0][0];
    let stack = [];
    let count = 1;
    let visited = [[startBlock, startDirection]]; //startBlock으로 들어온 방향 ex) ->S : [S,right] -> 처음으로 돌아온 케이스만 생각?

    for (let i = 0; stack.length !== 0; i++) {
        const [currentBlock, currentDirection] = stack.pop(); //currentBlock의 위치를 알아야할 듯
        if (visited[0][0] === currentBlock && visited[0][1] === currentDirection) break;
        const nextDirection = getNextDirection(currentBlock, currentDirection);
        switch (nextDirection) {
            case DIRECTION[0]:
            case DIRECTION[1]:
            case DIRECTION[2]:
            case DIRECTION[3]:
        }
        count++;
    }

    return count;
};

module.exports = function p4() {
    console.log(solution(["SL", "RL"]));
    //  * *
    //* S L *
    //* R L *
    //  * *
    console.log(solution(["S"]));
    console.log(solution(["R", "R"]));
};
