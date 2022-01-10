import express from 'express';
const applicationRouter = express.Router();
import { unknownRoute } from '../helpers/unknownRoutes';
import { readFile } from "fs/promises";

applicationRouter.get('/', (req, res) => { readFile('./views/index.html', 'utf8').then((view) => res.send(view))});
applicationRouter.use(unknownRoute);

export { applicationRouter };