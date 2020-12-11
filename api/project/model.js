const db = require("../../data/dbConfig")

function getProjects() {
  return db("projects")
}

function addProject(project) {
  return db("projects").insert(project).then(([id]) => {
    return db("projects").where("id", id).first()
  })
}

module.exports = {
  getProjects,
  addProject
}