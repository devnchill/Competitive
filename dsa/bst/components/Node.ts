export type MaybeNull<T> = T | null;

export class Node {
  public data: number;
  public left: MaybeNull<Node>;
  public right: MaybeNull<Node>;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
