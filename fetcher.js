const request = require('request');
const fs = require('fs');


const args = process.argv.slice(2, 4);

// Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

let URI = args[0];
let filePath = args[1];

request(URI, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return false;
  }
  // i don't have to do anything with response || response.statusCode.. 
  whenDone(body);
});

const whenDone = (data) => {
  fs.writeFile(filePath, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// ✅ What should happen if the local file path given already exists?
// What should happen if the local file path given is invalid?
// ✅ What should happen if the given URL results in an error or non-200 result?