import { Request, Response } from 'express'
import { z } from 'zod'
import { makeGetTasksInDayUseCase } from '@/use-cases/factories/make-get-tasks-in-day-use-cases'

export async function getTasksInDayController(
  request: Request,
  response: Response,
) {
  const getTasksInDayQuerySchema = z.object({
    date: z.coerce.date(),
  })

  const { date } = getTasksInDayQuerySchema.parse(request.query)

  const getTasksInDayUseCase = makeGetTasksInDayUseCase()

  const tasksInDay = await getTasksInDayUseCase.execute({
    date,
  })

  return response.status(200).json(tasksInDay)
}
