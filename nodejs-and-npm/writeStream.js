const fs = require('fs')

const writeStream = fs.createWriteStream('writeStream.txt')

writeStream.write('first line\n')
writeStream.write('second line\n')

writeStream.end(() => {
    console.log('Finished writing new lines to the file.')
});