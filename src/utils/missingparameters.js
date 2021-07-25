module.exports = (req, res) =>{
  res.status(400)
  res.json({
    "status": 404,
    "message": "Missing parameters"
  })
}