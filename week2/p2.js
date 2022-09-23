/**
 * 조이스틱 [40분, 실패] : 왜 틀린지 모르겠음
 * @param {} name
 * @returns
 */
// 확실히 린트 프로그램이 에러를 검출해주지 못하니까 오타가 많았음
function solution(name) {
    var answer = 0; //최소 조작값 리턴

    const slicedName = sliceName(name);
    console.log(slicedName);
    const up = ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
    const down = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O"];

    for (let i = 0; i < slicedName.length; i++) {
        if (slicedName[i] === "A") continue;
        // indexOf 찾아봄
        if (up.includes(slicedName[i])) answer += up.indexOf(slicedName[i]) + 1;
        else answer += down.indexOf(slicedName[i]) + 1;
    }

    // 이동을 안하므로
    if (slicedName === name && name.includes("A")) return answer;
    else return answer + slicedName.length - 1;
}

// JAASSAAA 첫째자리 기준 연속된 A가 적은 곳으로 이동해야 함
// A가 많을 쪽을 지워주면 될 듯 -> 어차피 지나가지도 않고 "쓸모가 없다"
const sliceName = (name) => {
    let left = 0; //왼쪽 A개수
    let right = 0;
    let slicedName = "";

    for (let i = 1; name[i] === "A"; i++) {
        right++;
    }
    for (let i = name.length - 1; name[i] === "A"; i--) {
        left++;
    }
    // 실수... A를 지워야하는데 A를 빼버림
    if (right <= left) {
        slicedName = name.slice(0, name.length - left);
    } else {
        slicedName = name[0] + name.slice(right + 1, name.length);
    }

    return slicedName || name;
};

module.exports = function p2() {
    console.log(solution("JEROEN"));
    console.log(solution("JAN"));
    console.log(solution("BAAAAASAABAA"));
};
