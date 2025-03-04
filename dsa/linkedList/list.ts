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
    if (current === null) return;
    if (current.nextNode === null) {
      current = null;
      return;
    }
    while (current.nextNode?.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
}
