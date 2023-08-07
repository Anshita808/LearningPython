class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invert_tree(root):
    if root is None:
        return None
    
    # Swap left and right subtrees
    root.left, root.right = root.right, root.left
    
    invert_tree(root.left)
    invert_tree(root.right)
    
    return root


root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right.left = TreeNode(6)
root.right.right = TreeNode(9)

inverted_root = invert_tree(root)

def print_tree(root):
    if root is None:
        return
    print(root.val, end=" ")
    print_tree(root.left)
    print_tree(root.right)

# Print the inverted binary tree
print_tree(inverted_root)
