import { getTasks, createTask, deleteTaskById, getTaskById, updateTaskByid } from '../services/taskService.js';


export async function getAllTasks(req, res) {
  try {
    const result = await getTasks();
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export async function getSingleTask(req, res) {
  const { id } = req.params;
  try {
    const result = await getTaskById(id)
    if (!result) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function createSingleTask(req, res) {
  try {
    const { taskName, taskDetails, priority, category } = req.body
    if (!taskName || !taskDetails || !priority || !category) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Fill all fields to create new task",
      });
    }
    const newTask = await createTask(req.body);
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function deleteSingleTask(req, res) {
  const { id } = req.params;
  try {
    const result = await deleteTaskById(id);

    if (!result) {
      return res.status(404).json({ error: 'Not found' });
    }

    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}


export async function updateOneTask(req, res) {
  const { id } = req.params;

  try {
    const result = await updateTaskByid(id, req.body)
    if (!result) {
      return res.status(404).json({ error: 'Cant find task to update' });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'server error' });
  }
}

