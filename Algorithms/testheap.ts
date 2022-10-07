import minPriorityQ from "./priorityQ";

const prep = (n: number) => {
    return { priority: n }
}

let h = new minPriorityQ()
h.add(prep(50))
h.add(prep(20))
h.add(prep(30))
h.add(prep(10))
h.add(prep(5))
h.add(prep(7))
h.add(prep(90))

console.log(h)

h.poll()
console.log(h)
h.poll()
console.log(h.peek())
console.log(h)