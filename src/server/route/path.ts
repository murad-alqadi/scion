import {Ipath, IPathRoute} from "../interfaces/IPath";

// ALL API REQUESTS ARE PROCESSED IN IPATH TO DETERMINE TYPE OF REQUEST
function path(url: string): IPathRoute {
    const allRoutes: Ipath = {
        "/favorite": {
            methods: ["GET", "POST", "PUT", "DELETE"]
        }
    }
    return allRoutes[url];
}

export default path;
