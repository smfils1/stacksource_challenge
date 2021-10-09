class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.memory = {};
  }

  insert(key) {
    let helper = (key, node = this.root) => {
      if (node == null) {
        this.memory[key] = new Node(key);
        return this.memory[key];
      }

      if (key < node.key) node.left = helper(key, node.left);
      else node.right = helper(key, node.right);

      return node;
    };
    this.root = helper(key);
    return key;
  }

  inorder() {
    let helper = (node = this.root, result = []) => {
      if (node != null) {
        helper(node.left, result);
        result.push(node.key);
        helper(node.right, result);
      }
      return result;
    };
    return helper();
  }

  search(key) {
    return this.memory.hasOwnProperty(key);
  }

  delete(key) {
    let minNode = (node) => {
      if (node.left === null) return node;
      else return minNode(node.left);
    };
    let helper = (key, node = this.root) => {
      if (node == null) return null;

      if (key < node.key) {
        node.left = helper(key, node.left);
        return node;
      }
      if (key > node.key) {
        node.right = helper(key, node.right);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        let temp = minNode(node.right);
        node.key = temp.key;
        node.right = helper(temp.key, node.right);
        return node;
      }
    };
    delete this.memory[key];
    this.root = helper(key);
    return key;
  }
}

module.exports = BST;
