const express = require('express');
const compression = require('compression');
const morgan = require("morgan");
const responseTime = require("response-time");
const helmet = require('helmet')
const rateLimit = require("express-rate-limit")

require("dotenv").config()

const versionrouter = require("./src/versionrouter.js")
const connectMongo = require("./src/utils/connectmongo.js")
const fetchbearer = require("./src/utils/fetchbearer.js")
const writebearer = require("./src/utils/writebearer.js")

const limiter = rateLimit({
  windowMs: 5 * 50 * 1000,
  max: 40
})

const app = express()
app.use(limiter)
app.use(compression())
app.use(morgan('dev'))
app.use(responseTime())
app.use(express.json())
app.use(helmet())


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
  await fetchbearer()
  console.log("Finished startup sequence.")
  setInterval(async function (){
    await fetchbearer()
    console.log("Successfully fetched new bearer token")
  }, 8.64e+7)
})