import { api } from '../../lib/axios'
import { Task } from '../../models/Task'

export async function deleteTask(taskId: string): Promise<Task> {
  const response = await api.delete(`/tasks/${taskId}`)

  return response.data
}
