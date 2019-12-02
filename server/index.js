const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

const DIST_DIR = path.join(__dirname, '../built')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const ASSETS_DIR = path.join(__dirname, '../assets')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../webpack.config.js')
const compiler = webpack(config)

const api_call_helper = require('./api_call_helper')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(DIST_DIR))
app.use('/assets', express.static(ASSETS_DIR))

if (config.mode === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }))
}

app.get('/api', (req, res) => {
  const baseUrl = 'http://www.recipepuppy.com/api'
  let url = baseUrl
  if (req.query.q && !req.query.p) {
    url = `${baseUrl}/?q=${req.query.q}`
  }
  if(!req.query.q && req.query.p) {
    url = `${baseUrl}/?p=${req.query.p}`
  }
  if(req.query.q && req.query.p) {
    url = `${baseUrl}/?q=${req.query.q}&p=${req.query.p}`
  }

  api_call_helper.api_call(url)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.send(error)
    })
})

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE)
})


app.listen(port, function () {
  console.log('App listening on port: ' + port)
})
