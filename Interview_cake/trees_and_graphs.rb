require 'set'

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

# Can be done recursively as well
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


#Largest element
def largest_element(root)
  node = root
  while node.right
    node = node.right
  end
  node.value
end
#Second largest element
def second_largest_element(root)
  node = root
  left = false
  previous = nil
  while !left
    if node.right
      previous = node
      node = node.right
    elsif node.left
      previous = node
      node = node.left
      left = true
    else
      return previous.value
    end
  end
  while node.right
    previous = node
    node = node.right
  end
  return node.value
end

def color_graph(nodes, colors)
  nodes.each do |node|
    if node.neighbors.include?(node)
      raise ArgumentError, 'illegal coloring cannot be assigned to graphs containing loops'
    end
    illegal_colors = node.neighbors.map(node => node.color).compact.to_set
    node.color = colors.find(color => !illegal_colors.include?(color))
  end
end

def mesh_messages(network, start, finish)
  return [start] if start == finish
  touched = Set.new
  queue = [[start, []]]
  while !queue.empty?
    person = queue.shift
    name = person[0]
    previous = person[1] << name
    if touched.include?(name)
      next
    else
      touch.add(name)
    end
    network[name].each do |connection|
      if connection == finish
        return previous
      else
        queue << [connection, previous]
      end
    end
  end
  raise ArgumentError, 'no possible route connection the users'
end


  

