import express from 'express';
const applicationRouter = express.Router();
import multer from 'multer';

import { scheduleDelete } from '../controllers/scheduleTweetDelete.controller';
import { deleteAll } from '../controllers/deleteAllTweets.controller';
import { showLogs } from '../controllers/showLogs.controller';
import { storage } from '../helpers/uploadFile';
import { unknownRoute } from "../helpers/unknownRoutes";

const upload = multer({ storage: storage });

applicationRouter.get('/schedule-delete', scheduleDelete);
applicationRouter.post('/delete-all', upload.single('file'), deleteAll);
applicationRouter.get('/show-logs', showLogs);
applicationRouter.get('/', unknownRoute);
applicationRouter.use(unknownRoute);

export { applicationRouter };