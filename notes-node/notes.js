const fs = require('fs');
const lodash = require('lodash');

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes-data.json')
    return JSON.parse(noteString)
  } catch(e){
    return [];
  }
};
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0){
    // add the note into the array
    notes.push(note);
    // write the contents of notes array into the file
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  var notes = fetchNotes();
  var note = notes.find(note => note.title === title);
  return note;
}

var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter notes, removing the one with title of argument
  var filteredNotes = notes.filter( (note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);
  // print a message if a note was removed
  return notes.length !== filteredNotes.length
}

var printNote = (note) => {
  // break on this line
  debugger;
  console.log(`------------------`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log(`------------------`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  printNote
}
