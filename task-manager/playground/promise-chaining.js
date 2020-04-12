require('../src/db/mongoose')
const User = require('../src/models/user')

//https://docs.google.com/forms/u/0/d/e/1FAIpQLScaAIrRWk3TqvqdiGAEjUa3b68gj7qi84U-rGTTK_9hvNkZJQ/formResponse
//https://docs.google.com/forms/d/e/1FAIpQLScaAIrRWk3TqvqdiGAEjUa3b68gj7qi84U-rGTTK_9hvNkZJQ/viewform?edit2=2_ABaOnuf8d94OTXbGIVSjhaQ_KHa8V3d3CQ-6rOj2iBs9GPK19KeiIM2IiPsZr_q7lAOFRAc

// User.findByIdAndUpdate('5e8f9403f21f322f4ce67e03',{ age: 1 }).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeandCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age:age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5e8f9403f21f322f4ce67e03',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})



