var fs = require('fs');
var readline = require('readline');
var request = require('request');

var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});

//asks for url
     rl.question("URL:", function (url){
          // asks file to save to
          rl.question("Save to file: ", function (page) {
               // fetches data from page
               request.get(url,function(err,resp,pagecontent){
                    // writes data to save to file
                         fs.writeFile(page, pagecontent, function(err){
                         if (err) {
                              console.log(err.message);
                              return;
                         }
                         console.log("Saved to file: " + page);
                    });
          });
     });
});
