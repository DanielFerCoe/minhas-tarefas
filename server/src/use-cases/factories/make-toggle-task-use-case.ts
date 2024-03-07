import { PrismaDaysRepository } from '@/repositories/prisma/prisma-days-repository'
import { PrismaDaysTasksRepository } from '@/repositories/prisma/prisma-days-tasks-repository'

import { ToggleTaskUseCase } from '../toggle-task'

export function makeToggleTaskInDayUseCase() {
  const daysRepository = new PrismaDaysRepository()
  const daysTasksRepository = new PrismaDaysTasksRepository()

  const useCase = new ToggleTaskUseCase(daysRepository, daysTasksRepository)

  return useCase
}
