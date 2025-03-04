type Property<T> = T | null;
class Nodes {
  value: Property<string>;
  nextNode: Property<Nodes>;
  constructor(
    value: Property<string> = null,
    nextNode: Property<Nodes> = null,
  ) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
export { Nodes, Property };
