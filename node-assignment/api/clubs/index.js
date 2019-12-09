import express from 'express';
import {clubs} from './clubs';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
  res.send({clubs: clubs});
});

export default router;