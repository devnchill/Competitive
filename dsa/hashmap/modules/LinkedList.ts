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

  contains(key: string): boolean {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
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

  replace(key: string, value: string): void {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.next;
    }
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
