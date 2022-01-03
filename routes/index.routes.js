import express from 'express';
const applicationRouter = express.Router();
import { getUserId } from '../controllers/getUserId.controller';

applicationRouter.use('/', getUserId);

export { applicationRouter };