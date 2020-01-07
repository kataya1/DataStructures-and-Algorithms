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

    # dequeue
    def dequeue(self):
        # if stack2 is empty
        if not self.stack2.top:
            
            # while stack1 is not empty
            while self.stack1.top:
                self.stack2.push(self.stack1.pop())
            return self.stack2.pop()
        else:
            return self.stack2.pop()
    
    # def printf(self):
    #     st1, st2 = [], []
    #     def appender(stack,list):
    #         for i in range(st):

            
        
    

def main():

    q2 = Queue2stacks()
    q2.enqueue(9)
    q2.enqueue(1)
    q2.enqueue(675)
    print(q2.stack1,q2.stack2)
    q2.enqueue(637)
    q2.enqueue(37)
    print(q2.stack1,q2.stack2)
    print(q2.dequeue())
    print(q2.stack1,q2.stack2)
    print(q2.dequeue())
    q2.enqueue(5)
    q2.enqueue(7)
    print(q2.stack1,q2.stack2)
    print(q2.dequeue())
    print(q2.stack1,q2.stack2)

    


if __name__ == "__main__":
    main()

        

        