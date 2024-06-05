// Run in Node.js
const fs = require('fs');
const path = require('path');

const directoryPaths = ['MoviesShowing', 'MoviesUpcoming'];
const outputFile = 'movies.txt';

// Function to fetch JPG file names in a directory
function fetchJPGFileNames(directory) {
    return fs.readdirSync(directory)
        .filter(file => path.extname(file).toLowerCase() === '.jpg');
}

// Function to write file names to a text file
function writeToFile(fileNames) {
    fs.writeFileSync(outputFile, fileNames.join('\n'));
}

// Main function to fetch file names from directories and write to file
function fetchAndWriteFileNames() {
    let allFileNames = [];
    directoryPaths.forEach(directory => {
        const fileNames = fetchJPGFileNames(directory);
        allFileNames = allFileNames.concat(fileNames.map(fileName => path.join(directory, fileName)));
    });

    writeToFile(allFileNames);
    console.log(`File names written to ${outputFile}`);
}

fetchAndWriteFileNames();