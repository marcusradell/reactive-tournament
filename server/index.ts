import * as http from 'http'
import {partialRight} from 'ramda'
import {fromEvent} from 'most'

const httpServer =
http.createServer()

const httpServerEventStream =
partialRight(fromEvent, [httpServer])

const httpServerRequestStream =
httpServerEventStream('request')

const mapRequestArrayArgsToObject = 
([req, res]: [http.ServerRequest, http.ServerResponse]) => {
  return {req, res}
}

const writeData =
(({req, res}: {req: http.ServerRequest, res: http.ServerResponse}) => {
  res.write('Hello World!')
  return {req, res}
})

const httpServerOnListen =
(): void => {
  console.log('Server started.')
}

httpServerRequestStream
.map(mapRequestArrayArgsToObject)
.flatMap(writeData)
.forEach(({res}: {res: http.ServerResponse}) => {
  res.end()
})

httpServer
.listen(3000, httpServerOnListen)