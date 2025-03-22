import { MaybeNull, Node } from "./Node";

class Tree {
  private root: MaybeNull<Node>;

  constructor(arr: Array<number>) {
    //sort and remove the duplicates
    arr = [...new Set(arr)].sort((a, b) => a - b);
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  private buildTree(
    arr: Array<number>,
    start: number,
    end: number,
  ): MaybeNull<Node> {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);
    //recursive call
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }

  insert(value: number, root: MaybeNull<Node> = this.root): MaybeNull<Node> {
    if (root == null) {
      return new Node(value);
    } else if (value < root.data) {
      //recursive call
      root.left = this.insert(value, root.left);
    } else {
      //recursive call
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  delete(value: number, root: MaybeNull<Node> = this.root): MaybeNull<Node> {
    if (!root) return null;
    // 1. Both children are null → Simply remove the node.
    if (root.data == value && !root.right && !root.left) {
      return null;
    }
    // 2. One child is null → Replace the node with its only child.
    else if (root.data == value && (!root.left || !root.right)) {
      if (!root.left) {
        return root.right;
      } else {
        return root.left;
      }
    }
    // 3. Both children exist → Replace with the leftmost node of the right subtree
    if (root.data === value) {
      let nextNode = root.right;
      while (nextNode && nextNode.left) {
        nextNode = nextNode.left;
      }
      if (nextNode) {
        // Replace current node's value with the successor's value
        root.data = nextNode.data;
        // Delete the successor node (recursively)
        root.right = this.delete(nextNode.data, root.right);
      }
    }
    return root;
  }

  find(value: number, root: MaybeNull<Node> = this.root): MaybeNull<Node> {
    if (!root) return null;
    if (root.data == value) return root;
    if (value < root.data) return this.find(value, root.left);
    else return this.find(value, root.right);
  }

  //Iterative approach
  levelOrder(root = this.root, callback: Function): void {
    if (!callback) throw new Error("callback not provided");
    if (!root) return;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const current = queue.shift();
      if (current) {
        callback(current);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
  }
}
