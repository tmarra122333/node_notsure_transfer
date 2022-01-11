let duke = require('./blue_devils')

// console.log(duke);

duke.time(3, 15)

duke.counter(12, 5)

let fs = require('fs');
let http = require('http');

// console.log(fs)

fs.writeFile('./duke_scores.js', "Nothing here", function() {
    console.log("This is working")
})