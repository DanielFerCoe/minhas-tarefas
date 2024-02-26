import { randomUUID } from 'node:crypto'
import { DayTask } from '@/models/DayTask'

import { DayTaskProps, DaysTasksRepository } from '../days-tasks-repository'

export class InMemoryDaysTasksRepository implements DaysTasksRepository {
  public daysTasks: DayTask[] = []

  async findManyByDayId(dayId: string) {
    const daytasks = this.daysTasks.filter(
      (dayTask) => dayTask.day_id === dayId,
    )

    return daytasks || []
  }

  async findByDayIdAndTaskId({ dayId, taskId }: DayTaskProps) {
    const daytask = this.daysTasks.find(
      (dayTask) => dayTask.task_id === taskId && dayTask.day_id === dayId,
    )

    return daytask || null
  }

  async create(data: DayTaskProps) {
    const newDayTask: DayTask = {
      id: randomUUID(),
      day_id: data.dayId,
      task_id: data.taskId,
    }

    this.daysTasks.push(newDayTask)

    return newDayTask
  }

  async delete(id: string) {
    const daysTasksWithoutOneDeleted = this.daysTasks.filter(
      (dayTask) => dayTask.id !== id,
    )

    this.daysTasks = daysTasksWithoutOneDeleted
  }
}
