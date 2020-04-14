const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

const DIST_DIR = path.join(__dirname, '../built')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../webpack.config.js')
const compiler = webpack(config)

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(DIST_DIR))

if (config.mode === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }))
}

app.get('/api/puppy', (req, res) => {
  const baseUrl = 'http://www.recipepuppy.com/api'
  request(baseUrl, { json: true, qs: req.query }, (error, response, body) => {
    if (error) {
      res.send(error)
      return
    }
    res.json(body)
  })
})

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE)
})


app.listen(port, function () {
  // eslint-disable-next-line max-len
  console.log(`Hello :) \n The server ${chalk.greenBright('started')} and the app listening on port: ${port} ${chalk.greenBright('✓')}`)
})

process.on('SIGINT', () => {
  console.log(`\n ${chalk.red('㊀')} You ${chalk.red('stopped')} server :) \n Goodbye !`)
  process.exit()
})
