// s는 직진, l은 좌회전, r은 우회전, 격자 끝을 넘으면 다시 돌아옴
// 경로 사이클의 총 개수?
// [!] 순환 경로이기 때문에 시작점은 상관없음
// grid 길이 500 -> 애매하게 작음
// 길이들을 오름차순으로 리턴
// 모든 경로이므로, 완탐? -> 재귀
// [!] 같은 경로인 것을 어떻게 알까
// 순환되지 않을 수 있을까
// 콜스택 사이즈 초과
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
/**
 * time : 1:09:55 실패 : 콜스택 사이즈 초과
 * 4. 빛의 경로 사이클 by 프로그래머스
 * @param {string[]} grid
 * @returns
 */
function solution(grid) {
    var answer = [];
    let cycles = [];
    grid = grid.map((x) => x.split(""));

    // 처음 grid[0][0]을 시작으로 사방향으로 쏘기
    for (let next = 0; next < 4; next++) {
        const [cnt, cycle] = recur({ vCor: [0, 0], vNext: [next] }, [0, 0], [...grid], 1);
        // if (answer.includes(cnt) && !isSameCycle(cycles, cycle)) answer.push(cnt);
        answer.push(cnt);
    }

    answer.sort();
    return answer;
}

// 회귀 성능때문에 그런가?
// visited = {vCor:[[0, 0], ...], vNext:[next, ...]}
const recur = (visited, cur, grid, cnt) => {
    const { vCor, vNext } = visited;
    const lastNext = vNext[vNext.length - 1];
    const [cx, cy] = cur;
    const nx = dx[lastNext];
    const ny = dy[lastNext];

    // 다음 이동할 좌표
    const nCor = move(grid, [cx + nx, cy + ny]);
    const next = nextDir(nCor, lastNext, grid);
    cnt++;
    // base condition
    for (let i = 0; i < vNext.length; i++) {
        if (vCor[i] === nCor && vNext[i] === next) return [cnt, visited];
    }

    recur({ vCor: [...vCor, nCor], vNext: [...vNext, next] }, nCor, grid, cnt);
};

const move = (grid, coord) => {
    const [x, y] = coord;
    const w = grid[0].length;
    const h = grid.length;

    if (x < 0) return [w - 1, y];
    else if (x >= w) return [0, y];
    else if (y < 0) return [x, h - 1];
    else if (y >= h) return [x, 0];
    else return [x, y];
};

const nextDir = (nCor, prevDir, grid) => {
    const [x, y] = nCor;
    // 시계로 생각하기
    if (grid[x][y] === "S") return prevDir;
    else if (grid[x][y] === "L") return prevDir - 1;
    else if (grid[x][y] === "R") return prevDir + 1;
};

// const isSameCycle = (cycles, cycle) => {
//     while (cycles.length !== 0) {
//         const {_vCor, _vNext} = cycles.pop();
//         const s = _vCor.indexOf(cycle[0]);
//         if (!s) break;

//         for (let i = 0; i < _cy.length - s; i++) {
//             if (cycle[i] !== _cy[i + s]) return false;
//         }
//         for (let i = 0; i < s; i++) if (cycle[i + _cy.length - s] !== _cy[i]) return false;
//     }

//     return true;
// };
