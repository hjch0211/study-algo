/**
 * time : 33분
 * @param {number} n height
 * @param {number} m width
 * @param {number[][]} painting
 * O(nm) -> 0으로 채워서 걸러주므로 결국 nm만큼 순회
 */
const solution = (n, m, painting) => {
    const x = [0, 1, 0, -1]; // 시계 방향
    const y = [1, 0, -1, 0];

    let paintingCnt = 0;
    let paintingMaxSize = 0;

    const countSize = (pos, paintingSize, queue) => {
        console.log(painting);
        queue.push(pos);
        return paintingSize + 1;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let paintingSize = 0;
            let queue = [[j, i]];
            while (queue.length !== 0) {
                const [cx, cy] = queue.shift();
                if (painting[cy][cx] === 0) break;

                if (painting[cy + y[0]]?.[cx + x[0]] === 1)
                    paintingSize = countSize([cx + x[0], cy + y[0]], paintingSize, queue);
                if (painting[cy + y[1]]?.[cx + x[1]] === 1)
                    paintingSize = countSize([cx + x[1], cy + y[1]], paintingSize, queue);
                if (painting[cy + y[2]]?.[cx + x[2]] === 1)
                    paintingSize = countSize([cx + x[2], cy + y[2]], paintingSize, queue);
                if (painting[cy + y[3]]?.[cx + x[3]] === 1)
                    paintingSize = countSize([cx + x[3], cy + y[3]], paintingSize, queue);
                painting[cy][cx] = 0;
            }
            paintingSize && paintingCnt++;
            if (paintingMaxSize < paintingSize) paintingMaxSize = paintingSize;
        }
    }
    console.log(`result : ${paintingCnt} ${paintingMaxSize}`);
};

module.exports = function p1926() {
    solution(6, 5, [
        [1, 1, 0, 1, 1],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [0, 0, 1, 1, 1],
    ]);
};
