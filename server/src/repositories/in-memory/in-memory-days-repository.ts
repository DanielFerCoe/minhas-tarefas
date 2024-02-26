import { randomUUID } from 'node:crypto'
import { Day } from '@/models/Day'
import { DaysRepository } from '../days-repository'
import { InMemoryDaysTasksRepository } from './in-memory-days-tasks-repository'
import dayjs from 'dayjs'

export class InMemoryDaysRepository implements DaysRepository {
  public days: Day[] = []

  constructor(private daysTasksRepository: InMemoryDaysTasksRepository) {}

  async findByDate(date: Date) {
    const day = this.days.find((day) => dayjs(day.date).isSame(date))

    if (!day) {
      return null
    }

    const dayTasks = await this.daysTasksRepository.findManyByDayId(day.id)

    day.dayTasks = dayTasks

    return day
  }

  async create(date: Date) {
    const parsedDate = dayjs(date).startOf('day')

    const newDay = {
      id: randomUUID(),
      date: parsedDate.toDate(),
    }

    this.days.push(newDay)

    return newDay
  }
}
