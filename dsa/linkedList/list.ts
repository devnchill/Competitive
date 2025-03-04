import { Nodes, Property } from "./node";
class List {
  head: Property<Nodes>;
  constructor() {
    this.head = null;
  }
  append(value: string): void {
    const createdNode: Property<Nodes> = new Nodes(value);
    if (this.head === null) {
      this.head = createdNode;
      return;
    }
    let current: Property<Nodes> = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = createdNode;
  }
  prepend(value: string): void {
    const createdNode: Property<Nodes> = new Nodes(value);
    createdNode.nextNode = this.head;
    this.head = createdNode;
  }
  size(): number {
    let current = this.head;
    let frequency: number = 0;
    while (current !== null) {
      frequency++;
      current = current.nextNode;
    }
    return frequency;
  }
  getHead(): Property<Nodes> {
    if (this.head === null) return null;
    return this.head;
  }
  getTail(): Property<Nodes> {
    if (this.head === null) {
      return null;
    }
    let current: Property<Nodes> = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  getAt(value: number): Property<Nodes> {
    let current = this.head;
    let frequency = 1;
    while (current !== null) {
      if (frequency === value) {
        return current;
      }
      current = current.nextNode;
      frequency++;
    }
    return null;
  }
  pop(): void {
    let current = this.head;
    if (!current) return;
    if (!current.nextNode) {
      this.head = null;
      return;
    }
    while (current.nextNode?.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
  contains(query: string): boolean {
    if (!this.head) return false;
    if (this.head?.value === query) return true;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === query) return true;
    }
    return false;
  }
  find(query: string): Property<number> {
    if (!this.head) return null;
    let index = 1;
    if (this.head.value === query) {
      return index;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      index++;
      if (current.value === query) {
        return index;
      }
    }
    return null;
  }
}
