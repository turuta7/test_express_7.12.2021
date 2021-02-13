import Users from '../models/users'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'


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

const login = async (req: Request, res: Response) => {
    const candidate = await Users.findOne({email: req.body.email});
    if (candidate) {
        const password = req.body.password;
        console.log(password, candidate.password)
        if (password === candidate.password) {
            const token = await jwt.sign({
                userId: candidate._id,
                email: candidate.email
            }, `${process.env.SECRET}`, {expiresIn: 60 * 60})

            res.status(200).send({token: `Bearer ${token}`})
        } else {
            res.status(401).send({message: 'no password'})
        }
    } else {
        res.status(404).send({message: 'no user'})
    }
};

export default {create, deleteUser, getAll, login}
