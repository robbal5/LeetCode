#Stolen Breakfast
def stolen_breakfast(deliveries)
    deliveries = Set.new
    deliveries.each do |id|
        if deliveries.include?(id)
            deliveries.delete(id)
        else
            deliveries.add(id)
        end
    end
    deliveries.first
end

# OR use a bitwise operator to cancel out all the duplicates, XOR would work
def find_unique_delivery_id(delivery_ids)

  unique_delivery_id = 0

  delivery_ids.each do |delivery_id|
    unique_delivery_id ^= delivery_id
  end

  unique_delivery_id
end