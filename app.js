const express = require('express');
require("dotenv").config()

const versionrouter = require("./src/versionrouter.js")
const connectMongo = require("./src/utils/connectmongo.js")
const fetchbearer = require("./src/utils/fetchbearer.js")
const app = express()

app.use(express.json())
app.use("/api", versionrouter)
app.get('/', (req, res) => {
  res.redirect('/api')
})
app.get('/api', (req, res) => {
  res.json({
    "message" : "Welcome to the Composite API"
  })
})
const PORT = process.env.PORT || 3000
app.listen(PORT, async() => {
  console.log(`Currently listening on port ${PORT}`)
  await connectMongo()
  //await fetchbearer()
  console.log("Finished startup sequence.")
})