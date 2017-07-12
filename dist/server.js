"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const HelloController_js_1 = require("./HelloController.js");
var server = restify.createServer();
server.get('/hello/:name', HelloController_js_1.HelloController.respond);
server.head('/hello/:name', HelloController_js_1.HelloController.respond);
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
