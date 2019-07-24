
class Node:
    def __init__(self,value):
        self.left = None
        self.right = None
        self.value = value


class Binary_search_tree:
    def __init__(self):
        self.root = None

     # Insert value in Tree
    def insert(self,value):
        if self.root == None:
            self.root = Node(value)
        else:
            self._insert(value, self.root)

    def _insert(self,value,cur_node):
        if cur_node.value > value:
            if cur_node.left != None:
                self._insert(value, cur_node.left)
            else:
                cur_node.left = Node(value)
        elif cur_node.value < value:
            if cur_node.right != None:
                self._insert(value, cur_node.right) 
            else:
                cur_node.right = Node(value)
        else:
            print('Tree already have value {}.'.format(value))

    def print_tree(self):
        if self.root == None:
            print('Tree Does Not have any Node')
        else:
            self._print_tree(self.root)

    def _print_tree(self,cur_node):
        if cur_node != None:
            self._print_tree(cur_node.left)
            print(cur_node.value)
            self._print_tree(cur_node.right)

    # Check Height or levels of Tree
    def height(self):
        if self.root == None:
            return 0
        else:
            return self._height(self.root,0)
    
    def _height(self,cur_node,cur_height):
        if cur_node == None:
            return cur_height

        lhight = self._height(cur_node.left,cur_height+1)
        rhight = self._height(cur_node.right,cur_height+1)

        if lhight > rhight:
            return lhight
        return rhight

    # Search value in Tree
    def search_tree(self,value):
        if self.root != None:
            return self._search(self.root,value)
        else:
            return False

    def _search(self,cur_node,value):
        if cur_node.value == value:
            return True
        if cur_node.value > value and cur_node.left != None:
            return self._search(cur_node.left,value)
        if cur_node.value < value and cur_node.right != None:
            return self._search(cur_node.right,value)
        return False

# test
tree = Binary_search_tree()
tree.insert(6)
tree.insert(4)
tree.insert(7)
tree.insert(5)
tree.insert(18)
tree.insert(14)
tree.insert(1)
tree.insert(13)
tree.insert(13)
tree.insert(17)
tree.insert(15)
tree.insert(3)
tree.insert(0)
tree.print_tree()
print("Tree height {}".format(tree.height()))
print(tree.search_tree(14))