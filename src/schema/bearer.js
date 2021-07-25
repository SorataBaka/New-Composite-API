const mongoose = require("mongoose")
const bearerschema = mongoose.Schema({
  bearerToken:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  }
},{
  timestamp: true
})
module.exports = mongoose.model("BearerData", bearerschema )