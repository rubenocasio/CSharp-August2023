
/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }
  // Parent is located at Math.floor(i / 2);.
  // Left child is located at i * 2.
  // Right child is located at (i * 2) + 1.

  //  Parent function
  idxOfParent(i) {
    return Math.floor(i / 2);
  }

  idxOfLeftChild(i) {
    return i * 2;
  }

  idxOfRightChild(i) {
    return i * 2 + 1;
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    if (this.heap.length > 1) {
      return this.heap[1];
    }
    return null;
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  // Insert a number into the MinHeap
  insert(num) {
    // Add the number to the end of the heap array
    this.heap.push(num);

    // Get the index of the newly inserted element
    let currentIndex = this.heap.length - 1;

    // Keep moving the element up the heap until the MinHeap property is restored
    while (currentIndex > 1) {
      // Calculate the index of the parent element
      const parentIndex = Math.floor(currentIndex / 2);

      // If the current element is smaller than its parent, swap them
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        // Update the currentIndex to the parent index after swapping
        currentIndex = parentIndex;
      } else {
        // If the current element is not smaller than its parent, stop the loop
        break;
      }
    }
  }

  /**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and set idx1 equal to the popped value.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
  extract() {
    if (this.heap.length <= 1) {
      return null;
    }
    const minNum = this.heap[1];

    const idx1 = this.heap.pop();
    this.heap[1] = idx1;


    let currentIndex = 1;

    while (true) {
      const leftChildIdx = currentIndex * 2;
      const rightChildIdx = currentIndex * 2 + 1;
      let smallerChildIdx = null;

      if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] < this.heap[currentIndex]) {
        smallerChildIdx = leftChildIdx;
      }

      if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[currentIndex] &&
        (!smallerChildIdx || this.heap[rightChildIdx] < this.heap[leftChildIdx])) {
        smallerChildIdx = rightChildIdx;
      }

      if (smallerChildIdx === null) {
        break;
      }

      [this.heap[currentIndex], this.heap[smallerChildIdx]] = [
        this.heap[smallerChildIdx],
        this.heap[currentIndex],
      ];


      currentIndex = smallerChildIdx;
    }

    // Return the extracted minimum number.
    return minNum;
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}

const testMinHeap = new MinHeap();
console.log(testMinHeap.top())
testMinHeap.insert(5);
testMinHeap.insert(4);
testMinHeap.insert(7);
testMinHeap.insert(3);
testMinHeap.insert(6);
testMinHeap.insert(2);
console.log(testMinHeap.top())
testMinHeap.printHorizontalTree()