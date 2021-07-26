const express  = require('express')
const v1router = express.Router()

v1router.get("/equity", require("../utils/missingparameters.js"))
v1router.get("/equity/:symbol", require("./equity/index.js"))
v1router.get("/indice", require("../utils/missingparameters.js"))
v1router.get("/indice/:symbol", require("./indice/index.js"))
module.exports = v1router