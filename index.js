const fs = require("fs");
const path = require("path");

let directory = __dirname;

let rawPath = path.join(directory, "/raw");
let exportPath = path.join(directory, "/export");

console.log("Conversion Started...");
let i = 0;

fs.readdir(rawPath, (err, files) => {
  files.forEach((file) => {
    // read file
    let filePath = path.join(rawPath, file);
    // export
    let filename = file.split(".")[0];
    let ext = ".jpg";
    let exportFileName = filename + ext;
    let exportFilePath = path.join(exportPath, exportFileName);
    // rename file
    fs.renameSync(filePath, exportFilePath);
    i++;
  });
});

console.log(`Conversion Complete!`);
