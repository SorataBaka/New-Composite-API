const express = require('express');
const versionrouter = express.Router();
const v1router = require("./v1/v1router.js")
const missingparameters = require("./utils/missingparameters.js")

versionrouter.get("/v1", missingparameters)
versionrouter.use("/v1", v1router)

module.exports =  versionrouter;