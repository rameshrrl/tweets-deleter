import express from 'express';
const applicationRouter = express.Router();
import multer from 'multer';

import { scheduleTweetDelete } from '../controllers/scheduleTweetDelete.controller.js';
import { deleteAllTweets } from '../controllers/deleteAllTweets.controller.js';
import { showLogs } from '../controllers/showLogs.controller.js';
import { storage } from '../helpers/uploadFile.js';
import { unknownRoute } from "../helpers/unknownRoutes.js";

const upload = multer({ storage: storage });

applicationRouter.get('/schedule-delete', scheduleTweetDelete);
applicationRouter.post('/delete-all', upload.single('file'), deleteAllTweets);
applicationRouter.get('/show-logs', showLogs);
applicationRouter.get('/', unknownRoute);
applicationRouter.use(unknownRoute);

export { applicationRouter };