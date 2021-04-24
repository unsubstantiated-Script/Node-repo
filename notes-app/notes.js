const fs = require('fs')
const chalk = require('chalk')
const {
    array
} = require('yargs')

const getNotes = function () {
    return 'Your Notes...'
}


const addNote = function (title, body) {
    const notes = loadNotes()

    //Check if the array of JSON has a similar title to avoid overwriting
    //Non destructive
    const duplicateNotes = notes.filter((note) => note.title === title)

    //If there is no duplicate, we can add the note 
    if (duplicateNotes.length === 0) {
        //Adding the new info into the array so that the file keeps adding info on 
        notes.push({
            //Shorthand object construction 
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green('New Note Added!'));
    } else {
        console.log(chalk.bgRed('Note title taken'));
    }


}

const removeNote = function (title) {

    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if (newNotes.length === notes.length) {
        console.log(chalk.bgRed("That note does not exist"))
    } else {
        console.log(chalk.red(`Note \`${title}\` has been removed!`));
        saveNotes(newNotes);
    }



};

const saveNotes = function (notes) {
    //Converts the data to JSON and writes to the file
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function () {
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




//Single export 
// module.exports = getNotes

//Multiple
module.exports = {
    getNotes,
    addNote,
    removeNote
}