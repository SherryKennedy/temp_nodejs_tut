// fs async js. problem earlier, callback approach was messy pretty quickly in ex. 11, because nesting one callback inside the other one

// code to block the event loop
// setup the server
const http = require('http');

const server = http.createServer((req,res)=>{
    // ie home page or about 
    if(req.url === '/'){
        res.end('Home page');
    }
    if(req.url === '/about'){
        //issue request a resource with blocking code
        //BLOCKING CODE!!!, this will take some time, syncronous code
        // other users have hard time going elsewhere
        // NEXT WILL FIX THIS  // always strive to setup async.// other patterns to use
        // ie nested for loop blocking
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('About Page');
    }
    res.end('Error Page');

})
// listen on a port
server.listen(5000,()=>{
    console.log('Server listening on port 5000...')
})