type MaybeNull<T> = T | null;

class LinkedList {
  head: MaybeNull<Node>;
  tail: MaybeNull<Node>;
  size: MaybeNull<number>;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
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
    let tail = this.tail;
    if (tail) {
      tail.next = new Node(key, value);
      tail = tail.next;
    }
  }

  replace(key: string, value: string): void {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        current.value = value;
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
