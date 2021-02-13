import {NextFunction, Request, Response} from 'express'

const validationEmail = (req: Request, res: Response, next: NextFunction) => {
    const {email} = req.body;

    const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (re.test(email)) {
        next();
    } else {
        res.send({message: 'error email'});
    }
};

export {validationEmail};
