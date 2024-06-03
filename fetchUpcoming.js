const fs = require('fs');
const path = require('path');

// Define the directory
const upcomingDirectory = path.join(__dirname, 'MoviesUpcoming');

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

// Get jpg files from the upcoming directory
getJpgFiles(upcomingDirectory)
    .then((upcomingImages) => {
        console.log('MoviesUpcoming images:', upcomingImages);
    })
    .catch(err => {
        console.error(err);
    });