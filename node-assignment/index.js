import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import clubsRouter from './api/clubs/club';
import './db/db';
import {loadClubs} from './clubsData';
import loadUsers from './userData';
import usersRouter from './api/users';

// import passport configured with JWT strategy​
import passport from './auth';

dotenv.config();

const app = express();


const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/clubs', passport.authenticate('jwt', {session: false}), clubsRouter);
app.use('/api/users', usersRouter);
app.use(express.static('public'));

app.use(passport.initialize())

if (process.env.seedDb) {
  loadClubs();
  loadUsers();
};

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});