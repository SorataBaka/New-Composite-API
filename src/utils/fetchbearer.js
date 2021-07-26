const writebearer = require("./writebearer.js")
const email = process.env.EMAIL
const password = process.env.PASSWORD
const axios = require("axios")
module.exports = async() =>{
  console.log("Requesting new token")
  await axios.request({
    method: "POST",
    url: `https://api.stockbit.com/v2.4/login?user=${email}&password=${password}`,
  }).then(async response => {
    if(response.data.message == "Login successful"){
      const bearer = response.data.data.access_token
      await writebearer(email, bearer)
      return console.log("Finished bearer fetch sequence")
    }else{
      return console.log("Invalid email and password")
    }
  })
  
}