import { Request, Response } from 'express'
import { z } from 'zod'
import { makeDeleteTaskUseCase } from '@/use-cases/factories/make-delete-task-use-case'

export async function deleteTaskController(
  request: Request,
  response: Response,
) {
  const deleteTaskParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteTaskParamsSchema.parse(request.params)

  const createTaskUseCase = makeDeleteTaskUseCase()

  await createTaskUseCase.execute({
    taskId: id,
  })

  return response.status(204).send()
}
