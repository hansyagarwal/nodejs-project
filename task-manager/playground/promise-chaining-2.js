require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete(
//     '5e9096216df65d64cc8789ea',{
//         _id: '5e9096216df65d64cc8789ea'
//     }).then((task)=>{
//         console.log(task)
//         return Task.countDocuments({Completed: false})
//     }).then((t)=>{
//         console.log(t)
//     }).catch((e)=>{
//         console.log(e)
//     })

const deleteTaskandCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({Completed: false})
    return count
}

deleteTaskandCount('5e90957b09b21c36e82fbefd').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})