import express from 'express';
const applicationRouter = express.Router();
import { deleteTweets } from '../controllers/tweetDelete.controller';

applicationRouter.use('/', deleteTweets);

export { applicationRouter };