import { Response } from 'express';
import { AuthenticatedRequest } from '@middlewares/auth';
import ToDo from '@models/ToDo';

export const getToDoById = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user.id;

        const { id } = req.params;

        const toDo = await ToDo.findByPk(id);

        if (!toDo) {
            return res.status(404).json({ message: `ToDo with ID ${id} not found` });
        }

        if (toDo.userId !== userId) {
            return res.status(401).json({ message: 'Forbidden' });
        }

        res.status(200).json(toDo);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};