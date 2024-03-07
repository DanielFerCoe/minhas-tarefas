import 'express-async-errors'
import express from 'express'
import { httpRoutes } from './http/routes'
import { handleErrors } from './http/middlewares/handleErrors'

export const app = express()

app.use(express.json())

app.use(httpRoutes)

app.use(handleErrors)
