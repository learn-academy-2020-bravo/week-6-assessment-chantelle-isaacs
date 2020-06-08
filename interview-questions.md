# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id is the name of the foreign key. It would be part of the Sightings model.

  Researched answer:
      If you want to set up a 1–1 relationship between two models, you’ll need to add belongs_to to one, and has_one to the other. How do you know which is which?

      The distinction is in where you place the foreign key (it goes on the table for the class declaring the belongs_to association), but you should give some thought to the actual meaning of the data as well. The has_one relationship says that one of something is yours – that is, that something points back to you. For example, it makes more sense to say that a supplier owns an account than that an account owns a supplier



2. Which routes must always be passed params and why?

  Your answer:Show, Edit, Update, and Destroy all need parameters, because they need the specific ID of the row they are accessing.

  Researched answer:
    hard to find a nice nugget of knowledge for this - so here's a link to the rails website talking about routes :) 
    https://guides.rubyonrails.org/v3.1/routing.html#bound-parameters



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:
  get '/game/:guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer: 
  - rails g migration add_something_to_db - generates a migration file allowing the schema to be modified
  - rails g model model_name params:datatype - adds a Model file to the database and updates the schema
  - rails g resource model_name params:datatype - creates the Model, View, and Controllers for the whole database! 


  Researched answer:
      Once again - a link to the rails website: 
      https://guides.rubyonrails.org/command_line.html#rails-generate



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"
This would show the full list of users and their data


/users/1      method="GET"
This would show one user's information based on the parameter added

/users/new    method="GET"
This would allow us to view the form for the creation of a new user

/users/       method="POST"
This would add the new user's information to the database

/users/1      method="PUT"
This would allow us to update the information for a single user

/users/1      method="DELETE"
This would delete the user information at the specified id location
