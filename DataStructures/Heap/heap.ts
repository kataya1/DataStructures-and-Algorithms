// BinaryHeap

type f = (n: number) => boolean;
class Heap extends Array {
  #hasParent: f = (index) => index > 0;

  #hasLeftChild(index: number) {
    return index * 2 <= this.length;
  }
  #hasRightChild(index: number) {
    return index * 2 + 1 <= this.length;
  }
  #getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
  #getLeftChildIndex(index: number) {
    return index * 2 + 1;
  }
  #getRightChildIndex(index: number) {
    return index * 2 + 2;
  }
  #getParent(index: number) {
    return this[this.#getParentIndex(index)];
  }
  #getLeftChild(index: number) {
    return this[this.#getLeftChildIndex(index)];
  }
  #getRightChild(index: number) {
    return this[this.#getRightChildIndex(index)];
  }

  add(d: number) {
    this.push(d);
    this.heapifyUp(this.length - 1);
  }
  heapifyUp(index: number): void {
    if (!this.#hasParent(index)) return;
    if (this[index] < this.#getParent(index)) {
      let pindex = this.#getParentIndex(index);
      this.swap(index, pindex);
      this.heapifyUp(pindex);
    }
  }
  swap(indexA: number, indexB: number) {
    if (
      indexA < 0 ||
      indexA > this.length - 1 ||
      indexB < 0 ||
      indexB > this.length - 1
    )
      return;
    let temp = this[indexA];
    this[indexA] = this[indexB];
    this[indexB] = temp;
  }
  // hasParent()
  //  getParent(index)
  //      getParentIndex(index)
  //

  poll() {
    if (this.length === 0) return;
    let min = this[0];
    this[0] = this.pop();
    this.heapifyDown(0);
    return min;
  }
  heapifyDown(index: number) {
    if (this.#hasLeftChild(index)) {
      //child index
      let ci;
      if (this.#hasRightChild(index)) {
        ci =
          this.#getLeftChild(index) <= this.#getRightChild(index)
            ? this.#getLeftChildIndex(index)
            : this.#getRightChildIndex(index);
      } else ci = this.#getLeftChildIndex(index);
      this.swap(index, ci);
      this.heapifyDown(ci);
    }
  }

  // sort
  peek(): number {
    return this[0];
  }
}

let h = new Heap()
h.add(50)
h.add(20)
h.add(30)
h.add(10)
h.add(5)
h.add(7)
h.add(90)
console.log(h)

h.poll()
console.log(h)
h.poll()
console.log(h)