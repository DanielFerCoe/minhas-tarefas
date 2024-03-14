import { api } from '../../lib/axios'
import { Task } from '../../models/Task'

export interface CreateTask {
  title: string
  weekDays: number[]
}

export async function createNewTask({
  title,
  weekDays,
}: CreateTask): Promise<Task> {
  const response = await api.post('/tasks', {
    title,
    weekDays,
  })

  return response.data
}
