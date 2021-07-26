const bearerschema = require("../schema/bearer.js")
const key = process.env.KEY
const email = process.env.EMAIL
const ncrypt = require("ncrypt-js")
const ncryptObject = new ncrypt(key)
const fetchbearer = require("./fetchbearer.js")

module.exports = async() =>{
  const bearerQuery = await bearerschema.find({email: email})

  if(bearerQuery.length == 0) {
    console.log("No available bearer tokens found.")
    await fetchbearer()
    //fetch bearer is resolving before it finishes fetching and writing
    const newbearerQuery = await bearerschema.find({email: email})
    var newToken = newbearerQuery[0].bearerToken
    newToken = ncryptObject.decrypt(newToken)
    return newToken
  }else{
    let token = bearerQuery[0].bearerToken
    token = ncryptObject.decrypt(token)
    return token
  }

  

}