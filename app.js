import express from 'express';
import dotenv from 'dotenv';
import { scheduleTweetDelete } from './controllers/scheduleTweetDelete.controller';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port,() => {
    scheduleTweetDelete();
    console.log(`Sever Listening on PORT: ${port}`);
});