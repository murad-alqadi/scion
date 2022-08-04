import mongoose, { Connection, Mongoose } from 'mongoose';

import { configs } from './configs';
import { IConfigs } from "./interfaces/IConfigs";

class Database {
    private readonly _config: IConfigs;
    private readonly _mongo: Mongoose;

    constructor(config: IConfigs, mongo: Mongoose) {
        this._config = config;
        this._mongo = mongo;
    }

    dbConnection(): Mongoose {
        const {mongodb: {url, port, collection, password, username}} = this._config;
        let protocol: string;
        // IF ADMIN INPUTS LOCALHOST, CHANGE PROTOCOL DEFINITION
        url === 'localhost' || url === '127.0.0.1' ? protocol = 'mongodb://' : protocol = 'mongodb+srv://';
        const uri = (username && password)
            // MODIFY URI SYNTAX BASED ON ADMIN INPUT
            ? `${protocol}${username}:${password}${url}/${collection}`
            : `${protocol}${url}:${port}/${collection}`;
        // INITIATE CONNECTION TO MONGODB
        this._mongo
            .connect(
                uri,
                {useNewUrlParser: true, useUnifiedTopology: true}
            );
        const db: Connection = this._mongo.connection;
        db.on('error', console.error.bind(console, 'Connection error:'));
        db.once('open', () => {
            console.log(`Successfully connected to MongoDB cluster: ${uri}`)
        })
        return mongoose;
    }

    get mongo() {
        return this._mongo;
    }

    get config() {
        return this._config;
    }
}

// FREEZE OBJECT TO PREVENT CHANGES TO IT
export default Object.freeze(new Database(configs, mongoose));
