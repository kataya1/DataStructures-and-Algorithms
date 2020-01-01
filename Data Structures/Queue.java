public class Queue{
    private static class Node{
        private int data;
        private Node next;
        private Node(int data){
            this.data = data;
        }
    }
    private Node Head;
    private Node Tail;

    // empty
    private boolean isEmpty(){
        return Head == null;
    }
    // peek function
    public int peek(){
        if(!isEmpty()){
            return Head.data;}
    }
    // add function
    public void add(int data){
        Node node = new Node(data);
        if (Head == null){
            Head = node;
            Tail = node;
        }
        else{
        Tail.next = node;
        Tail = node;
        }
    }
    // remove function 
    public int remove(){
        int data = Head.data;
        Head = Head.next;
        if(isEmpty()){
            Tail = null;
        }
        return data;
    }

}