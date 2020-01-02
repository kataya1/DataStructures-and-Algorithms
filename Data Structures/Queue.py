# i'll make it not aa static class so there can be more than 1 Queue



class Queue:
    __QueueLength = 0
    class Node:
    def __init__(self, data):
        
        self.__data = data
        self.__nextNode = None
    __Head = None
    __Tail = None

    # check empty
    def isEmpty(self):
        return __Head == None
    # peek
    def peek(self):
        return __Head.__data
    # add
    def add(self, data):
        node = Node(data)
        if __Head == None:
            __Head = node
        if __Tail != None:
            __Tail.__nextNode = node
        __Tail = nodes
    # remove
    def remove(parameter_list):
        data = __Head.data
        __Head = __Head.__nextNode
        if __Head == None:
            __Tail == None
        return data
        
def main():
    q = Queue()
    q.add(1)
    q.add(2)
    q.add(3)
    q.add(4)
    print(q.peek())

if __name__ == "__main__":
    main()


