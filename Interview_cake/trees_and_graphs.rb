class BinaryTreeNode

  attr_accessor :value
  attr_reader :left, :right

  def initialize(value)
    @value = value
    @left  = nil
    @right = nil
  end

  def insert_left(value)
    @left = BinaryTreeNode.new(value)
  end

  def insert_right(value)
    @right = BinaryTreeNode.new(value)
  end
end

#BFS Way
def is_perfectly_balanced(head)
  nodes = [{node: head, depth: 0}]
  depths = []
  idx = 0
  while idx < nodes.length
    node = nodes[idx]
    if (!node.left && !node.right)
      depths.push(node.depth)
    else
      nodes.push({node: node.left, depth: node.depth + 1}) if node.left
      nodes.push(node: node.right, depth: node.depth + 1) if node.right
    end
    idx += 1
  end
  abs(depths.min - depths.max) <= 1

end
  

