const chalk = require('chalk')
const validator = require('validator')
const {
    argv
} = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


//Customize yargs version

yargs.version('1.1.0')

//add, remove, read, list

//CRUD with Yargs
//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            //description 
            describe: 'Note Title',
            //required
            demandOption: true,
            //default needs to be set or you'll get bool
            type: 'string'
        },
        body: {
            //description 
            describe: 'Note Body',
            //required
            demandOption: true,
            //default needs to be set or you'll get bool
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            //description 
            describe: 'Note Title',
            //required
            demandOption: true,
            //default needs to be set or you'll get bool
            type: 'string'
        }
    },
    handler: () => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            //description 
            describe: 'Note Title',
            //required
            demandOption: true,
            //default needs to be set or you'll get bool
            type: 'string'
        }
    },
    handler: () => {
        notes.readNote(argv.title);
    },
})

// console.log(process.argv);
// console.log(yargs.argv);
//lets yargs console log its info
yargs.parse()