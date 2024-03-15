import express from 'express'
import { createTaskController } from '../controllers/create-task'
import { getTasksInDayController } from '../controllers/get-tasks-in-day'
import { toggleTaskDayController } from '../controllers/toggle-task'
import { deleteTaskController } from '../controllers/delete-task'

export const httpRoutes = express.Router()

httpRoutes.post('/tasks', createTaskController)
httpRoutes.get('/tasks/day', getTasksInDayController)
httpRoutes.patch('/tasks/:id/toggle', toggleTaskDayController)
httpRoutes.delete('/tasks/:id', deleteTaskController)
