const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'The body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Removing a note',{
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

if (command.toUpperCase() === `add`.toUpperCase()){
  note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note created!!!`);
    notes.printNote(note);
  } else {
    console.log(`note: "${argv.title}", title is already in use`);
  }
} else if (command.toUpperCase() === `list`.toUpperCase()) {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach( (note) => notes.printNote(note));
} else if (command.toUpperCase() === `remove`.toUpperCase()) {
  var isRemoved = notes.removeNote(argv.title);
  var message = isRemoved ? `note: "${argv.title}", was successfully removed.` :
                            `note: "${argv.title}", did not exist and was not removed.`
  console.log(message);
} else if (command.toUpperCase() === `read`.toUpperCase()) {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log(`Note found!!!`);
    notes.printNote(note);
  } else {
    console.log(`note with title: "${argv.title}", was not found.`);
  }
} else {
  console.log(`Command not recognized`);
}
