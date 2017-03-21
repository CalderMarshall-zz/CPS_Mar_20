var fs = require('fs');
var filename = 'file1.txt';

fs.readFile(filename, function(err,buffer){
     if (err) {
          console.log(err.message);
          return;
     }
     var contents = buffer.toString();
     var caps = contents.toUpperCase().split().join(' ');
     fs.writeFile(filename, caps, function(err){
          if (err) {
               console.log(err.message);
               return;
          }
          console.log("It worked");
     });
     fs.readFile(filename, function(err, buffer){
          if (err) {
               console.log(err.message);
               return;
          }
          console.log(buffer.toString());
     });
});
