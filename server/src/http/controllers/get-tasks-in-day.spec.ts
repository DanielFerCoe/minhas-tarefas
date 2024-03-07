import dayjs from 'dayjs'
import request from 'supertest'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { app } from '@/app'

import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { PrismaDaysRepository } from '@/repositories/prisma/prisma-days-repository'
import { PrismaDaysTasksRepository } from '@/repositories/prisma/prisma-days-tasks-repository'

let tasksRepository: PrismaTasksRepository
let daysRepository: PrismaDaysRepository
let daysTasksRepository: PrismaDaysTasksRepository

describe('Get tasks in day (e2e)', async () => {
  beforeEach(() => {
    tasksRepository = new PrismaTasksRepository()
    daysRepository = new PrismaDaysRepository()
    daysTasksRepository = new PrismaDaysTasksRepository()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to get tasks in day', async () => {
    vi.setSystemTime(new Date(2024, 1, 1, 8, 0, 0)) // 1 february 2024 - Thursday

    await tasksRepository.create({
      taskWeekDays: [0, 5], // Sunday, Friday,
      title: 'Task in sunday and friday',
    })

    await tasksRepository.create({
      taskWeekDays: [1, 4], // Monday, Thursday,
      title: 'Task in monday and thurday',
    })

    const { id: taskId } = await tasksRepository.create({
      taskWeekDays: [0, 4], // Sunday, Thursday,
      title: 'Task in sunday and thurday',
    })

    const today = dayjs().startOf('day').toDate() // Thursday

    // task marked as completed
    const { id: dayId } = await daysRepository.create(today)
    await daysTasksRepository.create({
      dayId,
      taskId,
    })

    const response = await request(app)
      .get('/tasks/day')
      .query({
        date: today,
      })
      .send()

    expect(response.statusCode).toEqual(200)

    expect(response.body.possibleTasks).toEqual([
      expect.objectContaining({
        title: 'Task in monday and thurday',
      }),
      expect.objectContaining({
        title: 'Task in sunday and thurday',
      }),
    ])

    expect(response.body.completedTasks).toEqual([expect.any(String)])
  })
})
