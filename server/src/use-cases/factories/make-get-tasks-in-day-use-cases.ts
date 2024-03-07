import { PrismaDaysRepository } from '@/repositories/prisma/prisma-days-repository'
import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { GetTasksInDayUseCase } from '../get-tasks-in-day'

export function makeGetTasksInDayUseCase() {
  const tasksRepository = new PrismaTasksRepository()
  const daysRepository = new PrismaDaysRepository()

  const useCase = new GetTasksInDayUseCase(tasksRepository, daysRepository)

  return useCase
}
