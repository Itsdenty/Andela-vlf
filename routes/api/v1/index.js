import user from './user';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You\'ve reached api/v1 routes');
});
router.use('/user', user);

export default router;