// grab the http module
const http = require('http');
// create server
const server = http.createServer((req,res)=>{
    //typically request and response from the server
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page.');
    }
    if(req.url === '/about'){
        res.end('Here is our short history.')
    }
    res.end(
        `<h1>Ooops!</h1>
         <p>We can't seem to find the page you are looking for.</p>
         <a href="/">back home</a>
        `
    
    )
    //res.write('Welcome to our home page');
    //res.end();
})
// set up the port that the server will listen to, arbitrary 5000
server.listen(5000);
//open up your terminal and clear everything
//my path is tutorial 3 now
// start up server, notice not exiting, not  finding
// anything, no Welcome, would be in a web page at 
// port 5000
// localhost:5000

// request reacts with the url
// so can get web page  ie /about.html 

// everytime make a change to this sever
// remember to stop it. ctrl c ,then run again
// then need to go back to the browser and refresh

// request is a giant object
// look for the url property
// once refresh the url, see the object in the server
// return the req object
// url is the endpoint client is requesting
// cases:
// localhost:5000    
// localhost:5000/about
// resource does not exist on server

