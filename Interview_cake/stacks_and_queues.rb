class Stack

  # Initializes an empty stack.
  def initialize
    @items = []
  end

  # Pushes a new item onto the stack.
  def push(item)
    @items << item
  end

  # Removes and returns the last item.
  #
  # If the stack is empty, returns nil. (It would also be
  # reasonable to throw an exception.)
  def pop
    if @items.empty?
      nil
    else
      @items.pop
    end
  end

  # Returns the last item without removing it.
  def peek
    if @items.empty?
      nil
    else
      @items[-1]
    end
  end
end

class MaxStack < Stack

    def initialize()
        @items = []
        @max = []
    end

    def push(item)
        @items << item
        if !@max.last || item >= @max.last
            @max.push
        end
    end

    def get_max
        @max.last
    end

    def pop
        if @items.last === @max.last
            max.pop
        end
        @items.pop
    end
end