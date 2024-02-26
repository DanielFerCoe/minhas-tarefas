import { beforeEach, describe, expect, it } from 'vitest'
import { CreateTaskUseCase } from './create-task'

import { InMemoryTasksRepository } from '@/repositories/in-memory/in-memory-tasks-repository'
import { TaskAlreadyExistsError } from './errors/TaskAlreadyExistsError'

let taskRepository: InMemoryTasksRepository
let sut: CreateTaskUseCase

describe('Create Task', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTasksRepository()
    sut = new CreateTaskUseCase(taskRepository)
  })

  it('should be able to create task', async () => {
    const { task } = await sut.execute({
      title: 'Create a new task',
      weekDays: [0, 1], // sunday, monday
    })

    expect(task.id).toEqual(expect.any(String))

    expect(taskRepository.taskWeekDays).toHaveLength(2)
    expect(taskRepository.taskWeekDays[0].task_id).toEqual(task.id)
  })

  it('should not be able to create task with the same title twice', async () => {
    const title = 'Create a new task'

    await sut.execute({
      title,
      weekDays: [0, 1],
    })

    await expect(
      sut.execute({
        title,
        weekDays: [0, 1],
      }),
    ).rejects.toBeInstanceOf(TaskAlreadyExistsError)
  })
})
