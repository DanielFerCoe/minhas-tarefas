import { api } from '../../lib/axios'

export async function toggleTask(taskId: string): Promise<void> {
  await api.patch(`/tasks/${taskId}/toggle`)
}
