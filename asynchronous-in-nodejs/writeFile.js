const fs = require('fs')

let data = 'Hello World!'

fs.writeFile('testFile.txt', data, (err) => {
    if (err) {
        console.error('Error:', err)
    } else {
        console.log('File written successfully')
        console.log('The file has the following content:')
        console.log(data)
    }
})