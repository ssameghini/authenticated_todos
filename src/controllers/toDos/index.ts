import express from 'express';
import { createToDo } from './create';
import { updateToDo } from './update';
import authenticate from '@middlewares/auth';
import { listToDos } from './list';
import { getToDoById } from './getById';
import { deleteToDo } from './delete';

const router = express.Router();

router.use(authenticate);

router.get('/', listToDos);

router.post('/', createToDo);

router.get('/:id', getToDoById);

router.put('/:id', updateToDo);

router.delete('/:id', deleteToDo);

export default router;