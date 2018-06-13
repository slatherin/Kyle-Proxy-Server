const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(helmet())

app.listen(PORT, function(err, success) {
  if(err) {
    console.log('Express server connection error!')
  } else {
    console.log('Listening on PORT: ', PORT)
  }
})