import express from 'express';
import dotenv from "dotenv";
import { getUserTweets } from './controllers/getUserTweets.controller';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Sever Listening on PORT: ${port}`);
    getUserTweets();
});