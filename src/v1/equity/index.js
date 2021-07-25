module.exports = async(req, res) => {
  res.json({
    symbol: req.params.symbol
  })
}