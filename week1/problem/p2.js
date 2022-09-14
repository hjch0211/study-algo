const isEmptyObject = require("../../util/isEmptyObject.js");

/**
 * Problem 2. 쿼리 스트링으로 만들어줘
 * @param {object} object
 * @return string
 * 여기서만 30분걸림
 */
const createQueryString = (object) => {
    let _return = "";
    if (isEmptyObject(object)) return console.log(_return);

    // Object.entries 검색했음
    const objEntries = Object.entries(object);
    const objLength = objEntries.length;

    // !concat은 새로운 문자열 반환인 것을 잊지 말기
    _return = _return.concat("?");

    // for of 검색했음
    for (const [key, value] of objEntries) {
        if (value === null || value === undefined) continue;
        if (objEntries[0][0] !== key) _return = _return.concat("&");
        // isArray 검색했음
        if (Array.isArray(value)) {
            for (const i in value) {
                if (i !== "0") _return = _return.concat("&");
                _return = _return.concat(`${key}=${encodeURIComponent(value[i])}`);
            }
        } else {
            //encodeURIComponent 처음 들어봄
            _return = _return.concat(`${key}=${encodeURIComponent(value)}`);
        }
    }

    console.log(_return);
};

module.exports = function p2() {
    // 결과: ""
    createQueryString({});

    // 결과: "?foo=bar"
    createQueryString({
        foo: "bar",
    });

    // 결과: "?foo=bar&enabled=true&browser=false"
    createQueryString({
        foo: "bar",
        enabled: true,
        browser: false,
    });

    // 결과: "?foo=1&foo=2&foo=3"
    createQueryString({
        foo: [1, 2, 3],
    });

    // 결과: "?foo=this%20is%20test"
    createQueryString({
        foo: "this is test",
    });

    // 결과: "?foo=1&quux=foo"
    createQueryString({
        foo: 1,
        bar: null,
        baz: undefined,
        quux: "foo",
    });
};
