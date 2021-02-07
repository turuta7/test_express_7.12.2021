import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import express, { Application } from 'express'
import test from '../router/login'

const app: Application = express()

// app.disable('etag');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use(test)

export default app
