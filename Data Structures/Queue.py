# i'll make it not aa static class so there can be more than 1 Queue



class Queue:
    noOfQueues = 0
    def __init__(self):
        self.Head = None
        self.Tail = None
        Queue.noOfQueues += 1
    class Node:
        def __init__(self, data):   
            self.data = data
            self.nextNode = None



    # check empty
    def isEmpty(self):
        return self.Head == None
    # peek
    def peek(self):
        return self.Head.data
    # add
    def add(self, data):
        node = self.Node(data)
        if self.Head == None:
            self.Head = node
        if self.Tail != None:
            self.Tail.nextNode = node
        self.Tail = node
    # remove
    def remove(self):
        data = self.Head.data
        self.Head = self.Head.nextNode
        if self.Head == None:
            self.Tail == None
        return data
        
def main():
    q = Queue()
    b = Queue()
    c = Queue() 
    print(Queue.noOfQueues)
    q.add(12)
    q.add(24)
    q.add(36)
    q.add(42)
    print(q.peek())
    print(q.remove())
    print(q.peek())


if __name__ == "__main__":
    main()


