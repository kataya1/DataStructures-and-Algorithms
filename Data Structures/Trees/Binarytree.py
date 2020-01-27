class Tree:
	'a binary tree'
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
					self.left = Tree.Node(data)
			else:
				if self.right != None:
					self.insert(data) 
				else:
					self.left = Tree.Node(data)
		
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
		def printpostorder()
			
	def __init__(self,data):
		self.root = self.Node(data)
	
	def insert(self, data):
		self.root.insert(data)
	
	def contain(self, data):
		self.root.contain(data)


t = Tree(5)
t.insert(9)    
	

	