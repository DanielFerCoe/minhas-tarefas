import { TasksRepository } from '@/repositories/tasks-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteTaskUseCaseRequest {
  taskId: string
}

export class DeleteTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({ taskId }: DeleteTaskUseCaseRequest) {
    const task = await this.tasksRepository.findById(taskId)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    await this.tasksRepository.delete(taskId)
  }
}
