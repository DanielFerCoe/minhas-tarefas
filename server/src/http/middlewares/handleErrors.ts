import { NextFunction, Request, Response } from 'express'
import { env } from '@/env'
import { ZodError } from 'zod'
import { TaskAlreadyExistsError } from '@/use-cases/errors/task-already-exists-error'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'

export function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof ZodError) {
    return res
      .status(400)
      .json({ message: 'Validation error.', issues: err.errors })
  }

  if (err instanceof TaskAlreadyExistsError) {
    return res.status(400).json({ message: err.message })
  }

  if (err instanceof ResourceNotFoundError) {
    return res.status(400).json({ message: err.message })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(err)
  }

  return res.status(500).json({ message: 'Internal server error.' })
}
