type MaybeNull<T> = T | null;

class LinkedList {
  head: MaybeNull<Node>;
  tail: MaybeNull<Node>;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(key: string, value: string): void {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
}

class Node {
  key: string;
  value: string;
  next: MaybeNull<Node>;

  constructor(key: string, value: string, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export { LinkedList, Node, MaybeNull };
