/**
 * Problem 1 : No more undefined
 * @param {object} object
 * @param {string} string
 * @returns
 */
const safelyGet = (object, string) => {
    const stringArray = string.split(".");
    const endIndex = stringArray.length - 1;
    return backT(object, stringArray, 0, endIndex);
};

const backT = (object, stringArray, index, endIndex) => {
    if (object === undefined) {
        return console.log(undefined);
    }
    if (index === endIndex) {
        return console.log(object[stringArray[index]]);
    }
    backT(object[stringArray[index]], stringArray, ++index, endIndex);
};

module.exports = p1 = () => {
    /* repository가 undefined인 경우 */
    const object1 = {
        repository: undefined,
    };

    /* repository의 readme가 undefined인 경우 */
    const object2 = {
        repository: {
            readme: undefined,
        },
    };

    /* repository.reademe 모두가 존재하는 경우 */
    const object3 = {
        repository: {
            readme: {
                extension: "md",
                content: "금율을 쉽고 간편하게",
            },
        },
    };

    safelyGet(object1, "repository.readme.extension");
    // -> 반환 값: undefined

    safelyGet(object1, "repository.readme");
    // -> 반환 값: undefined

    safelyGet(object1, "repository");
    // -> 반환 값: undefined

    safelyGet(object2, "repository.readme.extension");
    // -> 반환 값: undefined

    safelyGet(object2, "repository.readme");
    // -> 반환 값: undefined

    safelyGet(object2, "repository");
    // -> 반환 값: { readme: undefined }

    safelyGet(object3, "repository.readme.extension");
    // -> 반환 값: 'md'

    safelyGet(object3, "repository.readme");
    // -> 반환 값: { extension: 'md', content: '금율을 쉽고 간편하게' }
};
