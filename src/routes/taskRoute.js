import express from 'express';
import { getAllTasks, createSingleTask, deleteSingleTask, getSingleTask, updateOneTask, } from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getSingleTask);
router.post('/tasks', createSingleTask);
router.delete('/tasks/:id', deleteSingleTask);
router.patch('/tasks/:id',  updateOneTask);

export default router;
