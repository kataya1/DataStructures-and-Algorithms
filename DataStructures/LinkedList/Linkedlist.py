class Linkedlist:
	class Node:
		def __init__(self,data):
			self.data = data
			self.next_node = None
	
	def __init__(self):
		self.head= None
		self.tail = None
	
	def append(self,*args):
		for data in args:
			node = self.Node(data)
			if self.head == None:
				self.head = node
			if not(self.tail == None):
				self.tail.next_node = node
			self.tail = node
		
	# looking up O(n)
	def look_up(self,arg):
		pointer = self.head
		while pointer.data != arg:
			pointer = pointer.next_node
		return pointer

	# prepend
	def prepend(self, data):
		node = self.Node(data)
		node.next_node = self.head
		self.head = node
		if self.tail == None:
			self.tail = self.head
	# delete
	def delete(self, data):
		if self.head == None:
			return
		elif self.head.data == data:
			if self.tail is self.head:
				self.head = None
				self.tail = None
			else:
				self.head = self.head.next_node
			
		else:
			d = self.head
			while d.next_node != None:
				if d.next_node.data == data:
					d.next_node = d.next_node.next_node
				d = d.next_node
				

	
	def __str__(self):
		ls = []
		ptr = self.head
		while ptr:
			ls.append(f"{ptr.data} -> ")
			ptr = ptr.next_node
		
		return " ".join(ls)
		