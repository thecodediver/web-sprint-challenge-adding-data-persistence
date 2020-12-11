const router = require("express").Router()
const Resources = require("./model")

router.get("/", (req, res) => {
  Resources.getResources().then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
})

router.post("/", (req, res) => {
  Resources.addResource(req.body).then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
})

module.exports = router