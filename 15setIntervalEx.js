// setInterval() example
// 2 seconds
setInterval(() =>{
    console.log('hello world');
},2000)
console.log('I will run first.');
// process stays alive unless
// Kill Process with CONTROL + C
// unexpected error

/*
I will run first.
hello world
hello world
hello world
hello world

*/

// set interval is async, thus I will run first happens
// set interval keeps running in those intervals
// every 2 seconds will run the event.
// only exit with ctrl c , or some error
// 