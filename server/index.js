const express = require('express')
const path = require('path')

function appOnListen () {
  console.log('Server app started.')
}

const app = express()
app.use(express.static(path.join(__dirname, '../build')))
app.listen(3000, appOnListen)
