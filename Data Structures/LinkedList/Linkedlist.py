class Linkedlist:
    class Node:
        def __init__(self,data):
            self.data = data
            self.next_node = None
    
    def __init__(self):
        self.head = None
        self.tail = None
    
    def append(self,data):
        node = Node(data)
        if self.head:
            self.head = node
        if !(self.tail):
            self.tail.next_node = node
        self.tail = node
        
    # looking up O(n)

    def look_up(self, self.head = None,data):
        if self.head.data == data:
            return self.head
        self.look_up(self, self.head.next_node, data)
        
            
            
        

            