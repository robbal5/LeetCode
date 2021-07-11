require 'byebug'
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

class TwoStackQueue
  def initialize()
    @enter_stack = []
    @exit_stack = []
  end

  def enqueue(item)
    @enter_stack << item
    print @enter_stack
    puts
  end

  def dequeue
  
    if @exit_stack.empty?
      if @enter_stack.empty?
        return nil
      else
         @enter_stack.length.times do
          @exit_stack << @enter_stack.pop
         end
         @exit_stack.pop
      end
    else
      @exit_stack.pop
    end
  end
end

# tester = TwoStackQueue.new
# tester.enqueue('hey')
# tester.enqueue('there')
# puts tester.dequeue
# tester.enqueue('mister')
# puts tester.dequeue

def parenthetical_matcher(sentence, pos)

  par_number = 0
  test_number = nil
  sentence.each_char.with_index do |char, idx|
    if char == '('
      par_number += 1
    elsif char == ')'
      par_number -=1
      return idx if test_number && test_number > par_number
    end
    if idx == pos
      test_number = par_number
    end
  end
  nil
end

# puts parenthetical_matcher("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10)

def parentheses_checker(string)
  opening_par = {
    '{' => 1,
    '(' => 2,
    '[' => 3
  }
  closing_par = {
    '}' => 1,
    ')' => 2,
    ']' => 3
  }

  stack = []

  string.each_char do |char|
    if opening_par.has_key?(char)
      stack << char
    elsif closing_par.has_key?(char)
      if (closing_par[char] == opening_par[stack.last])
        stack.pop
      else
        return false
      end
    end
  end
  stack.length == 0


end
