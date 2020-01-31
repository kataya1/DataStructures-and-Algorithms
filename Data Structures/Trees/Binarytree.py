
class Node:
	def __init__(self,data):
		self.left = None
		self.right = None
		self.data = data
	# do i need to make this an instance method, should it be a class or static method ?
	def insert(self,data):
		if data < self.data:
			if self.left != None:
				self.insert(data)
			else:
				self.left = Node(data)
		else:
			if self.right != None:
				self.insert(data) 
			else:
				self.left = Node(data)
	
	def contain(self,data):
		if data < self.data:
			if self.left != None:
				self.contain(data) 
			else:
				return False
		elif data > self.data:
			if self.right != None:
				self.contain(data)
			else:
				return False
		else:
			return True
	def print_preorder(self):
		print_preorder(self.left)
		print(self.data,end="")
		print_preorder(self.right)
		
	def printpostorder(self):
		pass
		



t = Node(5)
t.insert(1)
t.insert(3)    
t.insert(10)    
t.insert(4)    
t.insert(2)    
t.insert(7)    
t.insert(13)

    

	

	