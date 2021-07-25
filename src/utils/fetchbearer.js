const puppeteer = require("puppeteer")
const writebearer = require("./writebearer.js")
const email = process.env.EMAIL
const password = process.env.PASSWORD
module.exports = async() =>{
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()
  await page.goto("https://stockbit.com/#/login")
  await page.type("#username", email)
  await page.type("#password", password)
  await page.click("#loginbutton")
  page.on('request', async req => {
    if(req._url == "https://api.stockbit.com/v2.4/company/IHSG" && req._headers.authorization !== undefined){
      let authorization = req._headers.authorization
      await writebearer(email, authorization)
      await browser.close()
    }
  })
  return console.log("Finish Fetch")
  
}