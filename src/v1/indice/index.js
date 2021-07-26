const fetchdata = require("../../utils/fetchdata.js")
module.exports = async(req, res) => {
  const symbol = req.params.symbol
  let data = await fetchdata(symbol)
  if(data.message == "Successfully retrieved company data"){
    data = data.data
    if(data.sector != "Indeks"){
      res.status(404)
      return res.json({
        "status": 404,
        "message": "Parameter is not an index"
      })
    }
    res.status(200)
    res.json({
      "status": 200,
      "message": "Success",
      "symbol": data.symbol,
      "companyName": data.name,
      "sector": data.sector,
      "currentPrice": data.price,
      "change": data.change,
      "changePercentage": data.percentage,
      "volume": data.volume,
      "date": data.date,
      "countryOrigin": data.country,
      "exchangeOrigin": data.exchange,
    })
  }else{
    res.status(404)
    res.json({
      "status": 404,
      "Message": "Index not found"
    })
  }
  
} 