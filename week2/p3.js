/**
 * 전력망을 둘로 나누기 [오픈북] [?] 이거 BFS?
 * @param {number} n 2 <= n <= 100 송전탑 수 -> [!] "n갯수가 적은 것"을 보고 완전탐색을 생각해야 됨
 * @param {*} wires
 */
function solution(n, wires) {
    // 트리 문제라고 해서 꼭 트리를 만드는 것은 아닌가 봄
    // 모든 "연결"들을 저장
    let answer = -1;
    let links = {};

    wires.map((wire) => {
        const [v1, v2] = wire;
        if (!links[v1]) links[v1] = [];
        if (!links[v2]) links[v2] = [];

        links[v1].push(v2);
        links[v2].push(v1);
    });

    /**
     * [root, exception]의 연결에서 exception부분을 자르고 root를 루트로 했을 때의 노드 개수
     * @param {number} root
     * @param {number} exceptoin
     */
    const searhTree = (root, exception) => {
        let count = 0;
        // [!] 큐를 만듦으로써 다음 탐색할 곳을 순차적으로 진행 -> [?] 왜 큐를 사용해야 했나
        // 할일이 추가된다면 push, 할일이 끝났다면 pop
        let queue = [root];
        let visited = []; // [!] 탐색한 곳 ex) [비어있음, 비어있음, true, 비어있음, true ...] -> 탐색한 거 이렇게 저장해도 좋을 듯
        visited[root] = true;
        while (queue.length > 0) {
            const currentNode = queue.shift();
            // links[currentNode]에 모든 요소들을 queue에 추가하여 다음 작업들을 실행
            links[currentNode].map((nextNode) => {
                if (nextNode !== exception && !visited[nextNode]) {
                    visited[nextNode] = true;
                    queue.push(nextNode);
                }
            });
            count++;
        }
        return count;
    };

    wires.map((wire) => {
        const [v1, v2] = wire;
        // [!] Math.abs 절댓값 구하기
        const dif = Math.abs(searhTree(v1, v2) - searhTree(v2, v1));
        if (answer === -1) answer = dif;
        else if (answer > dif) answer = dif;
    });

    return answer;
}

module.exports = function p3() {
    console.log(
        solution(9, [
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5],
            [4, 6],
            [4, 7],
            [7, 8],
            [7, 9],
        ])
    );
    console.log(
        solution(4, [
            [1, 2],
            [2, 3],
            [3, 4],
        ])
    );
    console.log(
        solution(7, [
            [1, 2],
            [2, 7],
            [3, 7],
            [3, 4],
            [4, 5],
            [6, 7],
        ])
    );
};
