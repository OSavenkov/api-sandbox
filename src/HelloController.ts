export class HelloController {
    static respond(req, res, next) : any {
        res.send("aa" + req.params.name);
        next();
    }
}