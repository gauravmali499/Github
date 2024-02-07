public class Main{
    public static void main(String[] args) {
        LL list = new LL();
        list.insertFirst(9);
        list.insertFirst(15);
        list.insertLast(18);
        list.insertLast(56);
        list.insertLast(74);
        list.insertLast(20);
        list.insert(1, 30);
        System.out.println(list.deleteFirst());
        System.out.println(list.deleteLast());
        list.display();
        System.out.println(list.deleteAt(2));
        list.display();
    }
}

class LL{
    private Node head;
    private Node tail;
    public int size;

    public LL(){
        this.size = 0;
    }

    private class Node{
        private int value;
        private Node next;

        public Node(int value){
            this.value = value;
        }
        public Node(int value, Node next){
            this.value = value;
            this.next = next;
        }
    }

    public void display(){
        Node temp = head;
        while(temp != null){
            System.out.print(temp.value + " ---> ");
            temp = temp.next;
        }
        System.out.println("END");
    }

    public void insertFirst(int value){
        Node node = new Node(value);
        node.next = head;
        head = node;

        if (tail == null){
            tail = head;
        }
        size += 1;
    }

    public void insertLast(int value){
        Node node = new Node(value);
        tail.next = node;
        tail = node;

        if(tail == null){
            insertFirst(value);
        }
        size += 1;
    }

    public void insert(int index, int value){
        if(index == 0){
            insertFirst(value);
            return;
        }
        if(index == size){
            insertLast(value);
            return;
        }

        Node temp = head;
        for (int i = 1; i < index; i++) {
            temp = temp.next;
        }

        Node node = new Node(value, temp.next);
        temp.next = node;

        size++;

    }

    public int deleteFirst(){
        int deletedNode = head.value;
        head = head.next;
        if (head == null){
            tail = null;
        }
        size--;
        return deletedNode;
    }

    public int deleteLast(){
        if(head.next == null){
            return deleteFirst();
        }

        Node temp = head;
        while (temp.next != tail){
            temp = temp.next;
        }
        int tamp = temp.next.value;
        temp.next = null;
        return tamp;

    }

    public int deleteAt(int index){
        if (index == 0){
            return deleteFirst();
        }
        if (index == size){
            return deleteLast();
        }
        Node temp = head;
        for (int i = 1; i < index; i++) {
            temp = temp.next;
        }
        int tamp = temp.next.value;
        temp.next = temp.next.next;
        return tamp;
    }

    public Node search(int value){
        Node temp = head;
        while(temp != null){
            if (temp.value == value){
                return temp;
            }
            temp = temp.next;
        }
        return temp;
    }
}
