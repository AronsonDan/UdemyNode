// var obj = {
//   name: 'Dan'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(typeof obj);
// console.log(stringObj);
// console.log(obj);


// var personString = '{"name":"Dan","age":"34"}'
//
// var person = JSON.parse(personString);
//
// console.log(typeof personString);
// console.log(personString);

const fs = require('fs');
console.log('Creating a JavaScript object');
var originalNote = {
  title: 'Some title',
  body: 'Somebody'
};
console.log('originalNote typeof:', typeof originalNote);

console.log('Converting object into a String object');
var originalNoteString = JSON.stringify(originalNote);
console.log('originalNoteString typeof:', typeof originalNoteString);

console.log('Write the String to a local file');
fs.writeFileSync('notes.json', originalNoteString);

console.log('Reading the contents of the file');
var noteString = fs.readFileSync('./notes.json');
console.log('noteString typeof:', typeof noteString);
var note = JSON.parse(noteString);

console.log('note typeof:', typeof note);
console.log(note);
console.log(note.title);
