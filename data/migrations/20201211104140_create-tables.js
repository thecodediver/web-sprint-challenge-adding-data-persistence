
exports.up = function(knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments()
    tbl.string("name").notNullable()
    tbl.string("description")
    tbl.boolean("completed").notNullable().defaultTo(false)
  })
  .createTable("resources", (tbl) => {
    tbl.increments()
    tbl.string("name").notNullable().unique()
    tbl.string("description")
  })
  .createTable("project_resources", (tbl) => {
    tbl.increments()
    tbl.integer("project_id")
      .unsigned().notNullable()
      .references("id").inTable("projects")
      .onDelete("CASCADE").onUpdate("CASCADE")
    tbl.integer("resource_id")
      .unsigned().notNullable()
      .references("id").inTable("resources")
      .onDelete("CASCADE").onUpdate("CASCADE")
  })
  .createTable("tasks", (tbl) => {
    tbl.increments()
    tbl.string("description").notNullable()
    tbl.string("notes")
    tbl.boolean("completed").notNullable().defaultTo(false)
    tbl.integer("project_id")
      .unsigned().notNullable()
      .references("id").inTable("projects")
      .onDelete("CASCADE").onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
