const db = require("../../data/dbConfig")

function getTasks() {
  return db("tasks")
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