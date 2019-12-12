import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import clubsRouter from './api/clubs/club';
import './db/db';
import {loadClubs} from './clubsData';


dotenv.config();

const app = express();


const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/clubs', clubsRouter);
app.use(express.static('public'));


if (process.env.seedDb) {
  loadClubs();
};

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});