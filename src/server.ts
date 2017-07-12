import * as restify from 'restify';
import {nodeSSPI} from 'node-sspi';
import {HelloController} from './HelloController.js';

var server = restify.createServer();
server.use(function (req, res, next) {
    console.log(nodeSSPI);
    // var sspi = new nodeSSPI({retrieveGroups: true});
    
    // sspi.authenticate(req, res, function (err) {
    //     res.finished || next();
    // });
})
// server.use(function (req, res, next) {
//     var out = 'Hello ' + req.connection.user + '! You belong to following groups:<br/><ul>';
//     if (req.connection.userGroups) {
//         for (var i in req.connection.userGroups) {
//             out += '<li>' + req.connection.userGroups[i] + '</li><br/>\n';
//         }
//     }
//     out += '</ul>';
//     res.send(out);
// });
server.get('/hello/:name', HelloController.respond);
server.head('/hello/:name', HelloController.respond);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
