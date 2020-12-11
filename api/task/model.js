const db = require("../../data/dbConfig")

function getTasks() {
  return db("tasks")
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name as project_name', 'projects.description as project_description', 'tasks.description', 'tasks.completed', 'tasks.notes')
}

function addTask(task) {
  return db("tasks").insert(task).then(([id]) => {
    return db("tasks").where("id", id).first()
  })
}

module.exports = {
  getTasks,
  addTask
}