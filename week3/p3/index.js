// [...2시간?] 왜 이렇게 오래 걸렸지? -> 종이나 주석으로 먼저 정리하고 풀었어야 했던 것같음
// + 문제 잘못이해
var TextEditor = function () {
    this.text = "";
    this.cursor = 0; // 0 ~
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
    this.text = this.text.slice(0, this.cursor) + text + this.text.slice(this.cursor);
    this.cursor += text.length;
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
    //     s t / r i n g ex)1
    const actuallyDeleted = this.cursor - k > 0 ? k : this.cursor;
    this.text = this.text.slice(0, this.cursor - actuallyDeleted) + this.text.slice(this.cursor);
    this.cursor = this.cursor - k > 0 ? this.cursor - k : 0;

    return actuallyDeleted;
};
//  [!] add, delete 시간 초과 ** 둘 다 끽해봐야 O(n)인데..?

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
    //     s / t r i n g ex)3
    this.cursor = this.cursor - k >= 0 ? this.cursor - k : 0;
    return 10 > this.text.slice(0, this.cursor).length
        ? this.text.slice(0, this.cursor)
        : this.text.slice(this.cursor - 10, this.cursor);
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
    this.cursor = this.cursor + k <= this.text.length ? this.cursor + k : this.text.length;
    return 10 > this.text.slice(0, this.cursor).length
        ? this.text.slice(0, this.cursor)
        : this.text.slice(this.cursor - 10, this.cursor);
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

module.exports = function p3() {
    let obj = new TextEditor();
    console.log(obj.addText("arnvmumatgmyw"));
    console.log(obj.deleteText(5));
    console.log(obj.addText("zrlufuifuy"));
    console.log(obj.cursorLeft(2));
    console.log(obj.addText("unh"));
    console.log(obj.deleteText(20));
    console.log(obj.addText("kwwp"));
    console.log(obj.cursorLeft(6));
    console.log(obj.deleteText(9));
};
