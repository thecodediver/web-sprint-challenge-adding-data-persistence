const db = require("../../data/dbConfig")

function getResources() {
  return db("resources")
}

function addResource(resource) {
  return db("resources").insert(resource).then(([id]) => {
    return db("resources").where("id", id).first()
  })
}

module.exports = {
  getResources,
  addResource
}