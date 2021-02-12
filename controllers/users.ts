import Users from '../models/users'
import {Request, Response} from 'express'
import {validationEmail} from '../utils/checkingMail'

const getAll = async (req: Request, res: Response) => {
    try {
        res.send(await Users.find());
    } catch (err) {
        res.send(err.message || err);
    }

}

const create = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        res.send(await Users.create({
            email,
            password
        }))
    } catch (err) {
        res.send(err.message || err)
    }
}

const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    console.log(id)
    try {
        res.send(await Users.deleteOne({
            _id: id
        }))
    } catch (err) {
        res.send(err.message || err)
    }
}

export default {create, deleteUser, getAll}
