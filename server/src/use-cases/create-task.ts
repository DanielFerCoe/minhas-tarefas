import { Task } from '@/models/Task'

import { TasksRepository } from './../repositories/tasks-repository'
import { TaskAlreadyExistsError } from './errors/TaskAlreadyExistsError'

interface CreateTaskUseCaseRequest {
  title: string
  weekDays: number[]
}

interface CreateTaskUseCaseResponse {
  task: Task
}

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({
    title,
    weekDays,
  }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
    const taskWithSameTitle = await this.tasksRepository.findByTitle(title)

    if (taskWithSameTitle) {
      throw new TaskAlreadyExistsError()
    }

    const newTask = await this.tasksRepository.create({
      title,
      taskWeekDays: weekDays,
    })

    return { task: newTask }
  }
}
