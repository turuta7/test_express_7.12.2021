import express from 'express'
import controller from '../controllers/users'

const router = express.Router()

router.get('/users', controller.getAll);
router.post('/users', controller.create);
router.delete('/users/:id', controller.deleteUser);

// router.put('/users', controller.users)

export default router
