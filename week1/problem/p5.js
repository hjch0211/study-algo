/**
 * Problem 5. 검색어를 하이라이트하라
 * @param {string} string
 * @param {string} mark
 */
function solution(string, mark) {
    let _return = "";
    // .indexOf 검색함
    let popCommaString = popIndexOf(string, ",");
    // 배열로 만들고 다익스트라 알고리즘 사용
    // 이진 탐색이었나? 그거 구현할줄 몰라서 그냥 탐색

    const toMarkIndex = popCommaString.string.indexOf(mark);
    if (popCommaString.indexArray.includes(toMarkIndex)) {
        popCommaString.indexArray.indexOf(toMarkIndex) += "<mark>".length;
    }

    // 여기까지
    console.log(popCommaString.string.substr(0,toMarkIndex) + '<mark>' + '</mark>'+popCommaString.string.substr(0,-1))



    console.log(_return);
}

const popIndexOf = (string, target) => {
    let indexArray = [];

    while (true) {
        const commaIndex = string.indexOf(target);
        if (commaIndex === -1) return {
             indexArray, string 
            };
        indexArray = [...indexArray, commaIndex];
        string = string.replace(target, "");
    }
};

module.exports = function p5() {
    solution("커피 3,500원", "350");
    // 결과: '커피 <mark>3,50</mark>0원'

    solution("샌드위치 2,350원", "350");
    // 결과: '샌드위치 2,<mark>350</mark>0원'
};
