//search data

// db.collection('users').findOne({_id: new ObjectID("5e8cdf19f345e101c4528f46")},(error, user)=>{
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 20}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 20}).count((error,count)=>{
    //     console.log(count)
    // })

    db.collection('tasks').findOne({_id: new ObjectID("5e8cdd18f44c4756a8d37fbb")}, (error,res)=>{
        if(error){
            return console.log('Unable to find')
        }
        console.log(res)
    })

    db.collection('tasks').find({completed: true}).toArray((error,res)=>{
        console.log(res)
    })


    //without async and await

    app.post('/users',(req,res)=>{
        const user = new User(req.body)
        user.save().then(()=>{
            res.status(201).send(user)
        }).catch((error)=>{
            console.log(error)
            res.status(400).send(error)
    
        })
    })
    
    app.get('/users',(req,res)=>{
        User.find({}).then((users)=>{
            res.send(users)
        }).catch((e)=>{
            res.status(500).send()
        })
    })
    
    app.get('/users/:id',(req,res)=>{
        const _id = req.params.id
        
        //console.log(req.params)
        User.findById(_id).then((user)=>{
            if(!user) {
                return res.status(404).send()
            }
            
            res.send(user)
        }).catch((e)=>{
            res.status(500).send()
        })
    })
    
    app.get('/tasks',(req,res)=>{
        Task.find({}).then((tasks)=>{
            res.send(tasks)
        }).catch((e)=>{
            res.status(500).send(e)
        })
    })
    
    app.get('/tasks/:id',(req,res)=>{
        const _id = req.params.id
        Task.findById(_id).then((task)=>{
            if(!task) {
                return res.status(404).send()
            }
    
            res.send(task)
        }).catch((e)=>{
            res.status(500).send()
        })
    })
    
    app.post('/tasks',(req,res)=>{
        const task = new Task(req.body)
        task.save().then(()=>{
            console.log(task)
            res.status(201).send(task)
        }).catch((error)=>{
            console.log(error)
            res.status(400).send(error)
        })
    })


    const multer = require('multer')
    const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file, cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a word document'))
        }
        cb(undefined,true)
        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)


    }
})
const errorMiddleware = (req,res,next)=> {
    throw new Error('From middleware')
}

app.post('/upload', upload.single('upload'), (req,res)=>{
    res.send()
}, (error,req,res,next)=>{
    res.status(400).send({error: error.message})
})

// app.use((req,res,next)=>{
//     if(req.method == 'GET') {
//         res.send('GET request are disabled')
//     }else {
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     if(req) {
//         res.send('Site under maintenance')
//         res.status(503)
//     }
// })


const me = new User({
    name: '  Aryan   ',
    email: 'HANSY.agarwal@GMAIL.com  ',
    password: 'password'
})

me.save().then((me)=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!',error)
})

const t = new Tasks({
    Description: '   get groceries            '
})
t.save().then((t)=>{
    console.log(t)
}).catch((error)=>{
    console.log('Error!',error)
})