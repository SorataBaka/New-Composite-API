const bearerschema = require("../schema/bearer.js")
const ncrypt = require("ncrypt-js")
const key = process.env.KEY
const ncryptObject = new ncrypt(key)

module.exports = async(email, bearer) =>{
  bearer = ncryptObject.encrypt(bearer)
  await bearerschema.findOneAndUpdate({
    email: email
  },{
    email: email,
    bearerToken: bearer
  },{
    upsert: true
  }).then(()=>{
    return console.log("Successfully written new token")
  }).catch(err =>{
    console.log("Failed to write token")
  })
  
}