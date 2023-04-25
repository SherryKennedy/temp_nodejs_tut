// serverjs :node example using server, showcase process of async
const http = require('http');

const server = http.createServer((req,res)=> {
    //call back here
    console.log('request event');
    //response.end([data[, encoding]][, callback])
        //data <string> | <Buffer> | <Uint8Array>
        //encoding <string>
        //Returns: <this></this>
    //The method, response.end(), MUST be called on each response
    // hello world is logging on the http page localhost:5000
    res.end('Hello world');
})

server.listen(5000, () => {
    // get request or error
    console.log('Server listening on port : 5000...');
})

// thus http: goto localhost:5000
// get 'request event'
// never get Hello World, not ending?


/*
https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes
make use of debug rather than console in application
//app.js
var debug = require('debug')('app')
debug('Hello, %s!', 'world')
To enable debug lines, simply run this code with the environment variable DEBUG set to “app” or “*”:

DEBUG=app node app.js
here we are using nodemon, but would need to take out the console.logs when go to production
*/