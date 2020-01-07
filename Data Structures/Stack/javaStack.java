public static class Stack{
    private static class Node{
        // can you inastantiote from a static class?
        private int data;
        private Node next;
        private Node(int data){
            this.data = data;
        }
    }
    private Node Top;

    // empty
    private boolean isEmpty(){
        return Top == null;
    }
    // peek
    private int peek(){
        if (Top != null){
            return Top.data;
        }
    }
    // push 
    private void push(int data){
        Node node = new Node(data);
        if (Top != null)
            node.next = Top;
        Top = node;
    }
    // pop
    private int pop(){
        int data = Top.data;
        Top = Top.next;
        return data;
    }
}