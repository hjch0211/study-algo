// [30분] 생성자 함수this 선언 까먹어서 조금 걸림
// [!] this를 줄이는게 깔끔함 -> 차라리 클로저와 freeze를 사용해서 정리해주는 것이 좋음
// JS의 프로토타입은 별로임
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    // [!] 생성자 함수 작성할 때 this로 멤버 선언
    this.size = k;
    this.data = new Array(this.size + 1);
    this.front = 0;
    this.rear = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (value === undefined) return false;
    if (this.isFull()) return false;

    this.data[this.rear] = value;
    if (this.rear === this.size) this.rear = 0;
    else this.rear++;

    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;

    this.data[this.front] = null;
    if (this.front === this.size) this.front = 0;
    else this.front++;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;

    return this.data[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;

    if (this.rear === 0) return this.data[this.size];
    return this.data[this.rear - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.front === this.rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    console.log(this.front, this.rear);
    return this.front - this.rear === 1 || this.rear - this.front === this.size;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

module.exports = function p2() {
    var obj = new MyCircularQueue(3);
    var param_1 = obj.enQueue(3);
    var param_12 = obj.enQueue(1);
    var param_11 = obj.enQueue(2);
    var param_13 = obj.enQueue(2);
    // var param_2 = obj.deQueue();
    // var param_3 = obj.Front();
    // var param_4 = obj.Rear();
    // var param_5 = obj.isEmpty();
    // var param_6 = obj.isFull();

    console.log(param_1, param_13);
    // console.log(param_1, param_13, param_2, param_3, param_4, param_5, param_6);
};
