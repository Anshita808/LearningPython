class QueueUsingStack:
    def __init__(self):
        self.stack_enqueue = []
        self.stack_dequeue = []

    def enqueue(self, item):
        self.stack_enqueue.append(item)

    def dequeue(self):
        if not self.stack_dequeue:
            while self.stack_enqueue:
                self.stack_dequeue.append(self.stack_enqueue.pop())
        if self.stack_dequeue:
            return self.stack_dequeue.pop()
        else:
            return None

queue = QueueUsingStack()
output = []

queue.enqueue(1)
output.append(queue.dequeue())

queue.enqueue(2)
output.append(queue.dequeue())

queue.enqueue(3)
output.append(queue.dequeue())
output.append(queue.dequeue())
output.append(queue.dequeue())

print(", ".join(map(str, output)))
