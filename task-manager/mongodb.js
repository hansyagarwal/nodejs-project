// CRUD create read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    //update
   const updatePromise = db.collection('users').updateOne({
       _id: new ObjectID("5e8cc64b0134312044e73416")
   }, {
       $inc: {
           age: 1
       }
   })
   updatePromise.then((result)=>{
       console.log(result)
   }).catch((error)=>{ 
    console.log(error)
   })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result)=>{
        console.log(result.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })


    //delete
    db.collection('users').deleteMany({
        age: 27
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        description: 'do chores'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })


})
