import { api } from '../../lib/axios'
import { TasksInDay } from '../../models/Task'

export async function getTasksInDay(date: Date): Promise<TasksInDay> {
  const response = await api.get('/tasks/day', {
    params: {
      date,
    },
  })

  return response.data
}
