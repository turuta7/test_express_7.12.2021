import express from 'express'
import controller from '../controllers/users'
import {validationEmail} from "../utils/checkingMail";
import passport from "passport";


const router = express.Router()

router.get('/users',passport.authenticate('jwt',{session:false}), controller.getAll);
router.post('/users', validationEmail, controller.create);
router.delete('/users/:id', controller.deleteUser);
router.post('/users/login', controller.login )
// router.put('/users', controller.users)

export default router
