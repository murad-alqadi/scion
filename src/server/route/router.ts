import express, { Router } from 'express';
import middleware from '../middlewares';

const router: Router = express.Router();

// FUNNEL REQUEST DATA THROUGH MIDDLEWARES
router.use(Object.values(middleware));

// ALL MIDDLEWARES RUn BEFORE CONTROLLERS
export default router;
