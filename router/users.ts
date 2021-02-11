import express from 'express'
import controller from '../controllers/users'
const router = express.Router()

router.get('/users', controller.users)

export default router
