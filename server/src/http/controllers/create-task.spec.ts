import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('Create Task (e2e)', () => {
  it('should be able to create a task', async () => {
    const taskRequest = {
      weekDays: [0, 1], // Sunday, Monday
      title: 'New Task',
    }

    const response = await request(app).post('/tasks').send(taskRequest)

    expect(response.statusCode).toEqual(201)
  })
})
