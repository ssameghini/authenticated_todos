import express from 'express';
import { createToDo } from './create';
import { updateToDo } from './update';
import authenticate from 'src/middleware/auth';
import { listToDos } from './list';
import { getToDoById } from './getById';

const router = express.Router();

router.use(authenticate);

router.get('/', listToDos);

router.post('/', createToDo);

router.get('/:id', getToDoById);

router.put('/:id', updateToDo);

export default router;