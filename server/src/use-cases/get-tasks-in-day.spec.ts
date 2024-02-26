import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { GetTasksInDayUseCase } from './get-tasks-in-day'

import { InMemoryTasksRepository } from '@/repositories/in-memory/in-memory-tasks-repository'
import { InMemoryDaysRepository } from '@/repositories/in-memory/in-memory-days-repository'
import { InMemoryDaysTasksRepository } from '@/repositories/in-memory/in-memory-days-tasks-repository'

import { CreateTaskUseCase } from './create-task'

let taskRepository: InMemoryTasksRepository
let daysRepository: InMemoryDaysRepository
let daysTasksRepository: InMemoryDaysTasksRepository

let sut: GetTasksInDayUseCase

describe('Get Tasks In Day', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTasksRepository()
    daysTasksRepository = new InMemoryDaysTasksRepository()

    daysRepository = new InMemoryDaysRepository(daysTasksRepository)

    sut = new GetTasksInDayUseCase(taskRepository, daysRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to get possible tasks in day', async () => {
    vi.setSystemTime(new Date(2024, 1, 1, 8, 0, 0)) // 1 february 2024

    const createTaskUseCase = new CreateTaskUseCase(taskRepository)

    /* create tasks */
    await createTaskUseCase.execute({
      title: 'Create a new task in Sunday And Monday',
      weekDays: [0, 1], // sunday, monday
    })

    await createTaskUseCase.execute({
      title: 'Create a new task in Monday',
      weekDays: [1], // monday
    })

    const { task: taskToBeCompleted } = await createTaskUseCase.execute({
      title: 'Create a new task in Tuesday And Wednesday',
      weekDays: [2, 3], // tuesday, wednesday
    })

    vi.setSystemTime(new Date(2024, 1, 5, 8, 0, 0)) // 5 february 2024 - monday

    /*  completed task */
    const { id: dayId } = await daysRepository.create(new Date())

    await daysTasksRepository.create({
      dayId,
      taskId: taskToBeCompleted.id,
    })

    const { possibleTasks, completedTasks } = await sut.execute({
      date: new Date(),
    })

    expect(completedTasks).toHaveLength(1)
    expect(completedTasks[0]).toEqual(taskToBeCompleted.id)

    expect(possibleTasks).toHaveLength(2)
    expect(possibleTasks[0].title).toEqual(
      'Create a new task in Sunday And Monday',
    )
  })

  it('should not be able to list a task that was created on a later date', async () => {
    vi.setSystemTime(new Date(2024, 1, 1, 8, 0, 0)) // 1 february 2024

    const createTaskUseCase = new CreateTaskUseCase(taskRepository)

    await createTaskUseCase.execute({
      title: 'Create a new task in Sunday And Monday',
      weekDays: [0, 1], // sunday, monday
    })

    vi.setSystemTime(new Date(2024, 0, 31, 8, 0, 0)) // 31 january 2024 - wednesday

    const { possibleTasks } = await sut.execute({ date: new Date() })

    expect(possibleTasks).toHaveLength(0)
  })
})
