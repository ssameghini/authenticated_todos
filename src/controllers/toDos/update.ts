import { Response } from 'express';
import { AuthenticatedRequest } from 'src/middleware/auth';
import ToDo, { ToDoStatus } from 'src/models/ToDo';

export const updateToDo = async (req: AuthenticatedRequest, res: Response): Promise<Response> => {
    const userId = req.user.id;
    const { id } = req.params;
    const { status, title, todo } = req.body;

    if (!Object.values(ToDoStatus).includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    try {
        const toDo = await ToDo.findByPk(id);

        if (!toDo) {
            return res.status(404).json({ message: `ToDo with ID ${id} not found` });
        }

        if (toDo.userId !== userId) {
            return res.status(401).json({ message: 'Forbidden' });
        }

        toDo.status = status;
        if (title) toDo.title = title;
        if (todo) toDo.todo = todo;

        await ToDo.update(toDo, { where: { id } });

        return res.status(200).json(toDo);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};