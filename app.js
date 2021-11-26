import express from 'express';
import dotenv from "dotenv";
import { applicationRouter } from "./routes/index.routes";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
});

app.use('/', applicationRouter);
app.listen(port,() => {
    console.log(`Sever Listening on PORT: ${port}`);
});