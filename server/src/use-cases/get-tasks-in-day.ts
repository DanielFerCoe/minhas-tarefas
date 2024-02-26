import dayjs from 'dayjs'

import { Task } from '@/models/Task'
import { TasksRepository } from '@/repositories/tasks-repository'
import { DaysRepository } from '@/repositories/days-repository'

interface GetTasksInDayUseCaseRequest {
  date: Date
}

interface GetTasksInDayUseCaseResponse {
  possibleTasks: Task[]
  completedTasks: string[]
}

export class GetTasksInDayUseCase {
  constructor(
    private tasksRepository: TasksRepository,
    private daysRepository: DaysRepository,
  ) {}

  async execute({
    date,
  }: GetTasksInDayUseCaseRequest): Promise<GetTasksInDayUseCaseResponse> {
    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')

    const possibleTasks =
      await this.tasksRepository.findManyByWeekDayAndCreatedAt(
        parsedDate.toDate(),
        weekDay,
      )

    const day = await this.daysRepository.findByDate(parsedDate.toDate())

    const completedTasks =
      day?.dayTasks?.map((dayTask) => {
        return dayTask.task_id
      }) ?? []

    return {
      possibleTasks,
      completedTasks,
    }
  }
}
