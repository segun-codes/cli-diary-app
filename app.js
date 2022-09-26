//SECTION 4
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//customize yarg version
yargs.version('1.1.0');

//Setup "add" command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        date: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.date, argv.body);
    }
});

//Setup "list" command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler() {
        notes.listNotes();
    }
});

//Setup "update" command
yargs.command({
    command: 'update',
    describe: 'Add a new note',
    handler() {
        console.log('Updating a note!');
    }
});

//Setup "remove" command
yargs.command({
    command: 'remove',
    describe: 'remove/delete a note',
    builder: {
        title: {
            describe: 'Title of note to remove/delete',
            demandOption: 'required',
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//Setup "remove" command
yargs.command({
    command: 'get',
    describe: 'get one note',
    builder: {
        title: {
            describe: 'getting one note',
            demandOption: 'required',
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Inside get handler');
        notes.getNote(argv.title);
    }
})

yargs.parse();
//OR //console.log(yargs.argv);






















//--------------------------------------------------------------------------------------
//SECTION 3
/*const chalk = require('chalk');
const getNotes = require('./notes.js');


const msge = getNotes();
console.log(msge);

const greenMessage = chalk.green.inverse.bold(msge);
console.log(greenMessage);*

//import validator from 'validator';
//import chalk from 'chalk'; //const chalk = require('chalk');
//import { getNotes } from './notes.js'; const getNotes = require('./notes');

//const msge = 'This message is printed to console in color green, underlined and bold-faced';
//console.log(chalk.green.underline.inverse.bold(msge));
//console.log(validator.isEmail('adoughdoughio.com'));
//console.log(validator.isURL('htt://io.com'));


//import getNotes from './notes.js';
//console.log(getNotes());
//const add = require('./utils.js');
//console.log('Sum: ' + add(2, 6));

/* TEST 1

const fs = require('node:fs');

//fs.writeFileSync('notess.txt', 'Hello....!');
//fs.appendFileSync('notes.txt', ' Coupled with knowledge from Segun');
*/
