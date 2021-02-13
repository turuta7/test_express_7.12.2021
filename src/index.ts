import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import passport from 'passport'
import dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express'
import users from '../router/users'

const app: Application = express()

// app.disable('etag');
app.use(passport.initialize())
import test from '../middleware/passport';
test(passport)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use(users)

export default app
