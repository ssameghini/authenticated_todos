import express from 'express';
import userRoutes from '#controllers/users';
import todoRoutes from '#controllers/toDos';
import authRoutes from '#controllers/auth';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/todos', todoRoutes);

export default router;