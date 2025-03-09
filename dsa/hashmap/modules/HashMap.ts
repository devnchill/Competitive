import { LinkedList, MaybeNull, Node } from "./LinkedList";

/**
 * A HashMap implementation using separate chaining with linked lists.
 */
class HashMap {
  private hashTable: LinkedList[];
  private capacity: number;
  private loadfactor: number;
  private count: number;

  /**
   * Initializes a new HashMap with a default capacity of 16 and a load factor of 0.8.
   */
  constructor() {
    this.capacity = 16;
    this.loadfactor = 0.8;
    this.count = 0;
    this.hashTable = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
  }

  /**
   * Generates a hash for a given key.
   * @param key - The key to hash.
   * @param capacity - The size of the hash table (default: current capacity).
   * @returns The computed hash index.
   */
  getHash(key: string, capacity: number = this.capacity): number {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }

  /**
   * Finds a node in the hash table by key.
   * @param key - The key to search for.
   * @returns The node if found, otherwise null.
   */
  private findNode(key: string): MaybeNull<Node> {
    const hash = this.getHash(key);
    let current = this.hashTable[hash].head;
    while (current) {
      if (current.key === key) return current;
      current = current.next;
    }
    return null;
  }

  /**
   * Finds a node and its previous node in the hash table.
   * @param key - The key to search for.
   * @returns A tuple [currentNode, previousNode].
   */
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

  /**
   * Doubles the size of the hash table when the load factor is exceeded.
   */
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

  /**
   * Inserts or updates a key-value pair in the hash map.
   */
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

  /**
   * Retrieves a value by key.
   */
  get(key: string): MaybeNull<string> {
    const node = this.findNode(key);
    return node ? node.value : null;
  }

  /**
   * Checks if a key exists in the hash map.
   */
  has(key: string): boolean {
    return this.findNode(key) !== null;
  }

  /**
   * Removes a key-value pair from the hash map.
   */
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

  /**
   * Returns the number of stored key-value pairs.
   */
  length(): number {
    return this.count;
  }

  /**
   * Clears the hash map.
   */
  clear(): void {
    for (const list of this.hashTable) {
      list.head = null;
      list.tail = null;
      list.size = 0;
    }
    this.count = 0;
  }

  /**
   * Returns all keys in the hash map.
   */
  keys(): string[] {
    const arr: string[] = [];
    for (const list of this.hashTable) {
      let current = list.head;
      while (current) {
        arr.push(current.key);
        current = current.next;
      }
    }
    return arr;
  }

  /**
   * Returns all values in the hash map.
   */
  values(): string[] {
    const arr: string[] = [];
    for (const list of this.hashTable) {
      let current = list.head;
      while (current) {
        arr.push(current.value);
        current = current.next;
      }
    }
    return arr;
  }

  /**
   * Returns all key-value pairs as an array of tuples.
   */
  entries(): Array<[string, string]> {
    const arr: Array<[string, string]> = [];
    for (const list of this.hashTable) {
      let current = list.head;
      while (current) {
        arr.push([current.key, current.value]);
        current = current.next;
      }
    }
    return arr;
  }
}

export { HashMap };
