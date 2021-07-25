const mongoose = require("mongoose")
module.exports = async () =>{
  const URI = process.env.URI
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  mongoose.set("useFindAndModify", false)
  return console.log("Successfully established connection with MongoDB Database")
}