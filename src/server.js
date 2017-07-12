import * as restify from 'restify';
import { HelloController } from './HelloController.js';

var server = restify.createServer();
server.get('/hello/:name', HelloController.respond);
server.head('/hello/:name', HelloController.respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});