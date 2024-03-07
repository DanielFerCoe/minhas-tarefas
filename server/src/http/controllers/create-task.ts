import { Request, Response } from 'express'
import { z } from 'zod'
import { makeCreateTaskUseCase } from '@/use-cases/factories/make-create-task-use-case'

export async function createTaskController(
  request: Request,
  response: Response,
) {
  const createTaskBodySchema = z.object({
    title: z.string(),
    weekDays: z.array(z.number().min(0).max(6)),
  })

  const { title, weekDays } = createTaskBodySchema.parse(request.body)

  const createTaskUseCase = makeCreateTaskUseCase()

  const task = await createTaskUseCase.execute({
    title,
    weekDays,
  })

  return response.status(201).json(task)
}
