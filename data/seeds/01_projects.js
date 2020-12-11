
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Car", description: 'This is a car that needs to be built', completed: false},
        {name: "Bike", description: 'This is a bike that needs to be built', completed: false},
        {name: "Train", description: 'This is a train that needs to be built', completed: false},
        {name: "Fight", description: 'This is a fight that needs to happen', completed: false},
        {name: "Run", description: 'This is a exercise that needs to happen', completed: false},
        {name: "Jump", description: 'This is a exercise that needs to happen', completed: false},
      ]);
    });
};
