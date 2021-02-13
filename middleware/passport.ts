import Jwt from 'passport-jwt';
import Users from '../models/users'



const JwtStrategy = Jwt.Strategy;
const ExtractJwt = Jwt.ExtractJwt;

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}


const sss = (passport:any) => {
    passport.use(
        new JwtStrategy(option, async (payload, done) => {
            try {
                const user = await Users.findById(payload.userId).select('mail id');
                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (err) {
                console.log(err)

            }


        })
    )
}

export default sss
