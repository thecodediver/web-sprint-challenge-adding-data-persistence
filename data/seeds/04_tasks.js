
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 1, notes: 'We need to get the tools', completed: false, project_id: 1},
        {description: 2, notes: 'We need to find the breakpads', completed: false, project_id: 2},
        {description: 3, notes: 'Maybe just burn down the building by accident', completed: false, project_id: 3}
      ]);
    });
};
