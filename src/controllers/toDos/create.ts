import { Response } from 'express';
import { AuthenticatedRequest } from '../../middleware/auth';
import ToDo, { ToDoStatus } from '../../models/ToDo';

export const createToDo = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user.id;

        const { todo, title } = req.body;

        if (!todo || !title) {
            return res.status(400).json({ message: 'ToDo and Title are required' });
        }

        const newToDo = {
            todo,
            title,
            status: ToDoStatus.PENDING,
            userId,
        };

        const savedToDo = await ToDo.create(newToDo);

        res.status(201).json(savedToDo);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};