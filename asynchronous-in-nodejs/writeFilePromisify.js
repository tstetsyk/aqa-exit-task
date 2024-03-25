const fsPromises = require('fs').promises

let data = 'Hey, I am newly added!'

fsPromises.writeFile('testFilePromise.txt', data)
    .then(() => {
        console.log('File written successfully');
        console.log('The file has the following content:');
        console.log(data);
    })
    .catch(err => {
        console.error('Error:', err)
    })