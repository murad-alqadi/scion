import { Request, Response } from 'express';
import { IError } from '../interfaces/IError';
import path from '../route/path';

// CHECK PATH FILE TO DETERMINE IF REQUESTED ROUTE HAS REQUESTED METHOD DEFINED
export default (req: Request, res: Response, next: (param?: unknown) => void): void => {
    console.log(`Middleware received ${req.method} request from ${req.socket.remoteAddress}`);
    let route = path(req.url);
    if (Object.keys(req.query).length > 0) {
        const url = req.url.substring(0, req.url.indexOf('?')) 
        // || req.url.substring(0, req.url.indexOf(':'));
        route = path(url);
    }
    if (route.methods.includes(req.method)) {
        next();
    } else {
        const error: IError = {
            status: 405,
            message: "This type of method is not supported by this endpoint"
        }
        res.setHeader("allow", route.methods);
        res.status(405).json(error);
    }
}
