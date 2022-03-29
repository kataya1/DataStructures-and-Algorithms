class someAction<T>{

    orderednodes: node<T>[];
    constructor(){
        this.orderednodes = []
    }
    visit(n: node<T>){
        this.orderednodes.push(n)
    }
    print(){
        return this.orderednodes.map( n => n.data)
    }
}
class node<T>{
    data: T;
    adjacent: node<T>[];
    constructor(d: T, adj: node<T>[] = []){
        this.data = d
        this.adjacent = adj
    } 
}


class Graph<T>{
    public nodes: node<T>[] = []

    // depth first search
    public static dfs(n: node<any>, storage: someAction<any>, visited: Set<node<any>> = new Set()): void{
        if ( n == null) return 
        visited.add(n)
        storage.visit(n)
        for( let x of n.adjacent){
            if ( !visited.has(x))
                this.dfs(x, storage, visited)
        }
    }

    // breadth first search
    public static bfs(n: node<any>, storage: someAction<any>){
        let q = new Queue<node<any>>()
        let visited = new Set()
        q.enqueue(n)
        visited.add(n)
        while ( !q.isEmpty()){
            let d = q.dequeue()
            if( d == null) return
            storage.visit(d)
            d.adjacent.forEach(nd => {
                // storage.currentvalue instead of nd.visited = true, so we can have multiple visits
                if( !visited.has(nd)){
                    visited.add(nd)
                    q.enqueue(nd)
                }
            })
        }

    }
}

class qnode<T>{
    data: T;
    next: qnode<T>| null = null;
    constructor(d: T){
        this.data = d
    }
}
class Queue<T>{
    head: qnode<T>| null = null;
    tail: qnode<T>| null = null;
    enqueue(d: T){
        let nn = new qnode(d)
        if( this.tail == null){
            this.head = nn
        }else{   
            this.tail.next = nn
        }
        this.tail = nn
    }

    dequeue(): T | null{
        if (this.head == null) return null
        let d = this.head.data
        this.head = this.head.next 
        if (this.head == null)  this.tail = null
        return d
    }
    peek(){
        if (this.head == null ) return
        return this.head.data
    }
    isEmpty(){
        return this.head === null
    }
}

let a = new node(1 )
let b = new node(2)
let c = new node(3)
let d = new node(4)
let e = new node(5)
let f = new node(6)
let g = new node(7)
let h = new node(8)

a.adjacent = [ b, d] 
b.adjacent = [ c] 
c.adjacent = [ f] 
d.adjacent = [ g] 
e.adjacent = [ ] 
f.adjacent = [ h] 
g.adjacent = [ ] 
h.adjacent = [ d, e, f, g ] 

// ex1
let dfs = new someAction()
Graph.dfs(a, dfs)
console.log(dfs.print())  // predicted [1, 2, 3, 6, 8, 4, 7, 5]

// e.g. 2 
let bfs = new someAction()
Graph.bfs(a, bfs)
console.log(bfs.print())  // predicted [1, 2, 4, 3, 7, 6, 8, 5]

// e.g. 3
let z = new node(3)
let y = new node(2, [ z])
let x = new node(1, [y , z])
z.adjacent.push(x)
let bfs2 = new someAction()
Graph.bfs(x, bfs2)
console.log(bfs2.print())  // predicted [1, 2, 3]