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
    return this.root === null;
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
  insert(newVal) {
    const newNode = new BSTNode(newVal);

    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (newVal <= current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

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
  insertRecursive(newVal, current = this.root) {
    if (current === null) {
      this.root = new BSTNode(newVal);
      return this;
    }

    if (newVal <= current.data) {
      if (current.left === null) {
        current.left = new BSTNode(newVal);
        return this;
      }
      return this.insertRecursive(newVal, current.left);
    } else {
      if (current.right === null) {
        current.right = new BSTNode(newVal);
        return this;
      }
      return this.insertRecursive(newVal, current.right);
    }
  }
  /**
   * DFS Preorder: (CurrNode, Left, Right)
   * Converts this BST into an array following Depth First Search preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(node = this.root, vals = []) {
    if (node) {
      vals.push(node.data);
      this.toArrPreorder(node.left, vals);
      this.toArrPreorder(node.right, vals);
    }
    return vals;
  }

  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
    if (node) {
      this.toArrInorder(node.left, vals);
      vals.push(node.data);
      this.toArrInorder(node.right, vals);
    }
    return vals;
  }

  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Converts this BST into an array following Depth First Search postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPostorder(node = this.root, vals = []) {
    if (node) {
      this.toArrPostorder(node.left, vals);
      this.toArrPostorder(node.right, vals);
      vals.push(node.data);
    }
    return vals;
  }

  /**
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * Example on the fullTree var:
   * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
   * @param {Node} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */
  toArrLevelorder(current = this.root) {
    // Initialize an empty array 'queue' for holding nodes to process
    const queue = [];
    // Initialize an empty array 'vals' for holding the node values in the correct order
    const vals = [];

    // If there's a node provided, enqueue it for processing
    if (current) {
      queue.push(current);
    }

    // Loop continues as long as there are nodes in the queue
    while (queue.length > 0) {
      // Remove the first node from the queue for processing
      const dequeuedNode = queue.shift();
      console.log("This is Queue: ", dequeuedNode)

      // Add its data/value to the 'vals' array
      vals.push(dequeuedNode.data);

      // If the dequeued node has a left child, enqueue it for later processing
      if (dequeuedNode.left) {
        queue.push(dequeuedNode.left);
      }

      // If the dequeued node has a right child, enqueue it for later processing
      if (dequeuedNode.right) {
        queue.push(dequeuedNode.right);
      }
    }
    // console.log("This is Queue: ", queue)
    // After all nodes have been processed, return the 'vals' array
    return vals;
  }

  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root) {
    // If the node is null or undefined (i.e., does not exist), 
    // return 0 because there's no node to count.
    if (!node) {
      return 0;
    }

    // If the node exists, count it as 1 and then recursively count the sizes of its left 
    // and right subtrees. The function essentially adds up the current node (1) and 
    // the sizes of its left and right children.
    return 1 + this.size(node.left) + this.size(node.right);
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
  height(node = this.root) {

    // If the node is null or undefined (i.e., it doesn't exist),
    // return 0. This means we've hit the bottom of the tree.
    if (!node) {
      return 0;
    }

    // Recursively compute the height of the left and right subtrees.
    // The height of the current tree rooted at 'node' is the height of the 
    // taller subtree plus 1 (for the current node). Math.max is used to determine 
    // which subtree is taller.
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }


  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    // Base Case: If the tree or subtree rooted at 'node' is empty,
    // it's not considered a full tree.
    if (!node) {
      return false;
    }

    // If the current node is a leaf node (i.e., has no left or right children),
    // then it satisfies the condition for a full binary tree.
    if (!node.left && !node.right) {
      return true;
    }

    // If the current node has both left and right children, then we need to check 
    // recursively if the subtrees rooted at those children are full.
    if (node.left && node.right) {
      return this.isFull(node.left) && this.isFull(node.right);
    }

    // If the current node has only one child (either left or right but not both),
    // then the tree rooted at this node is not full.
    return false;
  }



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
const fullTree = new BinarySearchTree();
fullTree.insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);
fullTree.print()
console.log(fullTree.min())
console.log(fullTree.minRecursive())
console.log(fullTree.max())
console.log(fullTree.maxRecursive())
console.log(fullTree.contains(2))
console.log(fullTree.contains(200))
console.log(fullTree.containsRecursive(2))
console.log(fullTree.containsRecursive(200))
console.log(fullTree.range())
console.log(fullTree.toArrLevelorder())
console.log(fullTree.size())
console.log(fullTree.height())
console.log(fullTree.isFull())