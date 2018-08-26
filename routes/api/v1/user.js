import express from 'express';
import controller from '../../../controllers/user'

// const router = express.Router();
const router = express.Router();

router.post('/', controller.create);
router.post('/login', controller.login);
router.get('/logout', controller.logout);

export default router;