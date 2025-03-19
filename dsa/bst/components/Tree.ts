import { MaybeNull, Node } from "./Node";

class Tree {
  private root: MaybeNull<Node>;

  constructor(arr: Array<number>) {
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
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }

  insert(value: number, root: MaybeNull<Node> = this.root): MaybeNull<Node> {
    if (root == null) {
      return new Node(value);
    } else if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }
    return root;
  }
}
