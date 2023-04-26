// 'request' events ::: Using Event Emitter API
const http = require('http');

//remember the initial setup
/*
const server = heetp.createServer((req,res)=> {
   resizeBy.end("Welcome");
})

another way to setup by using event emitter api
*/

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome');
})

server.listen(5000);

//http://localhost:5000/
//see: Welcome

//notes:
//everytime request comes in 
//do the request

// still create a server
// but instead of call back function
// server has the method 'on' and we listen for the request event
// when the event comes in, we have the callback function that handles it. 
// ** behind the scenes , server 'emits' the event, and we can subscribe to it, listen to it, respond to it however needed for app.
// go to node documentation:
// http: search
// scroll: see Class: http.Server
// see that it is a class, has Event: 'request'
// thus server has the ability to create, to listen for request events
// search more in this doc: see that server 
// Extends: <EventEmitter>
// server extends the event emitter. 
// thus, not setting up a bunch of events on your own, a bunch of built in modules there that rely heavily on this concept of events.






