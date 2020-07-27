const express=require('express')
const routing =require('./routes/route')
const app=express()
const mongoose = require('mongoose')
// const Route = require('./routes/route')

mongoose.connect('mongodb://localhost:27017/Quiz', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('route/index')
})



// app.get('/', (req,res)=>{
//     res.send('hello')
// })
app.use('/route',routing)

app.listen(4000)
