import { Nodes, MaybeNull } from "./node";
class List {
  head: MaybeNull<Nodes>;
  constructor() {
    this.head = null;
  }
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
  prepend(value: string): void {
    const createdNode = new Nodes(value);
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
  getHead(): MaybeNull<Nodes> {
    if (this.head === null) return null;
    return this.head;
  }
  getTail(): MaybeNull<Nodes> {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  getAt(value: number): MaybeNull<Nodes> {
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
  pop(): MaybeNull<Nodes> {
    let current = this.head;
    if (!current) return null;
    if (!current.nextNode) {
      this.head = null;
      return current;
    }
    while (current.nextNode?.nextNode) {
      current = current.nextNode;
    }
    const removedNode = current.nextNode;
    current.nextNode = null;
    return removedNode;
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
  find(query: string): MaybeNull<number> {
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
  toString(): void {
    if (!this.head) return;
    let current = this.head;
    let stringValue = "";
    while (current.nextNode) {
      stringValue += ` ( ${current.value} ) -> `;
      current = current.nextNode;
    }
    stringValue += `( ${current.value} ) -> null `;
    console.log(`${stringValue}`);
  }
  insertAt(value: string, index: number): void {
    if (index < 0 || index > this.size()) throw new Error("Invalid Input");
    if (index === 0) this.prepend(value);
    if (index === this.size()) {
      this.append(value);
      return;
    }
    let current = this.head;
    let count = 0;
    while (current?.nextNode) {
      count++;
      if (count === index) {
        const createdNode = new Nodes(value, current.nextNode);
        current.nextNode = createdNode;
      }
      current = current.nextNode;
    }
  }
}
const list = new List();
list.append("cat");
list.append("rabbit");
list.append("tiger");
list.append("lion");
list.append("dog");
list.append("elephant");
list.insertAt("puppy", 3);
list.insertAt("lion", 0);
list.toString();
