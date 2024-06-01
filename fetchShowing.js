const fs = require('fs');
const path = require('path');

// Define the directory
const showingDirectory = path.join(__dirname, 'MoviesShowing');

// Function to get jpg files from a directory
const getJpgFiles = (directory) => {
    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, files) => {
            if (err) {
                return reject('Unable to scan directory: ' + err);
            }

            const jpgFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');
            resolve(jpgFiles);
        });
    });
};

// Get jpg files from the showing directory
getJpgFiles(showingDirectory)
    .then((showingImages) => {
        console.log('MoviesShowing images:', showingImages);
    })
    .catch(err => {
        console.error(err);
    });