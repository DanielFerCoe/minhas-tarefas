import { prisma } from '@/lib/prisma'
import { DayTaskProps, DaysTasksRepository } from '../days-tasks-repository'

export class PrismaDaysTasksRepository implements DaysTasksRepository {
  async findByDayIdAndTaskId({ dayId, taskId }: DayTaskProps) {
    const dayTask = await prisma.dayTask.findUnique({
      where: {
        day_id_task_id: {
          day_id: dayId,
          task_id: taskId,
        },
      },
    })

    return dayTask
  }

  async findManyByDayId(dayId: string) {
    const dayTasks = await prisma.dayTask.findMany({
      where: {
        day_id: dayId,
      },
    })

    return dayTasks
  }

  async create({ dayId, taskId }: DayTaskProps) {
    const dayTask = await prisma.dayTask.create({
      data: {
        day_id: dayId,
        task_id: taskId,
      },
    })

    return dayTask
  }

  async delete(id: string) {
    await prisma.dayTask.delete({
      where: {
        id,
      },
    })
  }
}
