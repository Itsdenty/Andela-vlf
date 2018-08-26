import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You\'ve reached home routes');
});

export default router;