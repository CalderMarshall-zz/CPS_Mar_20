var fs = require('fs');
var gm = require('gm');

// sets up read lines
var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});

//asks for url
     rl.question("image url:", function (url){
          // asks file to save to
     gm(url)
          rl.question("Width and Height: ", function (width, height) {
               .resize(width, height)
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
