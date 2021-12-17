const chalk = require('chalk')
const yargs = require('yargs')
const notesUtils = require('./notes');

const command = process.argv[2];

console.log(process.argv);
// console.log(yargs.argv)

// Customisze yargs verisn

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Notes body',
            demandOption:true,
        }
    },
    handler: function(argv){
        notesUtils.addNote(argv.title,argv.body)
    }
}).argv

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder : {
        title: {
            describe:'Note title to delete',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notesUtils.removeNotes(argv.title)
    }
}).argv

yargs.command({
    command:'list',
    describe:'list the notes',
    handler: function(){
        notesUtils.listNotes();
    }
}).argv

// yargs.command({
//     command:'read',
//     describe:'reading the notes',
//     handler: function(){
//         console.log('read of notes');
//     }
// }).argv

yargs.command({
    command:'read',
    describe:'read a note',
    builder: {
        title: {
            type:'string',
            demandOption:true,
            describe:'title to read',
        }
    },
    handler : (argv) => {
        notesUtils.readNote(argv.title)
    }
}).argv

yargs.parse()