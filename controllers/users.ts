import {Request, Response} from 'express'

const users = (req: Request, res: Response) => {
    if(res){
        console.log(req);
        res.end('users');
    }



}

export default {users}
