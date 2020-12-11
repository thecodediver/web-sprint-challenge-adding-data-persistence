const router = require("express").Router()
const Projects = require("./model")

router.get("/", (req, res) => {
  Projects.getProjects().then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message})
  })
})

router.post("/", (req, res) => {
  if(!req.body.completed) {
    req.body.completed = false
  }
  Projects.addProject(req.body).then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message})
  })
})

module.exports = router
