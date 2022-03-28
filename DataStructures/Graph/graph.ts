class someAction<T>{
    currentvalue: number;
    orderednodes: node<T>[];
    constructor(){
        this.currentvalue = Math.floor(Math.random() * 100000)
        this.orderednodes = []
    }
    visit(n: node<T>){
        this.orderednodes.push(n)
    }
    print(){
        return this.orderednodes
    }
}
class node<T>{
    data: T;
    adjacent: node<T>[];
    visited: number;
    constructor(d: T, adj?: node<T>[]){
        this.data = d
        this.adjacent = adj
    } 
}


class Graph<T>{
    public nodes: node<T>[]

    // depth first search
    public static dfs(n: node<any>, storage: someAction<any>): void{
        if ( n == null) return 
        n.visited = storage.currentvalue 
        for( let x of n.adjacent){
            if ( x.visited !== storage.currentvalue)
            {
                storage.visit(x)
                this.dfs(x, storage)
            }
            
        }
    }

    // breadth first search
    public static bfs(n: node<any>, storage: someAction<any>){
        let q = new Queue<node<any>>()
        q.enqueue(n)
        while ( !q.isEmpty()){
            let d = q.dequeue()
            storage.visit(d)
            d.adjacent.forEach(nd => {
                if( nd.visited !== storage.currentvalue)
                    nd.visited = storage.currentvalue
                    q.enqueue(nd)
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

    dequeue(): T{
        if (this.head == null) return
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

let s = new someAction()
console.log(s.currentvalue)