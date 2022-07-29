import logger from './logger';
import checkMethod from './checkMethod';

// THESE MIDDLEWARES RUN BEFORE THE CONTROLLERS DO
// THESE MIDDLEWARES ARE EXECUTED IN ORDER
export default {
    checkMethod,
    logger
};
