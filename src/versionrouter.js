const express = require('express');
const versionrouter = express.Router();
const v1router = require("./v1/v1router.js")

versionrouter.use("/v1", v1router)

module.exports =  versionrouter;