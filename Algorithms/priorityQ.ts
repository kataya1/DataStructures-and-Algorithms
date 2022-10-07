// BinaryHeap

type f = (n: number) => boolean;


export default class minPriorityQ<T extends { priority: number }> extends Array<T> {
    #hasParent: f = (index) => index > 0;

    #heapNodeIndex = new Map<T, number>()

    #hasLeftChild(index: number) {
        return this.#getLeftChildIndex(index) <= this.length - 1;
    }
    #hasRightChild(index: number) {
        return this.#getRightChildIndex(index) <= this.length - 1;
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

    add(d: T) {
        // if (typeof(d) === 'number'){
        //     this.push({priority: d})
        // }
        // else
        this.push(d);
        this.#heapNodeIndex.set(d, this.length - 1)
        this.heapifyUp(this.length - 1);
    }

    heapifyUp(index: number): void {
        if (!this.#hasParent(index)) return;
        if (this[index].priority < this.#getParent(index).priority) {
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
        this.#heapNodeIndex.set(this[indexB], indexA)
        this[indexB] = temp;
        this.#heapNodeIndex.set(temp, indexB)
    }
    // hasParent()
    //  getParent(index)
    //      getParentIndex(index)
    //

    poll(): T | undefined {
        if (this.length === 0) return;
        let min = this[0];
        this[0] = this.pop()!;
        this.heapifyDown(0);
        this.#heapNodeIndex.delete(min)
        this.#heapNodeIndex.set(this[0], 0)
        return min;
    }
    heapifyDown(index: number) {
        if (this.#hasLeftChild(index)) {
            //child index
            let ci;
            if (this.#hasRightChild(index)) {
                ci = this.#getLeftChild(index).priority <= this.#getRightChild(index)!.priority
                    ? this.#getLeftChildIndex(index)
                    : this.#getRightChildIndex(index);
            } else ci = this.#getLeftChildIndex(index);
            if (this[index].priority > this[ci].priority) {

                this.swap(index, ci);
                this.heapifyDown(ci);
            }
        }
    }

    // sort
    peek(): T {
        return this[0];
    }


}

