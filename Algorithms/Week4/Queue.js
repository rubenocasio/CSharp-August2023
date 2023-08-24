/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    this.items.push(item);
    return this.size();
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    return this.items[0];
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }

  /**
* Compares this queue to another given queue to see if they are equal.
* Avoid indexing the queue items directly via bracket notation, use the
* queue methods instead for practice.
* Use no extra array or objects.
* The queues should be returned to their original order when done.
* - Time: O(?).
* - Space: O(?).
* @param {Queue} q2 The queue to be compared against this queue.
* @returns {boolean} Whether all the items of the two queues are equal and
*    in the same order.
*/
  compareQueues(q2) { }

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() { }

  print() {
    const str = this.items.join(" ");
    console.log(str);
    return str;
  }
}
const q1 = new Queue();
const q2 = new Queue();
const q3 = new Queue();

console.log("=========== q1 below ==============")
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(3);
q1.enqueue(2);
q1.enqueue(4);
q1.print();
console.log("=========== q2 below ==============")
q2.enqueue(1);
q2.enqueue(2);
q2.enqueue(3);
q2.enqueue(3);
q2.enqueue(2);
q2.enqueue(4);
q1.print();

console.log("=========== q3 below ==============")
q3.enqueue("m");
q3.enqueue("a");
q3.enqueue("d");
q3.enqueue("a");
q3.enqueue("m");
q3.print();


/* Bonus: Rebuild the above class using a linked list instead of an array. */