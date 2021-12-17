const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes =  loadNotes();
    const duplicateNotes = notes.find((note)=>{
        return note.title===title
    })
    debugger
    console.log('duplicateNotes',duplicateNotes)
    if(!duplicateNotes){
        notes.push({
            title,
            body,
        })
        saveNotes(notes)
        console.log('New Note added');
    }
    else{
        console.log('Note Title taken');
    }
}   

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer)
    }catch(e){
        // console.error(e)
        return [];
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note=>{
        return note.title!==title
    })
    console.log('notes',notes)
    console.log('filteredNotes',filteredNotes)
    if(filteredNotes.length !== notes.length){
        saveNotes(filteredNotes)
        console.log(chalk.green('NOTE REMOVED SUCCESS'))
    }
    else {
        console.log(chalk.red('this note does not exist'))
    }
}

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your Notes: '))
    notes.forEach(note=>{
        console.log('Title', note.title, 'body',note.body);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    console.log('title',title)
    const requiredNote = notes.find((note)=>{
        return note.title === title
    })
    console.log('requiredNote',requiredNote)
    if(requiredNote){
        console.log('HERE IS THE NOTE',requiredNote)
    }
    else {
        console.log('Note not found')
    }
}

module.exports = {
    addNote,
    removeNotes,
    listNotes,
    readNote,
};
