const express = require('express');
const versionrouter = express.Router();


versionrouter.get("/v1", require("./utils/missingparameters.js"))
versionrouter.use("/v1", require("./v1/v1router.js"))

module.exports =  versionrouter;