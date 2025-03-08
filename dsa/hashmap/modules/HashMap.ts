import { LinkedList, Node } from "./LinkedList";

class HashMap {
  private hashTable: LinkedList[];
  private capacity: number;
  private loadfactor: number;

  constructor() {
    this.capacity = 16;
    this.loadfactor = 0.8;
    this.hashTable = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
  }

  hash(key: string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }
    return hashCode;
  }

  set(key: string, value: string): void {
    const hash = this.hash(key);
    let bucket = this.hashTable[hash];
    if (!bucket.head) {
      const createdNode = new Node(key, value);
      bucket.head = createdNode;
      bucket.tail = createdNode;
      bucket.size === null ? (bucket.size = 0) : bucket.size++;
      return;
    }
    if (bucket.contains(key)) {
      bucket.replace(key, value);
    } else {
      bucket.append(key, value);
      bucket.size === null ? (bucket.size = 0) : bucket.size++;
    }
  }
}
const hashMap = new HashMap();
