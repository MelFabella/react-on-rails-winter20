5.times do 
  Todo.create(title: Faker::Esport.game , complete: false)
end
puts 'data seeded'