const bearerschema = require("../schema/bearer.js")
const ncrypt = require("ncrypt-js")
const key = process.env.KEY
const ncryptObject = new ncrypt(key)

module.exports = async(email, bearer) =>{
  await bearerschema.findOneAndUpdate({
    email: email
  },{
    email: email,
    bearerToken: bearer
  },{
    upsert: true
  }).then((data, error)=>{
    if(data) return console.log("Success write")
    console.log(error)
    return console.log("Error write")
  })
}