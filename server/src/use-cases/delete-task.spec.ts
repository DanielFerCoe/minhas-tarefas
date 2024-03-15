import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { DeleteTaskUseCase } from './delete-task'
import { CreateTaskUseCase } from './create-task'

import { InMemoryTasksRepository } from '@/repositories/in-memory/in-memory-tasks-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let taskRepository: InMemoryTasksRepository
let sut: DeleteTaskUseCase

describe('Delete Task', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTasksRepository()
    sut = new DeleteTaskUseCase(taskRepository)
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to delete task', async () => {
    vi.setSystemTime(new Date(2024, 1, 1, 8, 0, 0)) // 1 february 2024

    const createTaskUseCase = new CreateTaskUseCase(taskRepository)

    /* create task */
    const { task } = await createTaskUseCase.execute({
      title: 'Create a new task in Sunday And Monday',
      weekDays: [0, 1], // sunday, monday
    })

    /* update task */
    await sut.execute({
      taskId: task.id,
    })

    const taskUpdated = await taskRepository.findById(task.id)

    expect(taskUpdated?.deleted_at).toEqual(new Date())
  })

  it('should not be able to delete task with wrong id', async () => {
    await expect(
      sut.execute({
        taskId: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
