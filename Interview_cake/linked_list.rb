  class LinkedListNode

  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next  = nil
  end
end

a = LinkedListNode.new('A')
b = LinkedListNode.new('B')
c = LinkedListNode.new('C')

a.next = b
b.next = c

def delete_node(node)
    next_node = node.next

    if next_node
        node.value = next_node.value
        node.next = next_node.next
    else
        raise ArgumentError, 'Cannot delete the last node like this'
    node = node.next
end

def has_cycle?(head)
    visited_nodes = Set.new
    test_node = head
    while test_node
        return true if visited_nodes.include?(test_node)
        visited_nodes.add(test_node)
        test_node = test_node.next
    end
    false
end

#Other way with two runners

def has_cycle2?(head)
    slow_runner = head
    fast_runner = head
    while fast_runner && fast_runner.next
        slow_runner = slow_runner.next
        fast_runner = fast_runner.next.next

        return true if fast_runner == slow_runner
    end
    false
end

def reverse_linked_list(head)
    current_node = head
    prev_node = nil
    next_node = nil
    while current_node
        next_node = current_node.next
        current_node.next = prev_node
        prev_node = current_node
        current_node = next_node
    end
    prev_node
end

def kth_element(head, num)
    raise 'k is zero' if k == 0
    current_node = head
    nodes = 1
    while current_node.next
        current_node = current_node.next
        nodes += 1
    end
    raise 'k greater than linked list length' if k > nodes
    new_node = head
    (nodes-num).times do 
        new_node = new_node.next
    end
    new_node
  

end
# Can also do with two pointers num elements apart
