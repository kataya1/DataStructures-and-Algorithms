class BinaryNode<T>{
    data: T;
    left: BinaryNode<T> = null;
    right: BinaryNode<T> = null;
    constructor( d: T){
        this.data = d
    }
    print(n: BinaryNode<T>){
        console.log( n.data )
    }
    inOrderTraversal(n: BinaryNode<T>, f: Function){
        if (n == null) return 
        this.inOrderTraversal(n.left, f)
        f( n )
        this.inOrderTraversal(n.right, f)
    }

    preOrderTraversal(n: BinaryNode<T>, f: Function){
        if (n == null) return 
        f(n)
        this.preOrderTraversal(n.left , f)
        this.preOrderTraversal(n.right, f)
    }
    postOrderTraversal(n: BinaryNode<T>, f: Function){
        if (n === null) return 
        this.postOrderTraversal(n.left, f)
        this.postOrderTraversal(n.right, f)
        f(n)
    }

}
// n-ary Tree

class node{
    data: number;
    children: Array<node> = []
    constructor( d: number)
    {
        this.data = d
    }

    pre_order(n: node){
        this.visit( n)
        this.children.forEach( c => this.pre_order(c))
    }
    post_order(n: node){
        this.children.forEach( c => this.post_order(c))
        this.visit( n)
    }
    visit(n: node){

    }
}