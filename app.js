import express from 'express';
import dotenv from 'dotenv';
import { applicationRouter } from './routes/index.routes';
import { scheduleDelete } from './jobs/scheduleDelete';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

app.use('/', applicationRouter)

app.listen(port,() => {
    scheduleDelete.start();
    console.log(`Sever Listening on PORT: ${port}`);
});