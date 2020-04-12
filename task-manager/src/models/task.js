const mongoose = require('mongoose')

const Tasks = mongoose.model('Tasks',{
    Description: {
        type: String,
        trim: true,
        required: true
    }, 
    Completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Tasks