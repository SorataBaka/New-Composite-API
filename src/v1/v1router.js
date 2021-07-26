const express  = require('express')
const v1router = express.Router()
v1router.get("/equity", require("../utils/missingparameters.js"))
v1router.get("/equity/:symbol", require("./equity/index.js"))

module.exports = v1router