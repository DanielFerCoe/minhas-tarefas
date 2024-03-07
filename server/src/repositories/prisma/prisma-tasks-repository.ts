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
