const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "your notes..."
}

const addNote = (title,body) => { 
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((notes) => notes.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
    // const duplicateNotes = notes.filter(function(notes){
    //     return notes.title === title
    // })
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }else{
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e)     {
        return []
    } 
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title)
    if(notesToKeep.length < notes.length)
    {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    console.log(chalk.blue.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const toRead = notes.find((note) => note.title === title)
    if(toRead)
    {
        console.log(chalk.inverse(toRead.title))
        console.log(toRead.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}