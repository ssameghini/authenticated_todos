import express from 'express';
import { registerUser } from './create';

const router = express.Router();

router.post('/', registerUser);

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to get a specific user by ID
    res.send(`User with ID: ${userId}`);
});

export default router;