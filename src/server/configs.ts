import {IConfigs} from "./interfaces/IConfigs";

export const configs: IConfigs = {
    mongodb: {
        url: '@scion.lsiun.mongodb.net', //@---->.[com,net]
        port: 27017,
        username: 'murad',
        password: 'murad',
        collection: 'sciondemo',
    }
}