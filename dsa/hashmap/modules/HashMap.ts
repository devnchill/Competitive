import { LinkedList, MaybeNull, Node } from "./LinkedList";

class HashMap {
  private hashTable: LinkedList[];
  private capacity: number;
  private loadfactor: number;
  private count: number;

  constructor() {
    this.capacity = 16;
    this.loadfactor = 0.8;
    this.count = 0;
    this.hashTable = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
  }

  getHash(key: string, capacity: number = this.capacity): number {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }

  private findNode(key: string): MaybeNull<Node> {
    const hash = this.getHash(key);
    let current = this.hashTable[hash].head;
    while (current) {
      if (current.key === key) return current;
      current = current.next;
    }
    return null;
  }

  private findNodeWithPrev(key: string): [MaybeNull<Node>, MaybeNull<Node>] {
    const hash = this.getHash(key);
    let prev: MaybeNull<Node> = null;
    let current = this.hashTable[hash].head;

    while (current) {
      if (current.key === key) return [current, prev];
      prev = current;
      current = current.next;
    }
    return [null, null];
  }

  growTable(): void {
    if (this.count >= this.capacity * this.loadfactor) {
      const newCapacity = 2 * this.capacity;
      const newTable = Array.from(
        { length: newCapacity },
        () => new LinkedList(),
      );
      for (const bucket of this.hashTable) {
        let current = bucket.head;
        while (current) {
          const newIndex = this.getHash(current.key, newCapacity);
          newTable[newIndex].append(current.key, current.value);
          current = current.next;
        }
      }

      this.capacity = newCapacity;
      this.hashTable = newTable;
    }
  }

  set(key: string, value: string): void {
    const hash = this.getHash(key);
    let bucket = this.hashTable[hash];

    const [node] = this.findNodeWithPrev(key);
    if (node) {
      node.value = value;
    } else {
      bucket.append(key, value);
      this.count++;
      this.growTable();
    }
  }

  get(key: string): MaybeNull<string> {
    const node = this.findNode(key);
    return node ? node.value : null;
  }

  has(key: string): boolean {
    return this.findNode(key) !== null;
  }

  remove(key: string): boolean {
    const hash = this.getHash(key);
    const bucket = this.hashTable[hash];
    const [node, prev] = this.findNodeWithPrev(key);

    if (!node) return false;

    if (!prev) {
      bucket.head = node.next;
      if (!bucket.head) bucket.tail = null;
    } else {
      prev.next = node.next;
      if (!prev.next) bucket.tail = prev;
    }

    bucket.size--;
    this.count--;
    return true;
  }
}

const hashMap = new HashMap();
