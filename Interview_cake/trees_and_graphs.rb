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

valid_binary_search(root) 
    nodes = [{'node' => root, 'upper_bound' => nil, 'lower_bound' => nil}]

  while nodes.length > 0
    node = nodes.pop
    if ((node['upper_bound'] && node['node'].value > node['upper_bound']) || (node['lower_bound']&& node['node'].value < node['lower_bound']))
      return false
    end
    nodes.push({'node' => node['node'].left, 'upper_bound' => node['node'].value, 'lower_bound' =>  node['lower_bound']}) if node['node'].left
    nodes.push({'node' => node['node'].right, 'upper_bound' => node['upper_bound'],'lower_bound' =>  node['node'].value}) if node['node'].right
  end
  true
end


  

