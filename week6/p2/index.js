/**
 * time : 13:42 성공
 * 2. 완주하지 못한 선수 by 프로그래머스
 * @param {number[]} participant
 * @param {number[]} completion
 * @returns
 * 참여자 10만명 -> 최적화 고려, 이름 20이하
 * 동명이인 고려 -> 이걸 못 읽고, 처음에 set으로 했다가 삽질
 */
function solution(participant, completion) {
    var answer = "";
    participant.sort();
    completion.sort();

    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }

    return answer === "" ? participant[participant.length - 1] : answer;
}
