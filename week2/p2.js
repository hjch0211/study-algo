/**
 * 조이스틱 [40분, 96점 실패]
 * @param {} name
 * @returns
 */
// 확실히 린트 프로그램이 에러를 검출해주지 못하니까 오타가 많았음
function solution(name) {
    var answer = 0; //최소 조작값 리턴

    const slicedName = sliceName(name);

    const up = ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
    const down = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O"];

    for (let i = 0; i < slicedName.length; i++) {
        if (slicedName[i] === "A") continue;
        // indexOf 찾아봄
        if (up.includes(slicedName[i])) answer += up.indexOf(slicedName[i]) + 1;
        else answer += down.indexOf(slicedName[i]) + 1;
    }

    return answer + minMove(slicedName, name);
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

const minMove = (slicedName, name) => {
    let mostLongAIndex = 0;
    let mostLongALength = 0;
    let tempIndex = 0;
    let tempLength = 0;

    // 중간에 긴 연속된 A가 있을 때
    // ABBBBAAAAABB : B만큼 갔다가 B만큼 돌아오고 뒤에서부터읽음
    //
    // B*2 + A*5  // 2*(B -B)

    // 문자열에서 가장 긴 연속된 A의 인덱스 위치와 길이를 구해야 됨.
    for (let i = 1; i < name.length; i++) {
        if (name[i] === "A" && tempLength === 0) {
            tempIndex = i;
            tempLength++;
        } else if (name[i - 1] == "A" && name[i] === "A" && tempLength > 0) {
            tempLength++;
        } else {
            tempIndex = 0;
            tempLength = 0;
        }

        if (tempLength > mostLongALength) {
            mostLongAIndex = tempIndex;
            mostLongALength = tempLength;
        }
    }

    // 이동을 안하므로
    if (slicedName === name && !slicedName.match(/[B-Z]/)) return 0;
    else if (mostLongALength === 0) return slicedName.length - 1;
    else
        return Math.min(
            name.length - 1,
            2 * (mostLongAIndex - 1) + (name.length - (mostLongAIndex + mostLongALength)),
            mostLongAIndex - 1 + 2 * (name.length - (mostLongAIndex + mostLongALength))
        );
};

module.exports = function p2() {
    console.log(solution("JEROEN"));
    console.log(solution("JAN"));
    console.log(solution("BAAAAASAABAA"));
    console.log(solution("BBAAAAAAASAABB")); // ...
    console.log(solution("ABAAAAAB"));
    console.log(solution("AABAA"));
};
