from collections import deque
# stack = deque()
# print(dir(stack))

class Stack:
    def __init__(self):
        self.stk = deque()

    def push(self, val):
        self.stk.append(val)
    
    def pop(self):
        return self.stk.pop()

stack = Stack()
stack.push(12)
stack.push(15)
stack.push(156)
stack.pop()
print(stack)
