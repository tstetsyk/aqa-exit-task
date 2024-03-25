const fsPromises = require('fs').promises

/* 
1. What will appear in the console as a result of the following code:
console.log('first'); 
setTimeout(() => {console.log('second')}, 500);
setTimeout(() => {console.log('third')}, 0);
setTimeout(() => {console.log('fourth')});
console.log('fifth');
*/

first
fifth
third
fourth
second

/* 
2. Create function greeting() which receives argument Word and prints it in the console like 
console.log(`greeting: ${word}`)
pass a string 'Hello!' to that function and execute it with the delay of 1 second.
*/

const greeting = word => console.log(`greeting: ${word}`)
setTimeout(() => greeting('Hello!'), 1000)

/*
3. You have the following Object:

const printer = {
     type: 'laser',
     color: 'b&w',
     print() {console.log(`Printer is of type ${this.type} and color ${this.color}`)}
};

If you execute the command
setTimeout(printer.print, 500);
the console output will be:
'Printer is of type undefined and color undefined'

Fix the code for the console output to become:
'Printer is of type laser and color b&w'
*/

const printer = {
    type: 'laser',
    color: 'b&w',
    print() {console.log(`Printer is of type ${printer.type} and color ${printer.color}`)}
}

setTimeout(printer.print, 500)
setTimeout(printer.print.bind(printer), 500)

/*
4. Add a callback function for the fs.writeFile which would catch the error
if there is one, otherwise the console output should look like this:

File written successfully
The file has the following content:
'Hello World!'

Prerequisites: NodeJS should be installed on your computer
Steps to reproduce:
1. create writeFile.js with the following content and save it to any drive/folder on your computer:
-----------------------------------
const fs = require('fs');

let data = 'Hello World!';
fs.writeFile('testFile.js', data, [your_callback_function]);
------------------------------------
2. open Command Prompt in Windows or terminal in Linux/macOS or any IDE in this drive/folder
3. run command 'node writeFile.js'
*/

/*
5. Rewrite the callback from Task 4 based fs.writeFile() method with promises

Steps to reproduce:
1. create writeFilePromisify.js with the following content and save it to any drive/folder on your computer:
const fsPromises = require('fs').promises;

let data = 'Hey, I am newly added!';
fsPromises.writeFile('testFilePromise.txt', data)
.then(()=> ...your code...
*/

/*
6. Rewrite Task 4 with async/await instead of .then()
your solution should look like this

const fsPromises = require('fs').promises;

const writeFileContent = ...your code...

writeFileContent ('testFilePromise.txt', 'Hey, I am newly added!');
*/

const writeFileContent = async(file, data) => {
    try {
        await fsPromises.writeFile(file, data)
        console.log('File written successfully')
        console.log('The file has the following content:')
        console.log(data)
    } catch (err) {
        console.error('Error:', err)
    }
}

writeFileContent('testFilePromise.txt', 'Hey, I am newly added!')