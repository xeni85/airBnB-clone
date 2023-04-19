const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const bSalt = bcrypt.genSaltSync(10);

require('dotenv').config()


app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

mongoose.connect(process.env.MONGO_URL);

//
app.get('/test', (req, res) => {
    res.json('test OK')
})

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    try {const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bSalt),
    })
    res.json(user)
    } catch (err)  {
        res.status(422).json(err)
    } 
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user) {
        const passOk = bcrypt.compareSync(password, user.password)
        if (passOk) {
            res.json('pass Ok')
        } else {
            res.status(422).json('pass not Ok')
        }
    } else {
        res.json('not found')
    }
})

app.listen(4000);
