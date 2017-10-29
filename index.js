const axios = require('axios')
const { json, send } = require('micro')
const KEY = '057a3d476b5bc2f86d82a1e139e15b62'
const DOMAIN = `https://api.darksky.net/forecast/${KEY}/`
const NIMBLETANK = `51.5174803,-0.1061906`

module.exports = async function(req, res) {
  const id = req.url.replace('/', '')
  const path = `${DOMAIN}${NIMBLETANK}`
  const response = await axios(path)

  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, 200, response.data)
}
