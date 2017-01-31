// to run use node.js
// node main.js
var fs = require("fs");
var data = fs.readFile('input.txt', function (err, data){
    if (err) return console.error(err);
    console.log(data.toString());
})
console.log("Program Ended");