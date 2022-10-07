
class MinHeap:
    'there is no gaps in a heap, therefor implementing it as an array'
    def __init__(self):
        self.size = 0
        self.array = []

    def get_left_child_index(parent_index): return parent_index * 2
    def get_right_child_index(parent_index): return parent_index * 2 + 1
    def get_parent_index(child_index): return child_index // 2

    def has_left_child(self, index): return get_left_child_index(index) < self.size
    def has_right_child(self, index): return get_left_child_index(index) < self.size
    def has_parent(self, index): return get_parent_index(index) >= 0

    def left_child(self, index): return self.array[get_left_child_index(index)]
    def right_child(self, index): return self.array[get_right_child_index(index)]
    def parent(self, index): return self.array[get_parent_index(index)]

    def swap(self, index1, index2):
        self.array[index1]. self.array[index2] = self.array[index2], self.array[index1]
    
    def peek(self):
        if self.size == 0: return None
        return self.array[0]
    
    def poll(self):
        if self.size == 0: return None
        item = self.array[0]
        self.array[0] = self.array[-1]
        self.size -=1
        self.heapify_down()
        return item

    def add(self, item):
        self.array.append(item)
        self.size +=1
        self.heapify_up()

    def heapify_down(self):
        index = 0
        while self.has_left_child(index):
            if (self.has_right_child(index) and self.right_child(index) < self.left_child(index)):
                index = self.get_right_child_index(index)
            else:
                index = self.get_left_child_index(index)
            if  self.array[index] >= self.parent(index):
                break
            else:
                self.swap(index, self.get_parent_index(index))
        
    def heapify_up(self):
        index = self.size - 1
        while self.has_parent(index) and self.array[index] < self.parent(index):
            parentIndex = self.get_parent_index(index)
            self.swap(index,parentIndex) 
            index = self.parentIndex