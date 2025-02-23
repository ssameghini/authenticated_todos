import { Response } from 'express';
import { AuthenticatedRequest } from '#middlewares/auth';
import ToDo from '#models/ToDo';

export const listToDos = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user.id;

        const toDoList = await ToDo.findAll({ where: { userId } });

        res.status(200).json(toDoList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};