import { Task } from '../models/Task.js';
import { v4 as uuidv4 } from 'uuid';

export async function getTasks() {
  return await Task.findAll()
}

export async function getTaskById(id) {
  return await Task.findByPk(id)
}

export async function createTask(data) {
  return await Task.create({
    id: uuidv4(),
    completed: false,
    ...data,
  })
}

export async function deleteTaskById(id) {
  return await Task.destroy({ where: { id } })
}

export async function updateTaskByid(id, body) {
  const task = await Task.findByPk(id)

  if (!task) {
    return null
  }

  return await task.update(body)
}
