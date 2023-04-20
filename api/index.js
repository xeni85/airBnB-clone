const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Place = require('./models/Place');
const bcrypt = require('bcryptjs');
const bSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
require('dotenv').config()
const jwtSecret = 'skdfnlskdhaofijwekrn2934sdf'
const cookieParser = require('cookie-parser')
const download = require('image-downloader')


app.use(express.json());
app.use(cookieParser())
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
            jwt.sign({
                email:user.email,
                id:user._id
              }, jwtSecret, {}, (err,token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
              });
        } else {
            res.status(422).json('pass not Ok')
        }
    } else {
        res.json('not found')
    }
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, user)=>{
            if(err) throw err;
            const {name, email, _id} = await User.findById(user._id);
            res.json({name, email,_id});
        })
    }else {
        res.json(null)
    }
res.json('user info')
})


app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async (req, res) => {
    console.log(req.body)
    const {link} = req.body;
    
    const newName = 'photo' + Date.now() + '.jpeg';
    await download.image({
        url: link,
        dest: __dirname + '/uploads' + newName
    })
    res.json(newName)
})

app.listen(4000);
