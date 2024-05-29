'use strict';
var createServer = require('./createServer').createServer;
createServer()
    .listen(process.env.PORT || 5700, function () {
    console.log("Server is running on localhost:".concat(process.env.PORT || 5700));
});
