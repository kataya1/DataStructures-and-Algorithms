import Stack

class Queue2stacks:

    def __init__(self):
        self.stack1 = Stack.Stack()
        self.head = self.stack1.top
        self.stack2 = Stack.Stack()
        self.tail = self.stack2.top

    # isEmpty
    def is_empty(self):
        return (self.stack1.top == None) and (self.stack2.top == None)
    # enqueue
    def enqueue(self, data):
        self.stack1.push(data)
        print(self)

    # dequeue
    def dequeue(self):
        # if stack2 is empty
        if not self.stack2.top:     
            # while stack1 is not empty
            while self.stack1.top:
                self.stack2.push(self.stack1.pop())
        r = self.stack2.pop()
        print(f'{self} --> {r}')
        return r

    def __str__(self):

        def lister(stack):
            # make lst O(n)
            lst = []
            # traverse through nodes to make a list
            pointer = stack.top
            while pointer:
                lst.append(pointer.data)
                pointer = pointer.next_node
            return lst
        # bad design it makes this list for every push and pop worest case O(n*n)
        st1 = lister(self.stack1)
        st1.reverse()
        st2 = lister(self.stack2)
        st2.reverse()
        return f'stack1: {st1}, stack2: {st2}'
                
def main():

    q2 = Queue2stacks()
    q2.enqueue(9)
    q2.enqueue(1)
    q2.enqueue(675)

    q2.enqueue(637)
    q2.enqueue(2)
    q2.enqueue(37)

    q2.dequeue()
    q2.enqueue(5)
    q2.enqueue(7)

    q2.dequeue()

    


if __name__ == "__main__":
    main()

        

        