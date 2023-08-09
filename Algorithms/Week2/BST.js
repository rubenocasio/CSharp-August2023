/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if (!this.root) {
      return console.log("This is empty!");
    }
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  // Define the method "min" with a parameter "current" (defaulting to the root node).
  min(current = this.root) {
    // Check if "current" is falsy (null or undefined).
    if (!current) {
      // If it's falsy, return the result of the "isEmpty" method.
      return;
    }
    // Enter a loop as long as the "left" property of "current" is not null.
    while (current.left) {
      // Update "current" to its left child, moving down the tree.
      current = current.left;
    }
    // Return the data of the leftmost node, which is the smallest value in the tree.
    return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  // Define the method "minRecursive" with a parameter "current" (defaulting to the root node).
  minRecursive(current = this.root) {
    // Check if "current" is falsy (null or undefined).
    if (!current) {
      // If it's falsy, return the result of the "isEmpty" method.
      return this.isEmpty();
    }
    // Check if the "left" property of "current" is falsy (null or undefined).
    if (!current.left) {
      // If there's no left child, return the data of the current node.
      return current.data;
    }
    // If there is a left child, recursively call "minRecursive" with the left child as the new "current".
    return this.minRecursive(current.left);
  }


  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  // Define the method "max" with a parameter "current" (defaulting to the root node).
  max(current = this.root) {
    // Check if the tree is empty using the "isEmpty" method.
    if (this.isEmpty()) {
      // If the tree is empty, return null as there is no maximum value.
      return null;
    }

    // Enter a loop as long as the "right" property of "current" is not null.
    while (current.right) {
      // Update "current" to its right child, moving down the tree to the right.
      current = current.right;
    }
    // Return the data of the rightmost node, which is the maximum value in the tree.
    return current.data;
  }


  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  // Define the method "maxRecursive" with a parameter "current" (defaulting to the root node).
  maxRecursive(current = this.root) {
    // Check if "current" is null.
    if (current === null) {
      // If "current" is null, return null since there is no maximum value.
      return null;
    }

    // Check if the "right" property of "current" is falsy (null or undefined).
    if (!current.right) {
      // If there's no right child, return the data of the current node, which represents the maximum value.
      return current.data;
    }

    // If there is a right child, recursively call "maxRecursive" with the right child as the new "current".
    return this.maxRecursive(current.right);
  }


  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {
    let current = this.root;

    while (current) {
      if (current.data === searchVal) {
        return true;
      }

      if (searchVal < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (current === null) {
      return false;
    }

    if (current.data === searchVal) {
      return true;
    }

    if (searchVal < current.data) {
      return this.containsRecursive(searchVal, current.left);
    }

    if (searchVal > current.data) {
      return this.containsRecursive(searchVal, current.right);
    }
  }

  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a sub tree depending on if the
   *    startNode is the root or not.
   */
  range(startNode = this.root) {
    if (!startNode) {
      return null;
    }
    return this.max(startNode) - this.min(startNode);
  }


  /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal) { }

  /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, curr = this.root) { }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
emptyTree.isEmpty()

const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

// threeLevelTree.isEmpty()
console.log(threeLevelTree.min())
console.log(threeLevelTree.minRecursive())
console.log(threeLevelTree.max())
console.log(threeLevelTree.maxRecursive())
console.log(threeLevelTree.contains(2))
console.log(threeLevelTree.contains(200))
console.log(threeLevelTree.containsRecursive(2))
console.log(threeLevelTree.containsRecursive(200))
console.log(threeLevelTree.range())


/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
  // const fullTree = new BinarySearchTree();
  // fullTree
  //   .insert(25)
  //   .insert(15)
  //   .insert(10)
  //   .insert(22)
  //   .insert(4)
  //   .insert(12)
  //   .insert(18)
  //   .insert(24)
  //   .insert(50)
  //   .insert(35)
  //   .insert(70)
  //   .insert(31)
  //   .insert(44)
  //   .insert(66)
  //   .insert(90);