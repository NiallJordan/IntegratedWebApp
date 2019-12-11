import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import clubsRouter from './api/clubs';

import './db';
import loadClubs from './clubsData';

if (process.env.seedDb) {
  loadClubs();
};


dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/clubs', clubsRouter);
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});