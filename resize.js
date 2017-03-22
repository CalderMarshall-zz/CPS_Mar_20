var fs = require('fs');
var gm = require('gm');
var request = require('request');

// sets up read lines
var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});
var image = "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png";

request(image, function (error, response, html){
     console.log('error: ' error);
     gm(image)
          .resize(240,240)
          .write()
})
//asks for url
//           var options = "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png"
//           request (options, function(err, response, html) {
//                console.log('error:', error);
//           .resize(width, height)
//                // writes data to sav
//                     .write(url), function(err){
//                     if (err) {
//                          console.log(err.message);
//                          return;
//                     }
//                     console.log("Saved to file: " + page);
//
//                     gm(url)
//           });
//           // asks file to save to
//
//
//
//
// });
