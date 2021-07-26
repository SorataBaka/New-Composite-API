const fetchdata = require("../../utils/fetchdata.js")
module.exports = async(req, res) => {
  const symbol = req.params.symbol
  let data = await fetchdata(symbol)
  if(data.message == "Successfully retrieved company data"){
    data = data.data
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
      "orderBook": data.orderbook,
      "isUMA": data.uma,
      "countryOrigin": data.country,
      "exchangeOrigin": data.exchange,
      "hasCorporateAction": data.corp_action.active,
      "onIndex": data.indexes,
    })
  }else if(data.message == "REFETCHING TOKENS"){
    res.redirect(`./${symbol}`)
  }else{
    res.status(404)
    res.json({
      "status": 404,
      "Message": "Unable to retrieve data"
    })
  }
  
} 