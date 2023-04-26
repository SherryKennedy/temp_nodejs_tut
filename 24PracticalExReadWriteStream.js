// practical example Read/Write big streams : note I kept it same size: still had issues to look at!

// write an even bigger file
//const {writeFileSync} = require('fs');
// just add another 0 to end of itterations i<100000, create a megabyte file if want to to
// for (let i=0; i<10000; i++){
//     writeFileSync('./content/big.txt',
//                    `hello world ${i}\n`, 
//                    { flag: 'a'});
// }

// once created server to read
var http = require('http');
var fs = require('fs');
//creating a readfile server http , take variable res.end puts to http page
// effectively sending a large text file, navigate to localhost:5000 see there
// PROBLEM::: is the size: press refresh, and sending these types of files over the wire, internet, makes difficult to users, sending large chunks of data
// can see that in the headers, look at what is sent in browser -> developer
// better to send in chunks 2. 

http
    .createServer(function(req,res){
        1.
        // const text = fs.readFileSync('./content/big.txt','utf8');
        // res.end(text);
        // this worked
        2.
        // setup with fileStream, same path and encoding
        const fileStream = fs.createReadStream('./content/big.txt','utf8');
        // stream is setup , so now have access to event
        fileStream.on('open',()=>{
            fileStream.pipe(res);
            //callback function, instead of res.end(..), filestream has a pipe
            // pipe pushes from the read stream to the write stream
            // thus can read and write data in chunks
            // thus response obj can be used for a writeable stream
            
            // go back to browser and refresh, see intersting, sizes
            // on the network tab mine wont allow the write anymore using pipe
            // go to headers(click on localhost) , see still same request, same size, but in headers, see chunked 

        })
        //setup error
        fileStream.on('error',(err)=>{
            // this may need err.toString();  will show on the website page, expects a string
            // **may be fixed in later versions of node?  / wrote to console previously?
            // **network tab chrome disable cache checked, online (no throttle) checked
            res.end(err);
        })
    })
    .listen(5000);

    // get error Crbug/1173575, non-JS module files deprecated error 
    //[Solved]  https://bobbyhadz.com/blog/javascript-crbug-1173575-non-js-module-files-deprecated
    // connectivity issue, debugging in vscode
    // to solve error
    //To solve the error, make sure your network is not set to "Offline" in your browser's 
    //Network tab and ensure your development server is running.*

    /*
        _http_outgoing.js:668
      throw new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be one of type string or Buffer. Received type object
    at ServerResponse.end (_http_outgoing.js:668:13)
    at ReadStream.<anonymous> (/Users/sherrykennedy/Documents/NodeJSTutorial/Tutorial3a/app.js:45:17)
    at ReadStream.emit (events.js:200:13)
    at internal/fs/streams.js:123:12
    at FSReqCallback.oncomplete (fs.js:153:23)

   var strings = fs.readFileSync("platforms/android/app/src/main/res/values/strings.xml").toString();

    */
// whole issue I really had was that the file was not found, the error want text back 
// eventually cleared cache, showed error very small on the screen, think I did err.tostring()
//then saw that file path was not found did not copy over the ./content/ ...    had /content/...
// note: just wrote to console before?

// ***as well, in developer tab for chrome: network tab: ensure to disable cache checkmark, checkmark say online (no throttle)

// NOtE: End of SEction
//  Done with node Fundamentals
// Next:: stop creating servers