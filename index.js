// imports
const fs = require("fs");
const path = require("path");

// dec;are directory
let directory = __dirname;

// build paths
let rawPath = path.join(directory, "/raw");
let exportPath = path.join(directory, "/export");
let utilPath = path.join(directory, "util");

// start up message
console.log("Conversion Started...");

// remove .gitignore files
fs.unlinkSync(path.join(rawPath, ".gitignore"));
fs.unlinkSync(path.join(exportPath, ".gitignore"));

// convert files
fs.readdir(rawPath, (err, files) => {
  files.forEach((file) => {
    // build file info
    let filePath = path.join(rawPath, file);
    let filename = file.split(".")[0];
    let ext = ".jpg";
    let exportFileName = filename + ext;
    let exportFilePath = path.join(exportPath, exportFileName);
    // rename file
    fs.renameSync(filePath, exportFilePath);
  });
});

// confirmation message
console.log(`Conversion Complete!`);
