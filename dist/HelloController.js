"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelloController {
    static respond(req, res, next) {
        res.send("aa" + req.params.name);
        next();
    }
}
exports.HelloController = HelloController;
