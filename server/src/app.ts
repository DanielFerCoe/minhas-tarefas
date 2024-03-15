import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { httpRoutes } from './http/routes'
import { handleErrors } from './http/middlewares/handleErrors'

export const app = express()

app.use(cors())

app.use(express.json())

app.use(httpRoutes)

app.use(handleErrors)
