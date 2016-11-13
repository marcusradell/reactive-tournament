import http = require('http')

const httpServer = http.createServer()
const httpServerOnRequest = (__: http.ServerRequest, res: http.ServerResponse) => {
  res.write('Hello World!')
  res.end()
}
httpServer.on('request', httpServerOnRequest)
const httpServerOnListen = () => {
  console.log('Server started.')
}
httpServer.listen(3000, httpServerOnListen)