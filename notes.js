const fs = require('fs');
const chalk = require('chalk');

const getNote = (title) => {
    const titleIndexObj = fetchTitleIndexObj(title);

    if(titleIndexObj.titleIndex === -1) { 
        console.log(applyRedBackground('Note with given title not found. Try another title.'));
    } else {    
        console.log("Title: " + titleIndexObj.notes[titleIndexObj.titleIndex].title);    
        console.log("Date: " + titleIndexObj.notes[titleIndexObj.titleIndex].date);    
        console.log("Note:" + applyGreenBackground(titleIndexObj.notes[titleIndexObj.titleIndex].body));
    }
};

const addNote = (title, date, body) => {
    const notes = loadNote(); 
    const duplicate = notes.find(inArrtitle => inArrtitle.title === title);

    debugger;    

    if(duplicate) {
        console.log(applyRedBackground('Title taken, choose another!'));
    } else {
        notes.push({
            title,
            date,
            body
        });
        saveNote(notes);
        console.log(applyGreenBackground('Note added!'));
    }
};

const removeNote = (title) => {
    const titleIndexObj = fetchTitleIndexObj(title);

    if(titleIndexObj.titleIndex === -1) { 
        console.log(applyRedBackground('Note with given title not found. Try another title.'));
    } else {
        //notes.splice(requiredTitleIndex, 1);
        titleIndexObj.notes.splice(titleIndexObj.titleIndex, 1);
        console.log(applyGreenBackground("Note removed"));
        saveNote(titleIndexObj.notes);
    }
};

const listNotes = () => {
    const notes = loadNote();
    if(notes) {
        console.log(chalk.underline('Your notes: '));
        notes.forEach((note, index) => {
            ++index;
            console.log(`${index}. ${note.title}`);
        });
    } else {
        console.log('No notes found. Add notes, and then re-attempt to print them');
    }
}

//writes note to disk (.json file)
const saveNote = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNote = () => {
    try{
        const dataJSON = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataJSON);
    } catch(err) {
        console.log("File to load not found. Empty array returned therefore.");
        return [];
    }
}

//returns object of consisting of 'index' and 'notes'
const fetchTitleIndexObj = (title) => {
    const notes = loadNote();
    const titleIndex = notes.findIndex(inArrtitle => inArrtitle.title === title);

    return {
        notes: notes,
        titleIndex: titleIndex
    };
}

const applyGreenBackground = (note) => {
   return chalk.inverse.green(note);
}

const applyRedBackground = (note) => {
    return chalk.red.inverse(note);
 }

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}