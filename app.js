import express from 'express';
import dotenv from 'dotenv';
import { applicationRouter } from './routes/index.routes.js';
import { checkTweets } from './controllers/checkTweetFile.controller.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

app.use('/', applicationRouter)

app.listen(port,() => {
    checkTweets();
    console.log(`Sever Listening on PORT: ${port}`);
});