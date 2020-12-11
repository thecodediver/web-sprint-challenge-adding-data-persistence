
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "office", description: 'Space to hold meetings'},
        {name: "printer", description: 'Tool to print out things on paper'},
        {name: "stapler", description: 'Have you seen my stapler?'}
      ]);
    });
};
