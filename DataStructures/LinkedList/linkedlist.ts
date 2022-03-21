import { table } from "console";

export class LLNode<V>{
    data: V;
    next: LLNode<V> | null = null
    constructor(d: V){
        this.data = d
    }


    public addNodeInfront(d: V): LLNode<V>{
        let nn = new LLNode(d)
        nn.next = this.next
        this.next = nn
        return nn
    }
    public delete(){
        'a node can\'t delete itself it unless ina doubly linkedlist '
        '**update** or a middle node'
        // O(1)
        if (this === null || this.next === null) return false
        this.data = this.next.data
        this.next = this.next.next
        return true
    }
}

export class LinkedList<V>{
    head: LLNode<V>| null;
    tail: LLNode<V>| null;
    // we could make the nodesNumber a static variable inside node incremented when constructor is called
    // but we can't have multi linkedlists with that. 
    // a soloution would be to move the class decleration of node inside LinkedList 
    nodesNumber: number = 0; 
    constructor(){
        this.head = null
        this.tail = null
    }
    #init(nn: LLNode<V>){
        this.head = nn
        this.tail = nn
        
    }
    enqueu(d: V){
        // O(1)
        let nn = new LLNode(d)
        if(this.nodesNumber == 0 || this.tail === null ){
            this.#init(nn)
        }else{
            this.tail.next = nn
            this.tail = nn
        }
        this.nodesNumber +=1
        return this
    }
    dequeu(){
        return this.pop()
    }
    insert(d: V, loc: number = 0){
        // O(N)
       'inserts anywhere'
        if(loc > this.nodesNumber) return false
        if(this.nodesNumber === 0 || loc === this.nodesNumber) this.enqueu(d)
        else{
            if(loc === 0 ) this.push(d)
            else{
                let nn = new LLNode(d)
                let n = this.head
                while( loc > 1){    
                    n = n!.next
                    loc--
                }
                nn.next = n!.next
                n!.next = nn

                this.nodesNumber +=1
            }
        }
        return true
       
    }
    push(d: V){
        // O(1)
        let nn = new LLNode(d)
        if(this.nodesNumber ===0) this.#init(nn)
        else{
            nn.next = this.head
            this.head = nn
        }
        this.nodesNumber++
        return this  // we return this so we can have function chainging  ll.push(3).push(5)
    }
    last():V | null{
        // O(1)
        if(this.tail != null)
        return this.tail.data
        return null 
    }
    popTail(){
        // O(n) we can't go back to the node before the tail since it's not a doubly linked list
        // we can optimize by having a tail-1 pointer but this would complicate things  
    }
    pop(): V | null{
        // pushing and poping at the head of a linked list is much easier
        if (this.nodesNumber === 0){
            return null
        }
        let p = this.head
        this.head = this.head!.next
        this.nodesNumber--
        if(this.nodesNumber == 0) this.tail = null
        return p!.data
    }
    remove(){
        // O(n)
    }
    at():number{
        //O(n)
        return -1
    }
    public printChain(node = this.head): string{
        if( node === null) return ''
        if (node.next === null) return `${node.data}`
        return `${node.data} -> ` + this.printChain(node.next)
    }
}