import * as express from 'express'
import * as path from 'path'

function appOnListen() {
  console.log('Server app started.')
}

const app = express()
app.use(express.static(path.join(__dirname, '../client')))
app.listen(3000, appOnListen)
