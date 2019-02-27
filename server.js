const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 302

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

// models
const Hacker = require('./models/Hacker')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://cruzhackbe:cruzhack1@ds153495.mlab.com:53495/hackers',{useNewUrlParser: true })

app.get('/hackers/', (req,res) => {
    Hacker.find({}, (err,hacker) => {
        if (err) console.log('error')
        else if (!hacker) res.json('no hacker in db')
        else {
            res.json(hacker);
            console.log(hacker);
        }
    })
})
app.get('/hackers/:id', (req,res) => {
    const id = req.params.id;
    Hacker.findOne({'id': id}, (err, hacker) => {
        if (err) console.log('error')
        else if (!hacker) res.json('no hacker matching ID: '+ id)
        else {
            res.json(hacker);
            console.log(hacker);
        }
    })
})
app.post('/add', (req,res) => {
    const hacker = new Hacker(req.body)
    hacker.save().then(hacker => {
        res.json(hacker)
    }).catch(err => {
        res.status(400).send('unable to save to db')
    })
})
app.listen(port, () => {
    console.log('Listening on ', port);
})