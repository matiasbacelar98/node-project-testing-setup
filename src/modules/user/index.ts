import express from 'express';
import { createUser, getAllUsers } from './user-controllers';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);

export default router;
