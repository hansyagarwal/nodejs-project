const Task = require('../models/task')
const express = require('express')
const router = new express.Router()

router.get('/tasks',async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }catch(e) {
        res.status(500).send()
    }
})

router.post('/tasks',async (req,res)=>{
    const task = new Task(req.body)

    try {
        const t = await task.save()
        res.send(task)
        res.status(201).send()
    }catch(e) {
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['Description','Completed']
    const isValidOperation =  updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(404).send({error: 'Invalid update field'})
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body, {new: true, runValidators: true})
        if(!task) {
            res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router