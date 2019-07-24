# Node class 
class Node: 
  
    # Function to initialize the node object 
    def __init__(self, data): 
        self.data = data  # Assign data 
        self.next = None  # Initialize next as null 
  
# Linked List class 
class LinkedList: 
    
    # Function to initialize the Linked List object 
    def __init__(self):  
        self.head = None

    # This function prints contents of linked list 
    # starting from head 
    def printList(self): 
        temp = self.head 
        while temp: 
            print (temp.data), 
            temp = temp.next

    # Function to insert a new node at the beginning
    # Time complexity of push() is O(1) 
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    # Inserts a new node after the given prev_node.
    # Time complexity of insertAfter() is O(1)
    def insertafter(self, node, new_data):
        if node == None:
            print("Invalid Node Or list")
            return
        new_node = Node(new_data)
        new_node.next = node.next
        node.next = new_node
    
    # Appends a new node at the end.
    # Time complexity of append is O(n) as we have to loop through head to end of LinkedList
    def append(self, new_data):
        new_node = Node(new_data)
        if self.head == None:
            self.head = new_node
            return

        index = self.head
        while index:
            if index.next == None:
                index.next = new_node
                break
            index = index.next
                



# 10-12-15
llist = LinkedList()
llist.head = Node(10)
second = Node(12)
third = Node(15)
llist.head.next = second
second.next = third

# ADD element ahead of head 10 #so 5-10-12-15
llist.push(5)

# ADD element ahead of after 12 #so 5-10-12-14-15
llist.insertafter(second,14)

# ADD element at the end of list #so 5-10-12-14-15-20
llist.append(20)

#print Linked List
llist.printList()
