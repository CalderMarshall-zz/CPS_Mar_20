var fs = require('fs');
var readline = require('readline');


var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});
rl.question("Input file: ", function (filename) {
     fs.readFile(filename, function(err,buffer){
          if (err) {
               console.log(err.message);
               return;
          }
          console.log(buffer.toString());
          content = buffer.toString();

          rl.question("Output file: ", function (filename) {
               fs.writeFile(filename, content, function(err){
                    if (err) {
                         console.log(err.message);
                         return;
                    }
                    console.log("It worked");
               });

          });
     });
});
