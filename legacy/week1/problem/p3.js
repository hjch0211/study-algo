/**
 * Problem 3. 경로를 연결하라
 * @param {string[]} stringArray
 */
const solution = (stringArray) => {
    let _return = "";
    const pathArray = refineArray(stringArray);

    for (index in pathArray) {
        const value = pathArray[index];

        if (value === "" || value === ".") continue;
        else if (value === "..") _return = popString(_return);
        else if (value === "...") _return = popString(popString(_return));
        else _return += `/${value}`;
    }

    console.log(_return);
};

// 함수 체이닝이 가능하므로 함수로 굳이 안빼도 되지 않았을까
const refineArray = (stringArray) => {
    const string = stringArray.join("/");
    const _return = string.split("/");
    return _return;
};

const popString = (string) => {
    const stringArray = string.split("/");
    stringArray.pop();
    const _return = stringArray.join("/");
    return _return;
};

module.exports = function p3() {
    // 결과: '/foo/bar/baz/asdf'
    solution(["/foo", "bar", "baz/asdf"]);

    // 결과: '/foo/bar/baz/asdf'
    solution(["/foo", "bar", "baz/asdf", "quxx", ".."]);

    // 결과: '/foo/bar/baz/asdf'
    solution(["/foo", "bar", "baz/./asdf"]);

    // 결과: '/foo/asdf'
    solution(["/foo", "bar", "baz", "...", "/asdf"]);

    // 결과: '/ab'
    solution(["/foo", "bar", "...", ".", "ab"]);
};
