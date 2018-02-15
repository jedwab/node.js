var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, files){
    if (err) throw err;

    var separatedFiles = "";

    files.forEach(function(file){
        separatedFiles += file + '\r\n';
    });
    
    fs.writeFile('tekst.txt', separatedFiles, function(err) {
        if (err) throw err;
        console.log('W pliku tekst.txt zapisano zawartość katalogu'.yellow); 
    });
});