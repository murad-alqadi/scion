import express, {Request, Response, Router, Express} from 'express';
import router from './route';
import DBConnect from "./dbConfigs";
import { RequestHandler } from 'express-serve-static-core';

// APP IS EXPRESS
const app: Express = express();

// PARSE DATA IN REQUEST BODIES
app.use(express.urlencoded({extended: true}) as RequestHandler);
app.use(express.json() as RequestHandler) 

// PORT DEFINITION
const port: number = Number(process.env.PORT) || 8080;

// ESTABLISH DATABASE CONNECTION
DBConnect.dbConnection();

// SEND INDEX.HTML ON ROOT REQUEST
app.use(express.static('dist'));
app.get('/', (req:Request, res:Response) => {
    console.log('sending index.html');
    res.sendFile('/dist/index.html');
});

// ALL ROUTES RUN THROUGH API
const routes: Router[] = Object.values(router);
app.use('/api', routes);

// START THE SERVER
app.listen(port);
console.log(`scion is awake on port: ${port}`);
