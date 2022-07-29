import {Request, Response} from 'express';
import {IError} from '../interfaces/IError';
import path from '../route/path';

// CHECK PATH FILE TO DETERMINE IF REQUESTED ROUTE HAS REQUESTED METHOD DEFINED
export default (req: Request, res: Response, next: (param?: unknown) => void): void => {
    console.log(`Middleware received ${req.method} request from ${req.socket.remoteAddress}`);
    const route = path(req.url);
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
