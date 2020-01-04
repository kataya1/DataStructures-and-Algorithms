class Stack:
    num_of_stacks = 0
    class Node:
        def __init__(self,data):
            self.data = data
            self.next_node = None
        
    def __init__(self):
        self.top = None
        self.stack_size = 0
        Stack.num_of_stacks += 1
        
    # isEmpty
    def is_empty(self):
        return self.top == None
    
    # peek
    def peek(self):
        return self.top.data
    
    # push
    def push(self, data):
        node = self.Node(data)
        node.next_node = self.top
        self.top = node
        self.stack_size += 1

    # pop
    def pop(self):   
        if self.top != None:
            self.stack_size -= 1
            data = self.top.data    
            self.top = self.top.next_node
            return data

    # string representation
    def __str__(self):
        return f"its top is {self.peek()}, and stack size is {self.stack_size}, num of stacks {Stack.num_of_stacks} "

def main():
    s = Stack()
    b = Stack()
    s.pop()
    s.push(12)
    s.push(24)
    s.push(36)
    s.push(48)
    print(s.pop())
    print(s)
    
if __name__ == "__main__":
    main()