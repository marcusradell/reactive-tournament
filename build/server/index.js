"use strict";
const http = require("http");
const httpServer = http.createServer();
const httpServerOnRequest = (__, res) => {
    res.write('Hello World!');
    res.end();
};
httpServer.on('request', httpServerOnRequest);
const httpServerOnListen = () => {
    console.log('Server started.');
};
httpServer.listen(3000, httpServerOnListen);
//# sourceMappingURL=index.js.map