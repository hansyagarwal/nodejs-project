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
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Tasks