const fs = require('fs');
// Read File
const path = require('path');
const indexPath = path.join(__dirname, 'index.html');

fs.readFile(indexPath, (err, data) => {
  if (err) console.log(err);
  else {
    console.log(data.toString());
  }
});


// Read Dir
fs.readdir('.', (err, files) => {
  if (err) console.log(err);
  else {
    console.log(files);
  }
});


// Write File
const data = 'This is the test , if its writing the data on the required file or not';
fs.writeFile('hello.txt', data, (err) => {
  if (err) console.log(err);
  else console.log('File written successfully');
});


// Append File
fs.appendFile('hello.txt', 'Its not overwriting , its appending\n', (err) => {
    if (err) console.log(err);
    else console.log('Data appended to the file');
  });


// Create new dir
const path = './new-dir';
fs.mkdir(path, (err) => {
  if (err) console.log(err);
  else console.log('Directory created successfully');
});


// Rename file
fs.rename('./hello.txt', './writeup.txt', (err) => {
  if (err) console.log(err);
  else console.log('File renamed successfully');
});


// Remove file
fs.unlink('./Tobedeleted', (err) => {
  if (err) console.log(err);
  else console.log('File removed successfully');
});


// Readline
const readline = require('readline');
const file = fs.createReadStream('writeup.txt');
const rl = readline.createInterface({
  input: file,
  crlfDelay: Infinity
});
// listen to the line event and print each line
rl.on('line', (line) => {
  console.log(line);
});


// Delete folder with sub folders
function deleteFolder(folderPath){
  fs.rmdir(folderPath, { recursive: true }, (err) => {
    if (err) console.log(err);
    else console.log('Folder deleted successfully');
  });
}
const folderPath = path.join(__dirname, 'ABC');
deleteFolder(folderPath);
