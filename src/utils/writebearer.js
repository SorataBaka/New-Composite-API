const bearerschema = require("../schema/bearer.js")
const { encrypt, decrypt } = require("ncrypt-js")
const key = process.env.KEY
module.exports = async(email, bearer) =>{
  email = await encrypt(email, key)
  await bearerschema.findOneAndUpdate({
    email: email
  },{
    email: email,
    bearerToken: bearer
  },{
    upsert: true
  }).then((data, error)=>{
    if(data) return console.log("Success write")
    return console.log("Error write")
  })
}