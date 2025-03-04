import { Nodes, Property } from "./node";
class List {
  head: Property<Nodes>;
  constructor() {
    this.head = null;
  }
  append(value: number): void {
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
  prepend(value: number): void {
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
}
