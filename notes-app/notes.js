const fs = require('fs')
const chalk = require('chalk')
const {
    array
} = require('yargs')
const {
    match
} = require('assert')

const getNotes = () => 'Here is yer notes'

//CRUD operations
const addNote = (title, body) => {
    const notes = loadNotes()

    //Check if the array of JSON has a similar title to avoid overwriting
    //Non destructive
    //filter is a bit less efficient as it will search all the notes
    // const duplicateNotes = notes.filter((note) => note.title === title)
    //Find is more efficient because it will stop on the first note it finds...
    const duplicateNote = notes.find(note => note.title === title)

    //If there is no duplicate, we can add the note 
    if (duplicateNote) {
        console.log(chalk.bgRed('Note title taken'));
    } else {
        //Adding the new info into the array so that the file keeps adding info on 
        notes.push({
            //Shorthand object construction 
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green('New Note Added!'));
    }
}

const removeNote = (title) => {

    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if (newNotes.length === notes.length) {
        console.log(chalk.bgRed("That note does not exist"))
    } else {
        console.log(chalk.red(`Note \`${title}\` has been removed!`));
        saveNotes(newNotes);
    }
}

const readNote = (title) => {

    const notes = loadNotes()

    const note = notes.find(note => note.title === title)
    if (note) {
        console.log(chalk.bgMagenta(note.title));
        console.log(note.body);
    } else {
        //Adding the new info into the array so that the file keeps adding info on 
        console.log(chalk.bgRed('This note does not exist'));
    }
}



//Utility functions 
const loadNotes = () => {
    //This is error handling in case the JSON file doesn't exist. 
    try {
        //If this fails 
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        //This will run which will store the entry in an array till the program finds a file to load it in 
        return []
    }

}

const saveNotes = (notes) => {
    //Converts the data to JSON and writes to the file
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const listNotes = () => {
    console.log(chalk.bgBlue('Your Notes'));
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title))
    // const dataJSON = JSON.stringify(notes)
    // fs.writeFileSync('notes.json', dataJSON)
}


//Single export 
// module.exports = getNotes

//Multiple
module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}