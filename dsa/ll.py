class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next =  next

class LinkedList:
    def __init__(self):
        self.head = None
    
    def print(self):
        if self.head is None:
            print("ll is empty")
            return
        
        itr = self.head
        llStr = ''
        while itr:
            temp = " "
            if itr.next:
                temp = "--> "
            llStr += str(itr.data) + temp
            itr = itr.next
        print(llStr)

    def insert_at_begining(self, data):
        node = Node(data, self.head)
        self.head = node
    
    def get_length(self):
        count = 0
        itr = self.head
        while itr:
            count += 1
            itr = itr.next
        return count
    
    def insert_at_end(self, data):
        if self.head is None:
            self.head = Node(data, None); #this add only one data node
            # self.insert_at_begining(data)
            return
        itr = self.head
        while itr.next:
            itr = itr.next
        itr.next = Node(data)

    def insert_at(self, index, data):
        if index < 0 or index > self.get_length():
            print("enter data at valid position")
        if index == 0:
            self.insert_at_begining(data)
            return
        itr = self.head
        count = 0
        while itr:
            if count == index - 1:
                node = Node(data, itr.next)
                itr.next = node 
                break 
            itr = itr.next
            count += 1
    
    def remove_at(self, index):
        if index < 0 or index > self.get_length():
            print("enter data at valid position")
        if index == 0:
            self.head = self.head.next
            return
        itr = self.head
        count = 0
        while itr:
            if count == index - 1:
                itr.next = itr.next.next
                break
            itr = itr.next
            count += 1    
    
    def insert_list_of_data(self, data_list):
        for data in data_list:
            self.insert_at_end(data)


ll = LinkedList()
# ll.insert_at_begining(12)
# ll.insert_at_begining(9)
# ll.insert_at_end(15)
# ll.insert_at(1, 20)
# ll.remove_at(2)
ll.insert_list_of_data([1,2,3,4,5,6])
ll.print()
print(ll.get_length())