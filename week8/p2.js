// "aya", "ye", "woo", "ma"
/**
 * Time : 24:00 -> 하나 놓치고 틀렸었음
 * Title : 옹알이(2) by 프로그래머스
 * Approach : 그냥 말 그대로 구현하기
 * Review : 얼마나 빨리 짜느냐가 중요했던 것같음. 너무 느렸던 것 같음
 * @param {string[]} babbling
 * @returns
 */
function solution(babbling) {
    var answer = 0;

    babbling.forEach((x) => {
        const _ = x.split("");
        let prev = "";
        while (_.length !== 0) {
            let tmp = "";
            tmp += _.shift();
            tmp += _.shift();
            if ((tmp === "ye" || tmp === "ma") && tmp !== prev) {
                prev = tmp;
                continue;
            }
            tmp += _.shift();
            if ((tmp === "aya" || tmp === "woo") && tmp !== prev) {
                prev = tmp;
                continue;
            } else return;
        }
        answer += 1;
    });

    return answer;
}
