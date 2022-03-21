
class Node:
	#static/class variable
	num_of_nodes = 1
	def __init__(self,data):
		self.left = None
		self.right = None
		self.data = data
		Node.num_of_nodes += 1
		
	# do i need to make this an instance method, should it be a class or static method ?
	def insert(self,data):
		if data < self.data:
			# self.left.insert(data) if self.left else self.left = Node(data)
			if self.left == None:
				self.left = Node(data)
			else:
				self.left.insert(data)
		else:
			# self.right.insert(data) if self.right else self.right = Node(data)
			if self.right == None:
				self.right = Node(data)
			else:
				self.right.insert(data) 

	def contain(self,data):
		if data < self.data:
			if self.left:
				self.left.contain(data) 
			else:
				return False
		elif data > self.data:
			if self.right:
				self.right.contain(data)
			else:
				return False
		else:
			return True
	def in_order(self):
		if self.left != None:
			self.left.in_order()
		print(self.data, end=" ")
		if self.right != None:
			self.right.in_order()

	def pre_order(self):
		print(self.data, end=" ")
		if self.left != None:
			self.left.pre_order()
		if self.right != None:
			self.right.pre_order()

	def post_order(self):
		if self.left != None:
			self.left.post_order()
		if self.right != None:
			self.right.post_order()
		print(self.data, end=" ")
	

		
	# def __str__(self):
	# 	for 
if __name__ == "__main__":
	t = Node(5)
	t.insert(1)
	t.insert(3)    
	t.insert(10)    
	t.insert(4)    
	t.insert(2)    
	t.insert(7)    
	t.insert(13)
	t.in_order()
	print()
	t.pre_order()
	print()
	t.post_order()
	print("\n", t.num_of_nodes)
	

	
