/**
 * isEmptyObject
 * @param {object} object
 * @return boolean
 */
// 외우기
module.exports = function isEmptyObject(object) {
    const isObject = object.constructor === Object; // 이 부분은 안해줘도 될듯
    const isEmpty = Object.keys(object).length === 0;
    return isObject && isEmpty;
};
