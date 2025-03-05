type MaybeNull<T> = T | null;
class Nodes {
  value: MaybeNull<string>;
  nextNode: MaybeNull<Nodes>;
  constructor(
    value: MaybeNull<string> = null,
    nextNode: MaybeNull<Nodes> = null,
  ) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
export { Nodes, MaybeNull };
