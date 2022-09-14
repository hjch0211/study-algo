/**
 * isEmptyObject
 * @param {object} object
 * @return boolean
 */
// 외우기
module.exports = function isEmptyObject(object) {
    const isObject = object.constructor === Object;
    const isEmpty = Object.keys(object).length === 0;
    return isObject && isEmpty;
};
