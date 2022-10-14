/**
 * time : 34분 -> 처음에 삽질하다가 10분을 날림. 쉬웠음
 * 크레인 인형뽑기 게임 by 프로그래머스 kakao
 * @param {number[N][N]} board 5 <= N <= 30
 * @param {number[]} moves 크레인 작동 배열
 * @returns number
 */
function solution(board, moves) {
    var answer = 0;
    const boardWidth = board.length;
    // 처음에 배열을 굳이 안써도 될 것같아서 안썼다가 틀렸었음
    const stack = [];

    function getDoll(move) {
        for (let i = 0; i < boardWidth; i++) {
            if (board[i][move] === 0) continue;
            else {
                const doll = board[i][move];
                board[i][move] = 0;
                return doll;
            }
        }
    }

    for (let i = 0; i < moves.length; i++) {
        const cur = getDoll(moves[i] - 1) || 0;
        //     인형이 없는 곳에 크레인 작동시, 아무일도 없음
        if (cur === 0) continue;

        if (cur === stack[stack.length - 1]) {
            answer += 2;
            stack.pop();
        } else {
            stack.push(cur);
        }
    }

    return answer;
}

module.exports = function p1() {
    console.log(
        solution(
            [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 3],
                [0, 2, 5, 0, 1],
                [4, 2, 4, 4, 2],
                [3, 5, 1, 3, 1],
            ],
            [1, 5, 3, 5, 1, 2, 1, 4]
        )
    );
};
