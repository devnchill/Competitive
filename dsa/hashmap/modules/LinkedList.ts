/**
 * Represents a nullable type.
 */
type MaybeNull<T> = T | null;

/**
 * Represents a node in a linked list.
 */
class Node {
  key: string;
  value: string;
  next: MaybeNull<Node>;

  /**
   * Creates a new node.
   * @param key - The key of the node.
   * @param value - The value associated with the key.
   * @param next - The next node in the list, defaults to null.
   */
  constructor(key: string, value: string, next: MaybeNull<Node> = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

/**
 * Represents a linked list for handling hash collisions in a hash map.
 */
class LinkedList {
  head: MaybeNull<Node>;
  tail: MaybeNull<Node>;
  size: number;

  /**
   * Creates an empty linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Appends a new node with the given key-value pair to the linked list.
   * @param key - The key to insert.
   * @param value - The value associated with the key.
   */
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

export { LinkedList, Node, MaybeNull };
