import minPriorityQ from "./priorityQ";
class WeightedGraph {
    adjList: Map<number, Map<number, number>> = new Map();

    addVertex(v: number) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, new Map());
        }
    }

    addEdge(v1: number, v2: number, weight: number) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjList.get(v1)!.set(v2, weight);
        // this.adjList.get(v2).set(v1, weight); // for undirected graph
    }

    getWeight(v1: number, v2: number): number | undefined {
        return this.adjList.get(v1) ? this.adjList.get(v1)!.get(v2) ?? Infinity : undefined;
    }

    dijkstra(startNode: number): Map<number, number> {


    }

}


let wg = new WeightedGraph()
wg.addEdge(0, 1, 0)
wg.addEdge(1, 2, 3)
wg.addEdge(0, 2, 1)
wg.addEdge(2, 3, 2)
wg.addEdge(1, 3, 4)

console.log(wg.getWeight(0, 3))
console.log(wg.getWeight(0, 2))