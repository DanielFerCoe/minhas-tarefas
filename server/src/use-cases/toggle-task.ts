import dayjs from 'dayjs'

import { DaysRepository } from '@/repositories/days-repository'
import { DaysTasksRepository } from '@/repositories/days-tasks-repository'

interface ToggleTaskUseCaseRequest {
  id: string
}

export class ToggleTaskUseCase {
  constructor(
    private daysRepository: DaysRepository,
    private daysTasksRepository: DaysTasksRepository,
  ) {}

  async execute({ id }: ToggleTaskUseCaseRequest): Promise<void> {
    const today = dayjs().startOf('day').toDate()

    let day = await this.daysRepository.findByDate(today)

    if (!day) {
      day = await this.daysRepository.create(today)
    }

    const dayTask = await this.daysTasksRepository.findByDayIdAndTaskId({
      dayId: day.id,
      taskId: id,
    })

    if (dayTask) {
      await this.daysTasksRepository.delete(dayTask.id)
    } else {
      await this.daysTasksRepository.create({
        dayId: day.id,
        taskId: id,
      })
    }
  }
}
