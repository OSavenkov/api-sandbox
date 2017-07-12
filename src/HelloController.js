export class HelloController {
    static respond(req, res, next) {
        res.send('hello ' + req.params.name);
        next();
    }
}