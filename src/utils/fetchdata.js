const axios = require("axios")
const readbearer = require("./readbearer.js")
module.exports = async(symbol)=>{
  const token = await readbearer()
  const get = await axios.request({
    method: "GET",
    url: `https://api.stockbit.com/v2.4/company/${symbol}`,
    headers: {
      Authorization: token
    }
  }).then(response => {
    return response.data
  }).catch(err => {
    console.log(err)
    return err
  })
  return get
}