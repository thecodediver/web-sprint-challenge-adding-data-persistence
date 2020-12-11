const router = require("express").Router()
const Tasks = require("./model")

router.get("/", (req, res) => {
  Tasks.getTasks().then(data => {
    const formattedData = data.map(item => {
      item.completed = item.completed === 0 ? false : true
    })
    res.status(200).json(formattedData)
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
})

router.post("/", (req, res) => {
  Tasks.addTask(req.body).then(data => {
    data.completed = data.completed === 0 ? false : true
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
})

module.exports = router