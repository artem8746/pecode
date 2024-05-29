'use strict';
var express = require('express');
function createServer() {
    var app = express();
    return app;
}
module.exports = {
    createServer: createServer,
};
