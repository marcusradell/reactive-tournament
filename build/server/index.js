"use strict";
const http = require("http");
const ramda_1 = require("ramda");
const most_1 = require("most");
const httpServer = http.createServer();
const httpServerEventStream = ramda_1.partialRight(most_1.fromEvent, [httpServer]);
const httpServerRequestStream = httpServerEventStream('request');
const mapRequestArrayArgsToObject = ([req, res]) => {
    return { req, res };
};
const writeData = (({ req, res }) => {
    res.write('Hello World!!!');
    return { req, res };
});
const httpServerOnListen = () => {
    console.log('Server started.');
};
httpServerRequestStream
    .map(mapRequestArrayArgsToObject)
    .map(writeData)
    .delay(3000)
    .forEach(({ res }) => {
    res.end();
});
httpServer
    .listen(3000, httpServerOnListen);
//# sourceMappingURL=index.js.map