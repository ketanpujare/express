#### Stack Linked List implementation
class stackNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack():
    def __init__(self):
        self.root = None

    def push(self, item):
        node = stackNode(item)
        node.next = self.root
        self.root = node

    def pop(self):
        if not self.root:
            data = self.root.data
            self.root = self.root.next
            return data
        print('stack is empty')
        return None

    def peek(self):
        if not self.root:
            return self.root.data
        print('stack is empty')
        return None



#### Stack Array implementation

def create_stack():
    stack = list()
    return stack

def push(stack, item):
    stack.append(item)
    
def pop(stack):
    if not isEmpty(stack):
        return stack.pop()
    print('stack is Empty')
    return None

def isEmpty(stack):
    if not stack:
        return True
    return False

def peek(stack):
    if isEmpty(stack):
        print('stack is Empty')
        return None

    return stack[-1]