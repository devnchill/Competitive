import { Nodes, MaybeNull } from "./node";

export class LinkedList {
  head: MaybeNull<Nodes>;
  constructor() {
    this.head = null;
  }

  /**
   * Appends a new node with the given value to the end of the linked list.
   * @param {string} value - The value to be added.
   * @returns {void}
   */
  append(value: string): void {
    const createdNode = new Nodes(value);
    if (this.head === null) {
      this.head = createdNode;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = createdNode;
  }

  /**
   * Prepends a new node with the given value to the start of the linked list.
   * @param {string} value - The value to be added.
   * @returns {void}
   */
  prepend(value: string): void {
    const createdNode = new Nodes(value);
    createdNode.nextNode = this.head;
    this.head = createdNode;
  }

  /**
   * Returns the number of nodes in the linked list.
   * @returns {number} The size of the linked list.
   */
  size(): number {
    let current = this.head;
    let frequency: number = 0;
    while (current !== null) {
      frequency++;
      current = current.nextNode;
    }
    return frequency;
  }

  /**
   * Returns the head (first node) of the linked list.
   * @returns {MaybeNull<Nodes>} The head node or null if the list is empty.
   */
  getHead(): MaybeNull<Nodes> {
    return this.head;
  }

  /**
   * Returns the tail (last node) of the linked list.
   * @returns {MaybeNull<Nodes>} The tail node or null if the list is empty.
   */
  getTail(): MaybeNull<Nodes> {
    let current = this.head;
    if (!current) return null;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  /**
   * Returns the node at the given index in the linked list.
   * @param {number} index - The index of the node.
   * @returns {MaybeNull<Nodes>} The node at the specified index, or null if out of bounds.
   */
  getAt(index: number): MaybeNull<Nodes> {
    const size = this.size();
    if (index < 0 || index >= size) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }

  /**
   * Removes and returns the last node from the linked list.
   * @returns {MaybeNull<Nodes>} The removed node, or null if the list is empty.
   */
  pop(): MaybeNull<Nodes> {
    if (!this.head) return null;
    if (this.head && !this.head.nextNode) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    }
    let current = this.head;
    while (current.nextNode?.nextNode) {
      current = current.nextNode;
    }
    const removedNode = current.nextNode;
    current.nextNode = null;
    return removedNode;
  }

  /**
   * Checks if a given value exists in the linked list.
   * @param {string} query - The value to search for.
   * @returns {boolean} True if the value exists, false otherwise.
   */
  contains(query: string): boolean {
    let current = this.head;
    while (current) {
      if (current.value === query) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  /**
   * Finds the index of the first occurrence of the given value in the linked list.
   * @param {string} query - The value to find.
   * @returns {MaybeNull<number>} The index of the node or null if not found.
   */
  find(query: string): MaybeNull<number> {
    if (!this.head) return null;
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === query) {
        return index;
      }
      if (!current.nextNode) return null;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  /**
   * Returns a string representation of the linked list.
   * @returns {string} The linked list as a formatted string.
   */
  toString(): string {
    if (!this.head) {
      return "null";
    }
    let current = this.head;
    let stringValue = "";
    while (current) {
      stringValue += ` ( ${current.value} ) -> `;
      if (!current.nextNode) break;
      current = current.nextNode;
    }
    stringValue += ` null `;
    return `${stringValue}`;
  }
  /**
   * Inserts a new node with the given value at the specified index.
   * @param {string} value - The value to be inserted.
   * @param {number} index - The position to insert the node at.
   * @returns {void}
   * @throws {Error} If the index is out of range.
   */
  insertAt(value: string, index: number): void {
    const size = this.size();
    if (index < 0 || index > size) throw new Error("Invalid Input");
    switch (index) {
      case 0:
        this.prepend(value);
        break;
      case size:
        this.append(value);
        break;
      default:
        let current = this.head;
        let count = 0;
        while (current) {
          if (count === index - 1) {
            const tempNode = new Nodes(value, current.nextNode);
            current.nextNode = tempNode;
            return;
          }
          current = current.nextNode;
          count++;
        }
    }
  }

  /**
   * Removes and returns the node at the specified index.
   * @param {number} index - The position of the node to be removed.
   * @returns {MaybeNull<Nodes>} The removed node, or null if the index is out of range.
   * @throws {Error} If the index is out of range.
   */
  removeAt(index: number): MaybeNull<Nodes> {
    const size = this.size();
    if (index < 0 || index >= size) {
      throw new Error("Invalid Range for index");
    }
    let current = this.head;
    if (index === 0) {
      this.head = this.head?.nextNode ?? null;
      return current;
    }
    let count = 0;
    while (current?.nextNode) {
      if (count === index - 1) {
        const tempNode = current.nextNode;
        current.nextNode = current.nextNode.nextNode;
        return tempNode;
      }
      current = current?.nextNode;
      count++;
    }
    return null;
  }
}
