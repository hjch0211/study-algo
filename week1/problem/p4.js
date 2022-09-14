// 실패
/**
 * Problem 4. 푸시로 알려드려요
 * @param {() ⇒ Promise<string>} fetchPaper
 */
const solution = (fetchPaper) => {
    fetchPaper()
        .then((res) => {
            const start = timer.start();
            // performance.now()는 브라우저에서 지원
            // Date 검색함 ms로 반환
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err);
            return new Error();
        });
};

const fetchPaper = () => {
    // Promise 생성자 함수 검색함
    const _return = new Promise((resolve, rejects) => {
        // 1초이내
        setTimeout(() => {
            resolve("string");
        }, 500);
        // 1초초과
        // setTimeout(() => {
        //     resolve("string");
        // }, 1500);
    });

    return _return;
};

const timer = {
    start() {
        return new Date().getTime();
    },
    end() {
        return new Date().getTime();
    },
};

module.exports = function p4() {
    solution(fetchPaper);
};
