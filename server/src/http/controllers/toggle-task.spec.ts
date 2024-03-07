import dayjs from 'dayjs'
import request from 'supertest'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { app } from '@/app'

import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { PrismaDaysRepository } from '@/repositories/prisma/prisma-days-repository'

let tasksRepository: PrismaTasksRepository
let daysRepository: PrismaDaysRepository

describe('Toggle Task (e2e)', async () => {
  beforeEach(() => {
    tasksRepository = new PrismaTasksRepository()
    daysRepository = new PrismaDaysRepository()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to mark task as completed', async () => {
    vi.setSystemTime(new Date(2024, 1, 1, 8, 0, 0)) // 1 february 2024 - Thursday

    const task = await tasksRepository.create({
      taskWeekDays: [0, 4], // Sunday, Thursday,
      title: 'New Task',
    })

    const response = await request(app).patch(`/tasks/${task.id}/toggle`).send()

    const today = dayjs().startOf('day').toDate()

    const day = await daysRepository.findByDate(today)

    expect(response.statusCode).toEqual(200)

    expect(day?.dayTasks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          task_id: task.id,
          day_id: day?.id,
        }),
      ]),
    )
  })

  it('should be able to unmark task as completed', async () => {
    vi.setSystemTime(new Date(2024, 1, 1, 8, 0, 0)) // 1 february 2024 - Thursday

    const task = await tasksRepository.create({
      taskWeekDays: [0, 4], // Sunday, Thursday,
      title: 'New Task',
    })

    // Mark as completed
    await request(app).patch(`/tasks/${task.id}/toggle`).send()

    // Unmark as completed
    const response = await request(app).patch(`/tasks/${task.id}/toggle`).send()

    const today = dayjs().startOf('day').toDate()

    const day = await daysRepository.findByDate(today)

    expect(response.statusCode).toEqual(200)

    expect(day?.dayTasks).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          task_id: task.id,
          day_id: day?.id,
        }),
      ]),
    )
  })
})
