type Property<T> = T | null;
class Nodes {
  value: Property<Number>;
  nextNode: Property<Nodes>;
  constructor(
    value: Property<Number> = null,
    nextNode: Property<Nodes> = null,
  ) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
export { Nodes, Property };
