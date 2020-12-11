const express = require("express")
const cors = require("cors")
const ProjectRouter = require("./project/router")
const ResourceRouter = require("./resource/router")
const TaskRouter = require("./task/router")

const server = express()

server.use(express.json())
server.use(cors())

server.use("/api/projects", ProjectRouter)
server.use("/api/resources", ResourceRouter)
server.use("/api/tasks", TaskRouter)

server.get("/", (req, res) => {
  res.status(200).json("You made it!")
})

module.exports = server