import { prisma } from '@/lib/prisma'
import { DaysRepository } from '../days-repository'

export class PrismaDaysRepository implements DaysRepository {
  async create(date: Date) {
    const day = await prisma.day.create({
      data: {
        date,
      },
    })

    return day
  }

  async findByDate(date: Date) {
    const day = await prisma.day.findUnique({
      include: {
        dayTasks: true,
      },
      where: {
        date,
      },
    })

    return day
  }
}
