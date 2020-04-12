const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '  Aryan   ',
//     email: 'HANSY.agarwal@GMAIL.com  ',
//     password: 'password'
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// })



// const t = new Tasks({
//     Description: '   get groceries            '
// })
// t.save().then((t)=>{
//     console.log(t)
// }).catch((error)=>{
//     console.log('Error!',error)
// })