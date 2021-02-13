import mongoose from 'mongoose'
import app from './index'

const url = `${process.env.URL_DB}${process.env.NAME_DB}`;

const PORT = 3000

mongoose.connect(url).then(() => {
        console.log('start DB ok');
        app.listen(PORT, () => console.log('server ok'))
    }
).catch(err => console.error((err)))


