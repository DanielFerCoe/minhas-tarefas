import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryTasksRepository } from '@/repositories/in-memory/in-memory-tasks-repository'
import { InMemoryDaysRepository } from '@/repositories/in-memory/in-memory-days-repository'
import { InMemoryDaysTasksRepository } from '@/repositories/in-memory/in-memory-days-tasks-repository'

import { ToggleTaskUseCase } from './toggle-task'
import { CreateTaskUseCase } from './create-task'

let taskRepository: InMemoryTasksRepository
let daysRepository: InMemoryDaysRepository
let daysTasksRepository: InMemoryDaysTasksRepository

let sut: ToggleTaskUseCase

describe('Toggle task', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTasksRepository()
    daysTasksRepository = new InMemoryDaysTasksRepository()

    daysRepository = new InMemoryDaysRepository(daysTasksRepository)

    sut = new ToggleTaskUseCase(daysRepository, daysTasksRepository)
  })

  it('should be able to unmark task as completed', async () => {
    const createTaskUseCase = new CreateTaskUseCase(taskRepository)

    const { task } = await createTaskUseCase.execute({
      title: 'Create a new task in Sunday And Monday',
      weekDays: [0, 1], // sunday, monday
    })

    /*  completed task */
    const { id: dayId } = await daysRepository.create(new Date())

    await daysTasksRepository.create({
      dayId,
      taskId: task.id,
    })

    await sut.execute({ id: task.id })

    expect(daysTasksRepository.daysTasks).toHaveLength(0)
  })

  it('should be able to mark task as completed', async () => {
    const createTaskUseCase = new CreateTaskUseCase(taskRepository)

    const { task } = await createTaskUseCase.execute({
      title: 'Create a new task in Sunday And Monday',
      weekDays: [0, 1], // sunday, monday
    })

    await sut.execute({ id: task.id })

    expect(daysTasksRepository.daysTasks).toHaveLength(1)
    expect(daysTasksRepository.daysTasks[0].task_id).toEqual(task.id)
  })
})
