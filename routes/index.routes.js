import express from 'express';
const applicationRouter = express.Router();

import { scheduleDelete } from '../controllers/mutipleTweetDelete.controller';
import { deleteAll } from '../controllers/deleteAllTweets.controller';

import { readFile } from "fs/promises";
import { unknownRoute } from "../helpers/unknownRoutes";

applicationRouter.get('/', (req, res) => { readFile('./views/index.html', 'utf8').then((view) => res.send(view))});
applicationRouter.get('/schedule-delete', scheduleDelete);
applicationRouter.post('/delete-all', deleteAll);
applicationRouter.use(unknownRoute);

export { applicationRouter };