import { Request, Response } from 'express'
import { z } from 'zod'
import { makeToggleTaskInDayUseCase } from '@/use-cases/factories/make-toggle-task-use-case'

export async function toggleTaskDayController(
  request: Request,
  response: Response,
) {
  const toggleTaskParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = toggleTaskParamsSchema.parse(request.params)

  const toggleTaskUseCase = makeToggleTaskInDayUseCase()

  await toggleTaskUseCase.execute({
    id,
  })

  return response.status(200).send()
}
