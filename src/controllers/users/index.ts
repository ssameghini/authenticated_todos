import express from 'express';
import { registerUser } from './create';

const router = express.Router();

router.post('/', registerUser);

export default router;