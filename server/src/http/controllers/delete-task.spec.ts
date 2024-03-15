import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import dayjs from 'dayjs'

let tasksRepository: PrismaTasksRepository

describe('Delete Task (e2e)', () => {
  beforeEach(() => {
    tasksRepository = new PrismaTasksRepository()

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to delete a task', async () => {
    vi.setSystemTime(new Date(2024, 1, 1, 8, 0, 0)) // 1 february 2024

    const today = dayjs().startOf('day').toDate() // Thursday

    const task = await tasksRepository.create({
      taskWeekDays: [0, 5], // Sunday, Friday,
      title: 'Task in sunday and friday',
    })

    const response = await request(app).delete(`/tasks/${task.id}`).send()

    const taskUpdated = await tasksRepository.findById(task.id)

    expect(response.statusCode).toEqual(204)
    expect(taskUpdated?.deleted_at).toEqual(today)
  })
})
