function solution(survey, choices) {
    var answer = "";
    // []로 해주어서 틀렸었음...
    let _point = [0, 0, 0, 0]; //rt, fc, mj, an

    const setChoices = (index, choicesNum, isOrdered) => {
        if (isOrdered) _point[index] -= choicesNum - 4;
        else _point[index] += choicesNum - 4;
    };

    while (survey.length > 0) {
        const q = survey.shift();
        // RT랑 TR 분기처리 해주어야되는줄 모르고 작업 -> 문제 잘못읽음
        if (q === "RT" || q === "TR") {
            if (q === "RT") setChoices(0, choices[0], true);
            else setChoices(0, choices[0], false);
        } else if (q === "CF" || q === "FC") {
            if (q === "CF") setChoices(1, choices[0], true);
            else setChoices(1, choices[0], false);
        } else if (q === "JM" || q === "MJ") {
            if (q === "JM") setChoices(2, choices[0], true);
            else setChoices(2, choices[0], false);
        } else if (q === "AN" || q === "NA") {
            if (q === "AN") setChoices(3, choices[0], true);
            else setChoices(3, choices[0], false);
        }
        choices.shift();
    }

    if (_point[0] >= 0) {
        answer += "R";
    } else answer += "T";
    if (_point[1] >= 0) {
        answer += "C";
    } else answer += "F";
    if (_point[2] >= 0) {
        answer += "J";
    } else answer += "M";
    if (_point[3] >= 0) {
        answer += "A";
    } else answer += "N";

    return answer;
}

module.exports = function sol() {
    console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
};
