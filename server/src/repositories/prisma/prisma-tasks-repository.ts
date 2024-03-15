import dayjs from 'dayjs'
import { prisma } from '@/lib/prisma'
import { CreateTaskProps, TasksRepository } from './../tasks-repository'

export class PrismaTasksRepository implements TasksRepository {
  async create({ taskWeekDays, title }: CreateTaskProps) {
    const today = dayjs(new Date()).startOf('day')

    const task = await prisma.task.create({
      data: {
        title,
        taskWeekDays: {
          create: taskWeekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            }
          }),
        },
        created_at: today.toDate(),
      },
    })

    return task
  }

  async delete(id: string) {
    const today = dayjs(new Date()).startOf('day')

    await prisma.task.update({
      where: {
        id,
      },
      data: {
        deleted_at: today.toDate(),
      },
    })
  }

  async findById(id: string) {
    const task = await prisma.task.findFirst({
      where: {
        id,
      },
    })

    return task
  }

  async findByTitle(title: string) {
    const task = await prisma.task.findFirst({
      where: {
        title,
      },
    })

    return task
  }

  async findManyByWeekDayAndCreatedAt(date: Date, weekDay: number) {
    const tasks = await prisma.task.findMany({
      where: {
        created_at: {
          lte: date,
        },
        OR: [{ deleted_at: null }, { deleted_at: { gt: date } }],
        taskWeekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    })

    return tasks
  }
}
