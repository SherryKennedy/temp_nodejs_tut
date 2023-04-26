//EVENTS
// Event-Driven Programming
// Used Heavily in Node.js
// hover over link, button etc. in part events
// browser, those are external, 
// event driven programming 
// program executes 
// gui same
// server side, same, heavy node js
// listen for event, functions , event takes place, call back occurs
// built in modules, events under hood. 

// SETUP EVENTS IN NODE::
// assign a variable which comes back as class, obj
const EventEmitter = require('events');
// need to create an instance of this class
const customEmitter = new EventEmitter();
// 'on' - listen for an event 
// 'emit' - emit an event

// thus setup event, naming event response here, subscribe to it, so need callback function
1.
customEmitter.on('response', ()=>{
    // when event takes place do something here
    console.log(`data received `);
});
// same event , but different callback in function
2.
customEmitter.on('response', ()=>{
    // when event takes place do something here
    console.log(`some other logic here `);
});
3.
customEmitter.on('response',(name,id)=>{
    console.log(`data recieved user: ${name} with id: ${id}`);
})
// subscribed above , custome emitter
// strings need to match, if emitting the 'response' event
// 1. and 2.
customEmitter.emit('response');
3.
customEmitter.emit('response','henry',18);
// see in console what we have in the callback
// data received
//some other logic here
//data recieved user: henry with id: 18


//NOTES:
// this is most basic setup
// again : create an instance from the class that we get back from the events module
// then 2 methods  'on' and 'emit'
// can have many methods
// 1. can emit event, but have as many as want
// 2. order matters, 'on' before 'emit'
// first listen for the event 'on' then 'emit' it. Emit placed above, nothing in console. 
// 3. can pass in more arguments as well
// ie string and number, callback function
// one can access those functions as parameters
// **with parameters or none, it will match arguments passed/or not, and run only those that match
// note: with node: may not be writing own events, but they are a core in building and writing your own application. A lot of built in modules rely on them. 





