import express from 'express'
import { createTaskController } from '../controllers/create-task'
import { getTasksInDayController } from '../controllers/get-tasks-in-day'
import { toggleTaskDayController } from '../controllers/toggle-task'

export const httpRoutes = express.Router()

httpRoutes.post('/tasks', createTaskController)
httpRoutes.patch('/tasks/:id/toggle', toggleTaskDayController)
httpRoutes.get('/tasks/day', getTasksInDayController)
